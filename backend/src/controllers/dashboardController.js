const Transaction = require("../models/Transaction");

// GET TODAY DASHBOARD STATS
exports.getTodayStats = async (req, res) => {
  try {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const transactions = await Transaction.find({
      createdAt: {
        $gte: startOfDay,
        $lte: endOfDay,
      },
    });

    let inwardAmount = 0;
    let outwardAmount = 0;
    let inwardCount = 0;
    let outwardCount = 0;

    transactions.forEach((txn) => {
      if (txn.type === "INWARD") {
        inwardAmount += txn.amount;
        inwardCount++;
      } else if (txn.type === "OUTWARD") {
        outwardAmount += txn.amount;
        outwardCount++;
      }
    });

    res.json({
      date: startOfDay.toDateString(),
      inward: {
        count: inwardCount,
        amount: inwardAmount,
      },
      outward: {
        count: outwardCount,
        amount: outwardAmount,
      },
      totalTransactions: transactions.length,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
