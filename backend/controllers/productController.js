import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

export const index = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
})

export const show = asyncHandler(async(req, res) => {
  const product = await Product.findById(req.params._id);
  if (product){ 
    res.json(product)
  }
  else{
    res.status(400)
    throw new Error("Product doesn't exists")
  }
})