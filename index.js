const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
require('dotenv').config()
const PORT = process.env.PORT || 4000

const app = express()

app.use(express.json())
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
