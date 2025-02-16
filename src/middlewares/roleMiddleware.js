/**
 * Middleware to authorize user roles for protected routes.
 * 
 * This middleware checks if the user's role is included in the allowed roles.
 * 
 * @param  {...string} allowedRoles - Roles allowed to access the route.
 * @returns {Function} Middleware function for role-based access control.
 */
const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        // Ensure user object is present
        if (!req.user || !req.user.role) {
            return res.status(401).json({ message: "Unauthorized: User information missing." });
        }

        // Check if the user has one of the allowed roles
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                message: "Forbidden: You do not have permission to access this resource.",
                requiredRoles: allowedRoles,
                userRole: req.user.role
            });
        }

        next();
    };
};

module.exports = authorizeRoles;