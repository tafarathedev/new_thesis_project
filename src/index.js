const express = require('express')
const path =require('path')
require('dotenv').config()
require('./server/server')
const app = express()
const port = process.env.PORT || 3000
const UserRouter = require('./routes/userRoute')

const ProductRouter = require('./routes/ProductRoute')


//hbs

/* app.use(express.json()) */ //body parser
app.use(express.json())
app.use(ProductRouter)
app.use(UserRoute)
  
  
  
  
  
  


app.listen(port , (connection)=>{
    connection?console.log('error connecting to express server'):console.log('open http://127.0.0.1:'+port)
})

