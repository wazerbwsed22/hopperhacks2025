const express = require('express');
const { connectDB, getDB } = require('./db');
const { ObjectId } = require('mongodb');

const app = express();

// ==========================
// Middleware
// ==========================
app.use(express.json());

// ==========================
// MongoDB Connection
// ==========================
(async () => {
  await connectDB();
})();
