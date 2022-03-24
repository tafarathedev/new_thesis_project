const mongoose = require('mongoose')
const OrderSchema= new mongoose.Schema({
  date:{
      type:String ,
      default:new Date()
  },
  order_number :{
      type:mongoose.Schema.Types.ObjectId,
      default:0.00

  }
 ,
 customer_name :{
     type:String, 
     required:true
 },
 total_Cost:{
 type:Number,

 }
})


const order = mongoose.model('order' , OrderSchema)



module.exports= order