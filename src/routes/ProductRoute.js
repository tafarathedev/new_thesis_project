const router  = require('express').Router()
const Product = require('../models/ProductModel')
//routes
router.post('/postProducts', async (req,res)=>{
   const product = new Product(req.body)
    await product.save()
    res.status(200).send({body:product})
 
})
router.get('/getProducts', async (req,res)=>{
  const product = await Product.find({})
 try{
  
 res.send(product)
 }catch(e){
   res.sendStatus(400)
 }
  
})

router.get('/getOneProduct/:id', async (req,res)=>{
  const product = await Product.findById(req.params.id)
 try{
  
   res.status(200).send(product)
 }catch(e){
   res.sendStatus(400)
 }
  
})


//delete one
router.delete('/deleteOneProduct/:id', async (req,res)=>{
  const product = await Product.findOneAndDelete({id:req.params.id})
 try{
  
   res.status(200).send(product)
 }catch(e){
   res.sendStatus(400)
 }
  
})
//delete all
router.delete('/deleteAllProducts', async (req,res)=>{
  const product = await Product.find({})
 try{
   await product.remove()
   res.status(200)
 }catch(e){
   res.sendStatus(400)
 }
  
})






/*  module.exports = router*/