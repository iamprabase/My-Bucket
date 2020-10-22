import mongoose from 'mongoose'
import dotenv from 'dotenv'
import products from '../../data/products.js'
import users from '../../data/users.js'
import User from '../../models/userModel.js'
import Product from '../../models/productModel.js'
import Order from '../../models/orderModel.js'
import connectDB from '../dbConfig.js'

dotenv.config()
connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createUser = await User.insertMany(users)

    const adminUser = createUser[0]._id

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(sampleProducts)
    console.log('Data Imported')
    process.exit()
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Dropped')
    process.exit()
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
