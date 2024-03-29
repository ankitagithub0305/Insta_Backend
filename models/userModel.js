const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userModel = new schema({
    email:{
        type:String,
        required : true
 },

    password:{
        type:String,
        required : true
    },
},{
        timestamps:{
            createdAt:"create_at",
            updatedAt:"update_at"
        }
    
});


module.exports = mongoose.model("user",userModel);