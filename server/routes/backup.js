import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// Helper to recursively restore ObjectIds and Dates that were stringified in JSON
function restoreTypes(obj) {
  if (obj === null || typeof obj !== 'object') return obj;

  const { ObjectId } = mongoose.Types;

  // If it looks like a stringified ObjectId, convert it back
  if (typeof obj === 'string' && /^[0-9a-fA-F]{24}$/.test(obj)) {
    return new ObjectId(obj);
  }

  if (Array.isArray(obj)) {
    return obj.map(item => restoreTypes(item));
  }

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const val = obj[key];
      
      // Handle the case where JSON stringified an ObjectId to a string
      if (typeof val === 'string' && /^[0-9a-fA-F]{24}$/.test(val) && (key.endsWith('Id') || key === '_id')) {
         obj[key] = new ObjectId(val);
      } else if (typeof val === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(val)) {
         // It might be a Date
         obj[key] = new Date(val);
      } else if (typeof val === 'object') {
        obj[key] = restoreTypes(val);
      }
    }
  }
  return obj;
}

// GET /api/backup/download - Download entire DB as JSON
router.get('/download', async (req, res) => {
  try {
    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
    const allData = {};

    for (let collectionInfo of collections) {
      const collectionName = collectionInfo.name;
      
      // Skip system collections
      if (collectionName.startsWith('system.')) continue;
      
      const collection = db.collection(collectionName);
      const docs = await collection.find({}).toArray();
      allData[collectionName] = docs;
    }

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', 'attachment; filename=database-backup.json');
    res.status(200).send(JSON.stringify(allData, null, 2));

  } catch (error) {
    console.error("Backup download error:", error);
    res.status(500).json({ message: "Failed to download backup" });
  }
});

// POST /api/backup/upload - Upload JSON backup to DB
router.post('/upload', async (req, res) => {
  try {
    const allData = req.body;
    
    if (!allData || typeof allData !== 'object') {
      return res.status(400).json({ message: "Invalid backup data" });
    }

    const db = mongoose.connection.db;

    for (const collectionName in allData) {
      const docs = allData[collectionName];
      
      if (!Array.isArray(docs) || docs.length === 0) {
        continue;
      }

      const collection = db.collection(collectionName);
      
      // Wipe the collection before inserting
      await collection.deleteMany({});
      
      // Restore proper BSON types (like ObjectId and Dates) before inserting
      const processedDocs = docs.map(doc => restoreTypes(doc));

      await collection.insertMany(processedDocs);
    }

    res.status(200).json({ message: "Database restored successfully" });

  } catch (error) {
    console.error("Backup upload error:", error);
    res.status(500).json({ message: "Failed to upload backup" });
  }
});

export default router;
