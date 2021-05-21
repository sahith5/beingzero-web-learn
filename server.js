const express = require('express');
 
const app = express();



const mongoose=require('mongoose');
var password=process.env.password;
console.log(password);

const connectionstring="mongodb+srv://sahith:"+password+"@cluster0.jivxp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const dboptions={}

mongoose.connect(connectionstring,dboptions);
//connect to db
//const connectionstring=" "
//const dboptions={};
//once connection is established
mongoose.connection.on('connected',function()
{
    console.log("connected to database");
})
//once conection is done define a schema


app.get("/api/users",function(req,res)
{
res.json(users);
})

//this is home handler 
app.get("/", function(req, res){
    res.sendFile(__dirname+"/frontend/html/index.html");
})



app.use(express.static(__dirname+"/frontend"));

app.get("/color",function(req,res)
{
    res.sendFile(__dirname+"/frontend/html/color.html");
})


//this is google handler
app.get("/google",function(req,res)
{
    res.sendFile(__dirname+"/frontend/html/google.html");
})


//this is resume handler
app.get("/resume",function(req,res)
{   let path=__dirname
    res.sendFile(__dirname+"/frontend/html/resume.html");
});
 

app.get("/login",function(req,res)
{
    res.sendFile(__dirname+"/frontend/html/login.html")
})

app.get("/register",function(req,res)
{
    res.sendFile(__dirname+"/frontend/html/register.html")
})


//this is apple handler
app.get("/apple",function(req,res)
{
    res.sendFile(__dirname+"/frontend/html/apple.html");
})


// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})


app.get("/todo",function(req,res)
{
    res.sendFile(__dirname+"/frontend/html/todo.html");
})

app.get("/thambola",function(req,res)
{
    res.sendFile(__dirname+"/frontend/html/thambola.html");
})