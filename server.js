import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import './database.js'
import routes from './routes/index.js'

const app = express()
app.use(express.json())
app.use(routes)

// Define __dirname manually
const __dirname = path.resolve()

// Define route handler for the home route
app.get('/', (req, res) => {
  // Send the HTML file as the response
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(process.env.PORT, () => {
  console.log(
    `Server running on port number http://localhost:${process.env.PORT}`
  )
})
