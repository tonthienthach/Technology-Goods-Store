require("dotenv").config()

const express = require("express")


const cors = require('cors');


const app = express()

app.use(cors());

app.use(express.json())

app.listen(process.env.PORT,()=>{
    console.log(`app is running on port ${process.env.PORT}`)
})

app.get('/',(req,res)=>{
    res.send('hello')
})