const express= require("express")

const app=express();

function start(){
    console.log("Running");
}
function response(req,res){
    res.send("hello");
}

function aboutme(req,res){
    res.send("this is about me")
}

app.get("/sap",response);
app.get("/about",aboutme)
//app.use("/",response);
app.listen(5000,start());
