import express from 'express'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'

const app = express()
app.use(express.json())
dotenv.config()
const PORT = process.env.PORT || 4000

app.route('/').get((req, res) => {
  res.send('Server Running...')
})
/**
 * Product Routes
 */
app.use('/api/products', productRoutes)

app.listen(
  PORT,
  console.log(`Server Running in ${process.env.APP_ENV} mode at PORT ${PORT} .`)
)
