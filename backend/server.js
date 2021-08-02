const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config()

connectDB()

const transactions = require('./routes/transactions')

const app = express()

app.use(express.json())

const port = process.env.PORT

app.use('/api/transactions', transactions)

app.listen(port, () => console.log(`Port running on ${port}`))
