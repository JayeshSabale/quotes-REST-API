import mongoose from 'mongoose'

const quoteSchema = new mongoose.Schema({
  author: String,
  quote: String,
})

const quoteModel = mongoose.model('Quote', quoteSchema)

export { quoteModel as Quotes }
