//db file for the backend

const { MongoClient } = require('mongodb');

// MongoDB connection URL
const url = 'mongodb://localhost:27017';  // Update this if needed (e.g., cloud MongoDB URL)
const client = new MongoClient(url);

let db;

// Function to connect to MongoDB
async function connectDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        db = client.db('dementiaSystem');  // Database name
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
    }
}

// Function to get the connected database instance
function getDB() {
    if (!db) throw new Error('Database not initialized');
    return db;
}

module.exports = { connectDB, getDB };