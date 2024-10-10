const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/register',async(req,res)=>{
    const {username,email,password,phone,location} = req.body;
    try{
        const newUser = new User({username,email,password,phone,location});
        await newUser.save();
        res.status(201).json({message: 'User registered successfully'});
    } catch(error){
        res.status(500).json({error: error.message});
        console.log("The username is already registered");
    }
});
 module.exports = router;
