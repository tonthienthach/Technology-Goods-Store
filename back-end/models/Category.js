const mongoose = require("mongoose")

const categorySchema = mongoose.Schema({
    name: {
        type: String, 
        trim : true,
        unique : true
    }
},{timestamps: true})

module.exports = mongoose.model("Category",categorySchema)