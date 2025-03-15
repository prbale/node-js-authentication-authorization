const jwt = require("jsonwebtoken");

/**
 * Generates a JWT token for the authenticated user.
 * 
 * @param {string} userId - The user's ID.
 * @param {string} role - The user's role.
 * @returns {string} A signed JWT token.
 */
const generateAuthToken = (userId, role) => {
    return jwt.sign(
        { id: userId, role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );
};


module.exports = {
    generateAuthToken
};