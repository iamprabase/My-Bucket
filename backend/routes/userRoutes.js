import express from "express";
import { login, profile } from "../controllers/userController.js";
import {authorizeRequest} from "../middlewares/authorizationMiddleware.js"

const router = express.Router();

router.route("/login").post(login);
router.route("/:id").get(authorizeRequest, profile);

export default router;
