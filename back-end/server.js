require("dotenv").config()

const express = require("express")
//connectDB
const {DBconnect} = require("./configs/ConnectDB")
DBconnect();

//router
const brandRouter = require("./routes/BrandRoute")

const cateRouter = require("./routes/CateRoute")

const productRouter = require("./routes/ProductRoute")

const adminProductRouter = require("./routes/admin/AdminProductRoute")



const cors = require('cors');


const app = express()

app.use(cors());

app.use(express.json())

app.listen(process.env.PORT,()=>{
    console.log(`app is running on port ${process.env.PORT}`)
})

app.use('/api/brand',brandRouter)

app.use('/api/category',cateRouter)

app.use('/api/product',productRouter)

app.use('/api/admin/product',adminProductRouter)

app.get('/',(req,res)=>{
    res.send('hello')
})



