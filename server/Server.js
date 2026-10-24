const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dns = require("dns");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config();

// Use Google's DNS for MongoDB SRV lookups
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// User model
const User = require("./models/User");

// Home route
app.get("/", (req, res) => {
res.send("CyberShield API is running!");
});

// User registration
app.post("/api/register", async (req, res) => {
try {
const { name, email, password } = req.body;


    if (!name || !email || !password) {
        return res.status(400).json({
            message: "Name, email and password are required."
        });
    }

    if (password.length < 8) {
        return res.status(400).json({
            message: "Password must be at least 8 characters long."
        });
    }

    const normalizedEmail = email.toLowerCase().trim();

    const existingUser = await User.findOne({
        email: normalizedEmail
    });

    if (existingUser) {
        return res.status(409).json({
            message: "An account with this email already exists."
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name: name.trim(),
        email: normalizedEmail,
        password: hashedPassword
    });

    const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    return res.status(201).json({
        message: "Registration successful!",
        token,
        user: {
            id: user._id,
            name: user.name,
            email: user.email
        }
    });
} catch (error) {
    console.error("Registration error:", error.message);

    if (error.code === 11000) {
        return res.status(409).json({
            message: "An account with this email already exists."
        });
    }

    return res.status(500).json({
        message: "Registration failed. Please try again."
    });
}


});

// User login
app.post("/api/login", async (req, res) => {
try {
const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password are required."
        });
    }

    const normalizedEmail = email.toLowerCase().trim();

    const user = await User.findOne({
        email: normalizedEmail
    });

    if (!user) {
        return res.status(401).json({
            message: "Invalid email or password."
        });
    }

    const isMatch = await bcrypt.compare(
        password,
        user.password
    );

    if (!isMatch) {
        return res.status(401).json({
            message: "Invalid email or password."
        });
    }

    const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    return res.status(200).json({
        message: "Login successful!",
        token,
        user: {
            id: user._id,
            name: user.name,
            email: user.email
        }
    });
} catch (error) {
    console.error("Login error:", error.message);

    return res.status(500).json({
        message: "Login failed. Please try again."
    });
}

});

// Start server after connecting to MongoDB
async function startServer() {
try {
if (!process.env.MONGODB_URI) {
throw new Error("MONGODB_URI is missing from .env");
}

    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is missing from .env");
    }

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected successfully!");

    const port = process.env.PORT || 5000;

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
} catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
}

}

startServer();
