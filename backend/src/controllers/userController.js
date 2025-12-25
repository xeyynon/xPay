const User = require("../models/User");

// CREATE MASTER USER (Super Master only)
exports.createMaster = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const master = await User.create({
      name,
      email,
      password,
      role: "MASTER",
    });

    res.status(201).json({
      message: "Master created successfully",
      user: {
        id: master._id,
        name: master.name,
        email: master.email,
        role: master.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
