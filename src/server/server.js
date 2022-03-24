const mongoose = require('mongoose') 
require('dotenv').config()
/* database connection */
mongoose.connect('mongodb+srv://'+process.env.DB_USERNAME+':'+process.env.DB_PASSWORD +'@thesis.tujpf.mongodb.net/'+process.env.DB_NAME, {
useNewUrlParser:true
} ,()=>{
  console.log('connection established succefully')
})

module.exports = mongoose