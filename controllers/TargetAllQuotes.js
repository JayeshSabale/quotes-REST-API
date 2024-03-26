import { Quotes } from '../models/quoteModel.js'

const getAllQuotes = async (req, res) => {
  try {
    const foundQuotes = await Quotes.find({})
    res.status(200).json(foundQuotes)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).send('Internal Server Error')
  }
}

const createNewQuote = async (req, res) => {
  const { author, quote } = req.body

  const newQuote = await Quotes.create({
    author,
    quote,
  })

  res.status(201).json({
    message: `Successfully created a quote of ${author}`,
    newQuote: newQuote,
  })
}

const deleteAllQuotes = async (req, res) => {
  try {
    await Quotes.deleteMany({})
    res.status(200).json({ message: 'Successfully deleted all quotes' })
  } catch (error) {
    console.log(error)
    res.status(500).send('Internal Server Error')
  }
}

export { getAllQuotes, createNewQuote, deleteAllQuotes }
