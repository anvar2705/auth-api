const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const authRouter = require('./routers/authRouter')
require('dotenv').config()
const PORT = process.env.PORT || 4000

const app = express()

app.use(express.json())
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use('/auth', authRouter)

const start = async () => {
  try {
    await mongoose.connect(process.env.URI)
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
}

start()
