const Transaction = require('../models/Transaction')

// @des Get all Transactions
// @route GET /api/transactions
// Access Public
exports.getTransactions = async (req, res, next) => {
  res.send('GET trans')
}

// @des Add a Transactions
// @route POST /api/transactions
// Access Public
exports.addTransactions = async (req, res, next) => {
  res.send('POST trans')
}

// @des Delete a Transactions
// @route DELETE /api/transactions/;id
// Access Public
exports.deleteTransactions = async (req, res, next) => {
  res.send('DELETE trans')
}
