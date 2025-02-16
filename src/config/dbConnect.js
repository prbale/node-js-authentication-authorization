require('dotenv').config();
const mongoose = require('mongoose');

/**
 * Establishes a connection to the MongoDB database.
 * 
 * - Reads the connection paramters from the environment variables.
 * - Logs successful connection details.
 * - Handles conection errors gracefully.
 */
const dbConnect = async () => {
    
    try {
        const connection = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(`Database Connected Successfully : Host: ${connection.connection.host}, Database: ${connection.connection.name}`);
    }
    catch(err) {
        console.error("Database Connection Failed.");
        console.log(err);
        process.exit(1);
    }
}

module.exports = dbConnect;