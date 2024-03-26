import express from 'express'
import {
  getASpecificQuote,
  updateQuotePut,
  updateQuotePatch,
  deleteSpecificQuote,
} from '../controllers/TargetSingleQuote.js'

// Export the router
const router = express.Router()

router
  .route('/api/quotes/:authorName')
  .get(getASpecificQuote)
  .put(updateQuotePut)
  .patch(updateQuotePatch)
  .delete(deleteSpecificQuote)

export default router
