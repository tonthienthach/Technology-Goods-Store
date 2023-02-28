const express = require("express")
const { getAllProduct } = require("../controllers/ProductController")

const router = express.Router()

router.get('/', getAllProduct)

module.exports = router