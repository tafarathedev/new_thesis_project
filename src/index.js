const express = require('express')
const path =require('path')
require('dotenv').config()
require('./server/server')
const app = express()
const port = process.env.PORT || 3000
const Product = require('./models/ProductModel')
//const ProductRouter = require('./routes/ProductRoute')


//hbs

/* app.use(express.json()) */ //body parser
app.use(express.json())
app.post('/postProducts' , async( req,res)=>{
 const product = new Product(req.body)
   await product.save()
   res.status(201).send({post:product})
})
app.get('/getProducts', async (req,res)=>{
    const product = await Product.find({})
   try{
    
   res.send(product)
   }catch(e){
     res.sendStatus(400)
   }
    
  })
  
  app.get('/getOneProduct/:id', async (req,res)=>{
    const product = await Product.findById(req.params.id)
   try{
    
     res.status(200).send(product)
   }catch(e){
     res.sendStatus(400)
   }
    
  })
  
  
  //delete one
  app.delete('/deleteOneProduct/:id', async (req,res)=>{
    const product = await Product.findOneAndDelete({id:req.params.id})
   try{
    
     res.status(200).send(product)
   }catch(e){
     res.sendStatus(400)
   }
    
  })
  //delete all
  app.delete('/deleteAllProducts', async (req,res)=>{
    const product = await Product.find({})
   try{
     await product.remove()
     res.status(200)
   }catch(e){
     res.sendStatus(400)
   }
    
  })
  


app.listen(port , (connection)=>{
    connection?console.log('error connecting to express server'):console.log('open http://127.0.0.1:'+port)
})

