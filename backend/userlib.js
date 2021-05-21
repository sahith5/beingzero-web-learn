//gives us function to talk to usermodel object
//gives apis to  api server

const mongoose = require("mongoose");
const userModel = require("./usermodel")


//get api uses uses this
module.exports.getallusers=function(req,res)
{
    userModel.find({} ,function(err,userobjects)
    {
        res.json(userobjects);

    })

}

// Obj.save()
// module.find()
// model.findBy id(IDBCursor,callback)

