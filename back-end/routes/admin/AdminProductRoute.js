const express = require("express")
const { createProduct } = require("../../controllers/ProductController")

const router = express.Router()

router.post('/create', createProduct)

module.exports = router