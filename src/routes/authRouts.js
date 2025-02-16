const express = require('express');
const { body, validationResult } = require('express-validator');
const { register, login } = require('../controllers/authController');

const router = express.Router();


/**
 * @route   POST /api/auth/register
 * @desc    Register a new user
 * @access  Public
 */
router.post(
    '/register',
    [
        body('username')
            .trim()
            .notEmpty().withMessage('Username is required')
            .isLength({ min: 4, max: 30 }).withMessage('Username must be 4-30 characters long'),
        body('password')
            .notEmpty().withMessage('Password is required')
            .isLength({ min: 5 }).withMessage('Password must be at least 5 characters'),
        body('role')
            .notEmpty().withMessage('Role is required')
            .isIn(['admin', 'manager', 'user']).withMessage('Role must be one of: admin, manager, user')
    ],
    (req, res, next) => {
        // Handle validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    register
);

/**
 * @route   POST /api/auth/login
 * @desc    Authenticate user and return a token
 * @access  Public
 */
router.post(
    '/login',
    [
        body('username')
            .trim()
            .notEmpty().withMessage('Username is required'),
        body('password')
            .notEmpty().withMessage('Password is required')
    ],
    (req, res, next) => {
        // Handle validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    login
);

module.exports = router;
