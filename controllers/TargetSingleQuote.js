import { Quotes } from '../models/quoteModel.js'

const getASpecificQuote = async (req, res) => {
  const { authorName } = req.params
  const foundQuote = await Quotes.findOne({ author: authorName })
  if (!foundQuote) {
    return res.status(404).send(`No quote matching ${authorName} were found`)
  }
  return res.status(200).json(foundQuote)
}

const updateQuotePut = async (req, res) => {
  const { authorName } = req.params
  const { author, quote } = req.body

  const foundQuote = await Quotes.findOneAndReplace(
    { author: authorName },
    { author: author, quote: quote }
    // { overwrite: true }
  )

  if (!foundQuote) {
    return res.status(404).send(`No quote matching ${authorName} were found`)
  }

  return res.status(200).json(foundQuote)
}

const updateQuotePatch = async (req, res) => {
  const { authorName } = req.params
  const { author, quote } = req.body

  const foundQuote = await Quotes.findOneAndUpdate(
    { author: authorName },
    { author: author, quote: quote },
    { overwrite: true }
  )

  if (!foundQuote) {
    return res.status(404).send(`No quote matching ${authorName} were found`)
  }

  return res.status(200).json(foundQuote)
}

const deleteSpecificQuote = async (req, res) => {
  const { authorName } = req.params

  const foundQuote = await Quotes.findOneAndDelete({
    author: authorName,
  })

  if (!foundQuote) {
    return res.status(404).send(`No quote matching ${authorName} were found`)
  }

  return res
    .status(200)
    .json({ message: `Successfully deleted quote of ${authorName}` })
}

export {
  getASpecificQuote,
  updateQuotePut,
  updateQuotePatch,
  deleteSpecificQuote,
}
