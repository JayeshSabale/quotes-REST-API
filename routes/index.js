import express from 'express'
import targetAllQuotesRouter from './TargetAllQuotes.js'
import targetSingleQuoteRouter from './TargetSingleQuote.js'

const router = express.Router()

router.use(targetAllQuotesRouter)
router.use(targetSingleQuoteRouter)

export default router
