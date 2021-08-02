const Transaction = require('../models/Transaction')

// @des Get all Transactions
// @route GET /api/transactions
// Access Public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find()

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    })
  }
}

// @des Add a Transactions
// @route POST /api/transactions
// Access Public
exports.addTransactions = async (req, res, next) => {
  try {
    const transaction = await Transaction.create(req.body)

    return res.status(201).json({
      success: true,
      data: transaction,
    })
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message)

      return res.status(400).json({
        success: false,
        error: messages,
      })
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error',
      })
    }
  }
}

// @des Delete a Transactions
// @route DELETE /api/transactions/;id
// Access Public
exports.deleteTransactions = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id)

    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: 'No transaction found',
      })
    }

    await transaction.remove()

    return res.status(200).json({
      success: true,
      data: {},
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    })
  }
}
