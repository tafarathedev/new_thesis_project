 const route = require('express').Router()
 const User =  require('../models/userModels')


 //post user 
 router.post('/userPost', async (req ,res)=>{
try{
    const user =  new User(req.body)
    await user.save()
    res.status(201).send({user})
    
}catch(e){
 throw new Error(e)
}
 } )


