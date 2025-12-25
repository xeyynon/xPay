const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const roleCheck = require("../middleware/roleMiddleware");
const { createMaster } = require("../controllers/userController");

// Only Super Master can create Master
router.post(
  "/create-master",
  protect,
  roleCheck("SUPER_MASTER"),
  createMaster
);

module.exports = router;
