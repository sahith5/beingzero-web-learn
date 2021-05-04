const express = require('express');
 
const app = express();
//this is home handler 
app.get("/", function(req, res){
    res.sendFile(__dirname+"/frontend/html/index.html");
})



app.use(express.static(__dirname+"/frontend"));





app.get("/google",function(req,res)
{
    res.sendFile(__dirname+"/frontend/html/google.html");
})
//this is resume handler
app.get("/resume",function(req,res)
{   let path=__dirname
    res.sendFile(__dirname+"/frontend/html/resume.html");
});
 


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
