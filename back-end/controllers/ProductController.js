const Product = require("../models/Product")


exports.getAllProduct = async(req, res) =>{
    const allProduct = await Product.find()
    res.json({
        allProduct
    }) 
}

exports.createProduct = async (req,res) => {
    const {name, cate, brand, quantity, price, detail } = req.body

    try {
        await Product.create({
            name,
            cate,
            brand,
            quantity,
            price,
            productDetail: detail
        })
        res.status(200).json({
            success: true,
            message: "Create Product Success"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "Create Product Failed"
        })
    }
}