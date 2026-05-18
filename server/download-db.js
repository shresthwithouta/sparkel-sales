import mongoose from 'mongoose';
import fs from 'fs';
import 'dotenv/config';

// To run this script:
// 1. Ensure you have MONGO_URI set in your .env file
// 2. Run: node download-db.js

const uri = process.env.MONGO_URI;

if (!uri) {
  console.error("Please provide MONGO_URI in your .env file.");
  process.exit(1);
}

async function downloadData() {
  try {
    console.log("Connecting to database...");
    const db = await mongoose.createConnection(uri).asPromise();
    console.log("Connected successfully.");

    const collections = await db.db.listCollections().toArray();
    const allData = {};

    for (let collectionInfo of collections) {
      const collectionName = collectionInfo.name;
      
      // Skip system collections
      if (collectionName.startsWith('system.')) continue;
      
      console.log(`Downloading collection: ${collectionName}...`);
      const collection = db.collection(collectionName);
      const docs = await collection.find({}).toArray();
      
      allData[collectionName] = docs;
      console.log(`Downloaded ${docs.length} documents from ${collectionName}.`);
    }

    // Write all data to a JSON file
    fs.writeFileSync('database-backup.json', JSON.stringify(allData, null, 2));
    console.log("\n✅ All data downloaded successfully to 'database-backup.json'!");
    
    await db.close();
    process.exit(0);

  } catch (error) {
    console.error("Error downloading data:", error);
    process.exit(1);
  }
}

downloadData();
