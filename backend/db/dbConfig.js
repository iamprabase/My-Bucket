import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })

    console.log(`DB connected at ${conn.connection.host}`)
  } catch (error) {
    console.error(`DB connection failed: ${error.message}`)
  }
}

export default connectDB
