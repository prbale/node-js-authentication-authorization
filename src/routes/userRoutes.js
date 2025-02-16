const express = require('express');
const verifyToken = require('../middlewares/authMiddleware');
const authorizeRoles = require('../middlewares/roleMiddleware');

const router = express.Router();

/**
 * Utility to create protected routes with role-based access control.
 * 
 * @param {string} path - The route path.
 * @param {string[]} allowedRoles - Array of roles allowed to access the route.
 * @param {string} message - Response message.
 */
const createRoute = (path, allowedRoles, message) => {
    router.get(path, verifyToken, authorizeRoles(...allowedRoles), (req, res) => {
        res.json({ message });
    });
};


// Define routes
createRoute('/admin', ['admin'], 'Welcome Admin'); // Only Admin can access this router
createRoute('/manager', ['admin', 'manager'], 'Welcome Manager'); // Both Admin and Manager can access this router
createRoute('/user', ['admin', 'manager', 'user'], 'Welcome User');// All can access this router

module.exports = router;