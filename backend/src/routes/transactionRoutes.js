const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const roleCheck = require("../middleware/roleMiddleware");

const {
  addTransaction,
  getTransactions,
} = require("../controllers/transactionController");

// Master & Super Master
router.post(
  "/",
  protect,
  roleCheck("MASTER", "SUPER_MASTER"),
  addTransaction
);

// All authenticated users
router.get("/", protect, getTransactions);

module.exports = router;
