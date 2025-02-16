const jwt = require('jsonwebtoken');


/**
 * Middleware to verify JWT tokens for protected routes.
 *
 * - Extracts the token from the Authorization header.
 * - Verifies the token using the secret key from environment variables.
 * - Attaches the decoded user information to the request object.
 * 
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Next middleware function.
 */
const verifyToken = (req, res, next) => {

    // Extract the token from the Authorization header
    let authHeader = req.headers.Authorization || req.headers.authorization;

    if (!authHeader || !authHeader.toLowerCase().startsWith('bearer ')) {
        return res.status(401).json({ message: "Unauthorized: Token missing or invalid." });
    }

    // Extract the token
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: Token is missing." });
    }

    // Verify the token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        // Optional: Log decoded user information in development mode
        if (process.env.NODE_ENV === 'development') {
            console.log("The decoded user is : ", req.user);
        }

        next();
    }
    catch(error) {
        console.error("Token Verification Failed:", error.message);
        return res.status(403).json({ message: "Forbidden: Invalid or expired token." });
    }

};

module.exports = verifyToken;

