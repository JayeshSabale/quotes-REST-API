import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import './database.js'
import routes from './routes/index.js'

const app = express()
app.use(express.json())
app.use(routes)

app.get('/', (req,res) => {
  res.send('visit https://quotes-rest-api.onrender.com/api/quotes  to get all quotes')
})

app.listen(process.env.PORT, () => {
  console.log(
    `Server running on port number http://localhost:${process.env.PORT}`
  )
})
