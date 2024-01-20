require("dotenv").config();
const express = require('express');
var bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require("./routes/user");
const index = require("./routes/index");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

app.use("/user",userRoutes);
app.use("/",index)




mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser: true,useUnifiedTopology:true})
.then(()=>{
    console.log("DB is connected")
    app.listen(3000,()=>{
        console.log("server  is connected")
    });
})
.catch(err =>{
    console.log("server is not connected")
})
// app.listen(4000)




