const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const { getTodayStats } = require("../controllers/dashboardController");

// Any logged-in user can view dashboard
router.get("/today", protect, getTodayStats);

module.exports = router;
