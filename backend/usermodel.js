// user model talks to api server using crud operations using 
//appplication level function
//schema to be created

const mongoose=require('mongoose');

var userschema=new mongoose.Schema({
    username:String,
    dateofbirth:Date,
    age:Number,
    isdeleted:Boolean
})


var userModel=mongoose.model('user table',userschema);

//this userModel object should be exported to other 

module.exports=userModel;