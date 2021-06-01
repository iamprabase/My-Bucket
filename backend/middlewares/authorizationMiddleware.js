import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

export const authorizeRequest = asyncHandler(async (req, res, next) => {
  const authHeaders = req.headers.authorization
  const token = authHeaders && authHeaders.split(' ')[1]

  if (!token) {
    res.status(401)

    throw new Error("Unauthorized Request")
  }
  try {
    const decryptData = jwt.verify(token, process.env.JWT_SECRET)
    console.log(decryptData);
    req.authUser = await User.findById(decryptData.id).select(
      ["-password", "-createdAt", "-updatedAt", "-__v"]
    );

    next()
    
  } catch (err) {
      console.log(err);
      res.status(403);

      throw new Error("Token Mismatch.");
  }
})