# 🔐 Node.js Authentication and Authorization

Welcome to the **Node.js Authentication and Authorization** project! This repository demonstrates how to implement secure and scalable authentication and authorization mechanisms in a Node.js application using industry-standard practices.

## 🚀 Features

- 🛂 **User Authentication** (Login, Register)
- 🔑 **Authorization** (Role-based Access Control)
- 🛡️ **Password Hashing** (bcrypt)
- 🔒 **JWT Authentication** (JSON Web Tokens)
- 🔍 **Access Control for Routes**

## 🏗️ Tech Stack

- 🟢 **Node.js** - JavaScript runtime
- ⚛️ **Express.js** - Web framework
- 🛢️ **MongoDB** - NoSQL Database
- 🛠️ **bcrypt** - Secure password hashing
- 🔑 **jsonwebtoken** - Token-based authentication
- 🌐 **dotenv** - Environment variable management

---

## 🛠️ Installation

1. **Clone the repository**:
   ```bash
    git clone https://github.com/prbale/node-js-authentication-authorization.git
    cd node-js-authentication-authorization

2. Install Dependencies
   ```bash
   npm install

3. Create `.env` file:
   ```bash
   # .env file
    PORT=7000
    MONGO_URI=mongodb://localhost:27017/authDB
    JWT_SECRET=your_secret_key

4. Run the Application
   ```bash
   npm start

The server will run on http://localhost:7000.


## 📖 API Endpoints

### 🔐 Authentication APIs

1. **User Signup**
    - **Endpoint**: `POST /api/auth/signup`
    - **Description**: Register a new user.
    - **Request Body**:
    ```json
    {
      "username": "john_doe",
      "email": "john@example.com",
      "password": "securepassword"
    }
    ```
    - **Response** (Success):
    ```json
    {
      "message": "User registered successfully",
      "userId": "60c72b2f5f1b2c001c8e4e5a"
    }
    ```
    - **Possible Errors**:
      - `400 Bad Request`: Invalid input data
      - `409 Conflict`: Email already exists

---

2. **User Login**
    - **Endpoint**: `POST /api/auth/login`
    - **Description**: Authenticate an existing user.
    - **Request Body**:
    ```json
    {
      "email": "john@example.com",
      "password": "securepassword"
    }
    ```
    - **Response** (Success):
    ```json
    {
      "message": "Login successful",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI...",
      "user": {
        "id": "60c72b2f5f1b2c001c8e4e5a",
        "username": "john_doe",
        "email": "john@example.com",
        "role": "user"
      }
    }
    ```
    - **Possible Errors**:
      - `401 Unauthorized`: Invalid credentials
      - `404 Not Found`: User not found

---

3. **Refresh Token**
    - **Endpoint**: `POST /api/auth/refresh-token`
    - **Description**: Refresh the access token.
    - **Request Body**:
    ```json
    {
      "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ..."
    }
    ```
    - **Response** (Success):
    ```json
    {
      "accessToken": "new-access-token",
      "expiresIn": 3600
    }
    ```
    - **Possible Errors**:
      - `403 Forbidden`: Invalid or expired token

---

### 🔑 Authorization APIs (Protected Routes)

1. **Access Admin Panel**
    - **Endpoint**: `GET /api/admin`
    - **Description**: Access restricted to users with `admin` role.
    - **Headers**:
    ```
    Authorization: Bearer <JWT_TOKEN>
    ```
    - **Response** (Success):
    ```json
    {
      "message": "Welcome, Admin!",
      "adminData": { ... }
    }
    ```
    - **Possible Errors**:
      - `401 Unauthorized`: Missing or invalid token
      - `403 Forbidden`: Access denied for non-admin users

---

2. **Access User Dashboard**
    - **Endpoint**: `GET /api/user`
    - **Description**: Accessible to all authenticated users.
    - **Headers**:
    ```
    Authorization: Bearer <JWT_TOKEN>
    ```
    - **Response** (Success):
    ```json
    {
      "message": "Welcome to your dashboard",
      "userData": { ... }
    }
    ```
    - **Possible Errors**:
      - `401 Unauthorized`: Missing or invalid token

---

### 🔄 Utility APIs

1. **Health Check**
    - **Endpoint**: `GET /api/health`
    - **Description**: Check if the server is running.
    - **Response**:
    ```json
    {
      "status": "ok",
      "timestamp": "2024-02-16T12:30:45Z"
    }
    ```

---

### ⚠️ Error Handling

- All API responses will follow a standard error structure:
    ```json
    {
      "error": "Error description",
      "code": 400
    }
    ```

- Common HTTP Status Codes:
    - `200 OK`: Success
    - `201 Created`: Resource successfully created
    - `400 Bad Request`: Invalid input or missing fields
    - `401 Unauthorized`: Missing/invalid token
    - `403 Forbidden`: Insufficient permissions
    - `404 Not Found`: Resource not found
    - `500 Internal Server Error`: Unexpected server issue

## ⚙️ Folder Structure

```plaintext
.
├── controllers
│   └── authController.js       # Handles authentication logic
├── middlewares
│   └── authMiddleware.js       # Middleware for protecting routes
├── models
│   └── User.js                 # User schema and model
├── routes
│   └── authRoutes.js           # Routes for authentication and authorization
├── utils
│   └── tokenUtils.js           # Helper functions for token management
├── .env                        # Environment variables (excluded from Git)
├── server.js                   # Main server file
└── README.md                   # Project documentation


## 🚧 Best Practices Followed
- Password Hashing: Using bcrypt to hash and securely store passwords.
- Environment Variables: Secrets and sensitive data are stored in .env files.
- JWT Authentication: Stateless authentication using signed tokens.
- Role-Based Access Control (RBAC): Assign roles and restrict access accordingly.
- Input Validation: Basic validation to prevent common security threats.


## 🌐 Connect with Me

- 🐙 **GitHub**: [@prbale](https://github.com/prbale)  
- ✍️ **Blog**: [Prashant's Blog](https://prashbale.hashnode.dev/)  
- 💼 **LinkedIn**: [Prashant Bale](https://www.linkedin.com/in/prashantbale/)  

---

**📢 Let's build something amazing together!** 🚀
