import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/dbConfig.js'
import productRoutes from './routes/productRoutes.js'
import {notFound, errorHandler} from './middlewares/errorMiddleware.js'

const app = express()
app.use(express.json())
dotenv.config()
const PORT = process.env.PORT || 4000

connectDB()

app.route('/').get((req, res) => {
  res.send('Server Running...')
})
/**
 * Product Routes
 */
app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)
app.listen(
  PORT,
  console.log(`Server Running in ${process.env.APP_ENV} mode at PORT ${PORT} .`)
)
