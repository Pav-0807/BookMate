require('dotenv').config();
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const path = require('path');

// Middleware to parse JSON
app.use(express.json());

// Initialize SQLite database
const dbPath = path.resolve(__dirname, 'bookmate.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database.');
    }
});

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the BookMate backend with SQLite!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
