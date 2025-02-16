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

1. **Register User**
    - **Endpoint**: `POST /api/auth/register`
    - **Description**: Register a new user.
    - **Request Body**:
    ```json
    {
      "username": "prashant",
      "password": "securepassword",
      "role": "admin"
    }
    ```
    - **Response** (Success):
    ```json
    {
    "message": "User registered with username prashant"
    }
    ```
    - **Possible Errors**:
      - `500 Server Error`: Internal Serveer Error
---

2. **User Login**
    - **Endpoint**: `POST /api/auth/login`
    - **Description**: Authenticate an existing user.
    - **Request Body**:
    ```json
      {
       "username": "prashant",
       "password": "securepassword"
      }
    ```
    - **Response** (Success):
    ```json
       {
       "token":       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YjFkZjg5MWE5NjE4NTUwYWNjNjM5YyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzM5NzE5Njk0LCJleHAiOjE3Mzk3MjMyOTR9.m4c7t5ReocuAk9Q9MKZFTXnsGt5KgR9Lpm7Y_6InNjM"
   }
    ```
    - **Possible Errors**:
      - `400 Unauthorized`: Invalid credentials
      - `404 Not Found`: User not found
      - `500 Server Error`: Internal Server Error

---

### 🔑 Authorization APIs (Protected Routes)

1. **Access Admin Panel**
    - **Endpoint**: `GET /api/users/admin`
    - **Description**: Access restricted to users with `admin` role.
    - **Headers**:
    ```
    Authorization: Bearer <JWT_TOKEN>
    ```
    - **Response** (Success):
    ```json
    {
      "message": "Welcome Admin!"
    }
    ```
    - **Possible Errors**:
      - `400 Unauthorized`: Invalid token
      - `401 Unauthorized`: No token
      - `403 Forbidden`: Access denied for non-admin users

---
   
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
│   └── authMiddleware.js       # Middleware for authenticating users and securing protected routes.
|   └── roleMiddleware.js       # Middleware for authorizing user roles and managing access control.
├── models
│   └── UserModel.js            # User schema and model
├── routes
│   └── authRoutes.js           # Routes for authentication
│   └── userRoutes.js           # Routes for authorization
├── .env                        # Environment variables (excluded from Git)
├── index.js                    # Main server file
└── README.md                   # Project documentation
```

## 🚧 Best Practices Followed
- Password Hashing: Using bcrypt to hash and securely store passwords.
- Environment Variables: Secrets and sensitive data are stored in .env files.
- JWT Authentication: Stateless authentication using signed tokens.
- Role-Based Access Control (RBAC): Assign roles and restrict access accordingly.
- Input Validation: Basic validation to prevent common security threats.


## 🚧 Best Practices Followed

1. 🔐 **Password Hashing**  
   - Using `bcrypt` to hash and securely store passwords to protect sensitive user credentials.

2. 🛠️ **Environment Variables**  
   - All secrets and sensitive data (e.g., database credentials, JWT secrets) are stored in a `.env` file to avoid exposing them in the source code.

3. 🔑 **JWT Authentication**  
   - Implemented stateless authentication using **JSON Web Tokens (JWT)** to provide secure and efficient session management.

4. 🛂 **Role-Based Access Control (RBAC)**  
   - Users are assigned roles, and access to specific routes and resources is granted or restricted based on their roles.

---

**🔑 Security is not a feature, it's a foundation!** 🛡️


## 🌐 Connect with Me
- 🐙 **GitHub**: [@prbale](https://github.com/prbale)  
- ✍️ **Blog**: [Prashant's Blog](https://prashbale.hashnode.dev/)  
- 💼 **LinkedIn**: [Prashant Bale](https://www.linkedin.com/in/prashantbale/)  

---

**📢 Let's build something amazing together!** 🚀
