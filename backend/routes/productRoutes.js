import express from 'express'
import { index, show } from '../controllers/productController.js'

const router = express.Router()

router.route("/").get(index)
router.route("/:_id").get(show)

export default router
