
const bcrypt = require("bcryptjs");
const { generateAuthToken } = require("../utils/auth");

const User = require('../models/userModel');

/**
 * Register a new user.
 * 
 * - Hashes the password before saving.
 * - Performs basic input validation.
 * - Sends a success response upon completion.
 */
const register = async (req, res) => {

    const { username, password, role } = req.body;

    // Input validation
    if (!username || !password || !role) {
        return res.status(400).json({ message: "All fields (username, password, role) are required." });
    }

    try {
        // Check if the username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(409).json({ message: "Username already taken. Please choose a different one." });
        }

        // Hash a password before storing it in a database
        // 10 is the number of rounds used to generate the salt
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save new user
        const newUser = new User({ username, password: hashedPassword, role });

        await newUser.save();

        res.status(201).json({ message: `User registered successfully with username: ${username}` });
    }
    catch (err) {
        console.error("Registration Error:", error);
        res.status(500).json({ message: "An error occurred while registering the user. Please try again later." });
    }
};

/**
 * Authenticates a user and returns a JWT token.
 * 
 * - Checks if the user exists.
 * - Verifies the password.
 * - Generates and returns a JWT token.
 */
const login = async (req, res) => {

    const { username, password } = req.body;

    // Input validation
    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required." });
    }

    try {

        // Find user by username
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: "Invalid username or password." });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid username or password." });
        }

        // Generate JWT token
        const token = generateAuthToken(user._id, user.role);
        res.status(200).json({ token });

    } catch (err) {
        console.error("Login Error: ", err);
        res.status(500).json({ message: "An error occurred while logging in. Please try again later." });
    }
};


module.exports = {
    register,
    login,
}