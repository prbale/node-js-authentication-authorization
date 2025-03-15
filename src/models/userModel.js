const mongoose = require('mongoose');

// Define constants for user roles to avoid hardcoding
const USER_ROLES = {
    ADMIN: 'admin',
    MANAGER: 'manager',
    USER: 'user'
};

/**
 * User schema for storing user information.
 * 
 * Fields:
 * - username: Unique identifier for the user.
 * - password: Hashed password.
 * - role: User's role with restricted values.
 * 
 * Additional options:
 * - Timestamps for tracking creation and modification times.
 */
const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        minlength: [4, "Username must be at least 4 characters"],
        maxlength: [30, "Username must be at most 30 characters"]
    },
    password: {
        type: String,
        required: true,
        minlength: [5, "Password must be at least 5 characters"]
    },
    role: {
        type: String,
        required: true,
        enum: {
            values: Object.values(USER_ROLES),
            message: "Role must be one of: admin, manager, or user"
        },
    },

}, {
    timestamps: true,
});

// Hide password in JSON output
userSchema.set('toJSON', {
    transform: (doc, ret) => {

        // It's a common practice to exclude sensitive information such as passwords when sending data over a network.
        // The password field should never be exposed to the client or other users, even in the API response.
        delete ret.password;
        return ret;
    }
});

module.exports = mongoose.model("User", userSchema);