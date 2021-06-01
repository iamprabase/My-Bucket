import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { generateToken } from "../helpers/generateToken.js";

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const userInstance = await User.findOne({ email })
  if (userInstance) {
    let passwordMatch = await userInstance.matchPassword(password)
    if (passwordMatch) {
      res.send({
        id: userInstance._id,
        name: userInstance.name,
        isAdmin: userInstance.isAdmin,
        token: generateToken(userInstance._id),
      });
    } else {
      res.status(400)
      throw new Error("Password mismatch");
    }
  } else {
    res.status(400);
    throw new Error("User not found.");
  }
});

export const profile = asyncHandler(async (req, res) => {
  res.send(req.authUser);
});
