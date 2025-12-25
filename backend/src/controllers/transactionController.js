const Transaction = require("../models/Transaction");

// ADD TRANSACTION
exports.addTransaction = async (req, res) => {
  try {
    const { amount, referenceNumber, type, source, staffTag } = req.body;

    const transaction = await Transaction.create({
      amount,
      referenceNumber,
      type,
      source,
      staffTag,
      createdBy: req.user._id,
    });

    res.status(201).json({
      message: "Transaction added successfully",
      transaction,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL TRANSACTIONS (for user dashboard later)
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ createdAt: -1 });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
