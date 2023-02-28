const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    cate:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    brand:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand'
    },
    quantity:{
        type: Number,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    productDetail:{
        type: String,
        trim: true,
    }



}, {timestamps: true})

module.exports = mongoose.model('Product',productSchema)