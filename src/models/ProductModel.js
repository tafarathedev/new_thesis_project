const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
    name:{
         type:String,
         required:true,
         
    },
    unit:{
        type:String,
        required:true,
        unique:true,
      
    },
    price_per_unit:{
        type:String,
        required:true,
        
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})


const product = mongoose.model('product' , ProductSchema)


module.exports= product