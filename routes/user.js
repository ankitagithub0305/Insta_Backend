const express = require('express');
const routes = express.Router();
const userdb = require('../models/userModel');


routes.post("/register",async (req, res)=>{
    console.log(req.body)
    let email = req.body.email;
    let password= req.body.password;

    let userObject = new userdb({
        email:email,
        password:password
    })
    
    let result = await userObject.save();
    console.log(result);
    res.send("its done")
})

routes.get("/login",(req, res)=>{
    res.send("user is login")
})


module.exports = routes;






