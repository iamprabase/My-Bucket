import express from 'express'
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const router = express.Router()

router.use((req, res, next) => {
  console.log(`${req.url} visited at `, '@', Date.now())
  next()
})

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

router.get('/:_id', asyncHandler(async(req, res) => {
  const product = await Product.findById(req.params._id);
  if (product){ 
    res.json(product)
  }
  else{
    res.status(400)
    throw new Error("Product doesn't exists")
  }
}))

export default router
