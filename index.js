const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 4000

const app = express()

app.use(express.json())
app.use('/auth', authRouter)

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://anvar978:1PH4qAnwBNQmpxe5@cluster0.bzyht.mongodb.net/auth-api-DB?retryWrites=true&w=majority`
    )
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
