const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./src/config/db");
const authRoutes = require("./src/routes/authRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB
connectDB();

// Routes
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("xPay API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const transactionRoutes = require("./src/routes/transactionRoutes");

app.use("/api/transactions", transactionRoutes);

app.get("/api/test", (req, res) => {
  res.json({ message: "xPay backend working" });
});

const userRoutes = require("./src/routes/userRoutes");
app.use("/api/users", userRoutes);

const dashboardRoutes = require("./src/routes/dashboardRoutes");
app.use("/api/dashboard", dashboardRoutes);