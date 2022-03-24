const Order = require('../models/OrdersSchemas')
const router = require('express').Router()

router.post('/postOrder' , async (req, res)=>{
const order = new Order(req.body)
await order.save()
res.status(201).send({body:order})
} )