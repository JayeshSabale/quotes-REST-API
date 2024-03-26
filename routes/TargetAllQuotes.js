import express from 'express'
import {
  getAllQuotes,
  createNewQuote,
  deleteAllQuotes,
} from '../controllers/TargetAllQuotes.js'

const router = express.Router()

router
  .route('/api/quotes')
  .get(getAllQuotes)
  .post(createNewQuote)
  .delete(deleteAllQuotes)

export default router
