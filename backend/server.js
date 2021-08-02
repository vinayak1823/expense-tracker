const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')

dotenv.config()

const transactions = require('./routes/transactions')

const app = express()
const port = process.env.PORT

app.use('/api/transactions', transactions)

app.listen(port, () => console.log(`Port running on ${port}`))
