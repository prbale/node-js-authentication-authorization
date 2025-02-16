const express = require('express');
const dotenv = require('dotenv');
const errorHandler = require('./middlewares/errorhandler');
const dbConnect = require('./config/dbConnect');
const authRoutes = require('./routes/authRouts');
const userRoutes = require('./routes/userRoutes');

dbConnect();

// Load environment variables
dotenv.config();

const app = express();

const PORT = process.env.PORT || 7002;

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`${process.env.APP_NAME} is running on Port ${PORT}`);
});

