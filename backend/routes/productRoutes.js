import express from 'express'
import products from '../data/products.js'

const app = express()
const router = express.Router()

router.use((req, res, next) => {
  console.log(`${req.url} visited at `, '@', Date.now())
  next()
})

router.route('').get((req, res) => {
  res.send(products)
})

router.route('/:_id').get((req, res) => {
  const product = products.find((product) => product._id === req.params._id)
  res.send(product)
})

export default router
