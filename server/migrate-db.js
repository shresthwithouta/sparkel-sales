import mongoose from 'mongoose';
import 'dotenv/config';

// To run this script:
// 1. Add OLD_MONGO_URI and NEW_MONGO_URI to your .env file
// 2. Run: node migrate-db.js

const oldUri = process.env.OLD_MONGO_URI;
const newUri = process.env.NEW_MONGO_URI;

if (!oldUri || !newUri) {
  console.error("Please provide both OLD_MONGO_URI and NEW_MONGO_URI in your .env file.");
  process.exit(1);
}

async function migrateData() {
  try {
    console.log("Connecting to old database...");
    const oldDb = await mongoose.createConnection(oldUri).asPromise();
    console.log("Connected to old database.");

    console.log("Connecting to new database...");
    const newDb = await mongoose.createConnection(newUri).asPromise();
    console.log("Connected to new database.");

    // Get all collections from the old DB
    const collections = await oldDb.db.listCollections().toArray();
    
    for (let collectionInfo of collections) {
      const collectionName = collectionInfo.name;
      
      // Skip system collections
      if (collectionName.startsWith('system.')) continue;
      
      console.log(`\nMigrating collection: ${collectionName}`);
      
      const oldCollection = oldDb.collection(collectionName);
      const newCollection = newDb.collection(collectionName);
      
      // Fetch all documents from the old collection
      const docs = await oldCollection.find({}).toArray();
      console.log(`Found ${docs.length} documents in ${collectionName}.`);
      
      if (docs.length > 0) {
        // Optional: clear existing data in the new collection to avoid duplicate key errors
        await newCollection.deleteMany({});
        console.log(`Cleared existing data in new collection: ${collectionName}`);

        // Insert documents into the new collection
        await newCollection.insertMany(docs);
        console.log(`Successfully inserted ${docs.length} documents into new ${collectionName}.`);
      } else {
        console.log(`Skipping ${collectionName} as it is empty.`);
      }
    }

    console.log("\n🎉 Migration completed successfully!");
    
    // Close connections
    await oldDb.close();
    await newDb.close();
    process.exit(0);

  } catch (error) {
    console.error("Error during migration:", error);
    process.exit(1);
  }
}

migrateData();
