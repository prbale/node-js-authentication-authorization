
// Load environment variables
const dotenv = require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const rateLimit = require('express-rate-limit');

const errorHandler = require('./middlewares/errorhandler');
const dbConnect = require('./config/dbConnect');
const authRoutes = require('./routes/authRouts');
const userRoutes = require('./routes/userRoutes');

// Initialize Express app
const app = express();

// Connect to the database
dbConnect();


// Application Constants
const PORT = process.env.PORT || 7002;
const APP_NAME = process.env.APP_NAME || "Node API";

// Middleware for parsing JSON bodies
app.use(express.json());

// Security Middleware
app.use(helmet()); // Adds various security headers
app.use(cors()); // Enable CORS for all origins (adjust if needed)
app.use(compression()); // Compress HTTP responses

// Rate Limiting (e.g., max 100 requests per 15 minutes per IP)
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    message: { message: "Too many requests from this IP, please try again later." }
});
app.use('/api/', apiLimiter);

// Application Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// Global Error Handler
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`${process.env.APP_NAME} is running on Port ${PORT}`);
});

