// @des Get all Transactions
// @route GET /api/transactions
// Access Public
exports.getTransactions = (req, res, next) => {
  res.send('GET trans')
}

// @des Add a Transactions
// @route POST /api/transactions
// Access Public
exports.addTransactions = (req, res, next) => {
  res.send('POST trans')
}

// @des Delete a Transactions
// @route DELETE /api/transactions/;id
// Access Public
exports.deleteTransactions = (req, res, next) => {
  res.send('DELETE trans')
}
