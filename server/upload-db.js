import mongoose from 'mongoose';
import fs from 'fs';
import 'dotenv/config';
const { ObjectId } = mongoose.Types;

// To run this script:
// 1. Ensure you have your NEW database URI set as MONGO_URI in your .env file
// 2. Ensure 'database-backup.json' exists in the same folder
// 3. Run: node upload-db.js

const uri = process.env.MONGO_URI;

if (!uri) {
  console.error("Please provide MONGO_URI in your .env file.");
  process.exit(1);
}

// Helper to recursively restore ObjectIds and Dates that were stringified in JSON
function restoreTypes(obj) {
  if (obj === null || typeof obj !== 'object') return obj;

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
      if (typeof val === 'string' && /^[0-9a-fA-F]{24}$/.test(val) && key.endsWith('Id') || key === '_id') {
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

async function uploadData() {
  try {
    if (!fs.existsSync('database-backup.json')) {
      console.error("❌ 'database-backup.json' not found! Please run node download-db.js first.");
      process.exit(1);
    }

    console.log("Reading backup file...");
    const rawData = fs.readFileSync('database-backup.json', 'utf8');
    const allData = JSON.parse(rawData);

    console.log("Connecting to the new database...");
    const db = await mongoose.createConnection(uri).asPromise();
    console.log("Connected successfully.");

    for (const collectionName in allData) {
      const docs = allData[collectionName];
      console.log(`\nUploading collection: ${collectionName}...`);
      
      if (docs.length === 0) {
        console.log(`Skipping ${collectionName} as it is empty.`);
        continue;
      }

      const collection = db.collection(collectionName);
      
      // Optional: wipe the new collection before inserting
      await collection.deleteMany({});
      
      // Restore proper BSON types (like ObjectId and Dates) before inserting
      const processedDocs = docs.map(doc => restoreTypes(doc));

      await collection.insertMany(processedDocs);
      console.log(`✅ Uploaded ${processedDocs.length} documents into ${collectionName}.`);
    }

    console.log("\n🎉 All data uploaded successfully to the new database!");
    
    await db.close();
    process.exit(0);

  } catch (error) {
    console.error("Error uploading data:", error);
    process.exit(1);
  }
}

uploadData();
