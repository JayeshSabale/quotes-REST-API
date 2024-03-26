import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const URL = process.env.MONGO_URL

const Connection = async () => {
  try {
    await mongoose.connect(URL)
    console.log('Connected to database')
    return 200 // Status code for successful connection
  } catch (err) {
    console.error('Error connecting to database:', err.message)
    return 500 // Status code for internal server error
  }
}

Connection()
