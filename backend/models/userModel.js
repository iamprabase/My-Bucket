import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

userSchema.methods.matchPassword = async function(enteredPassword) {
  let matchPassword = await bcrypt.compare(enteredPassword, this.password);

  return matchPassword;
}

const User = mongoose.model('User', userSchema)

export default User
