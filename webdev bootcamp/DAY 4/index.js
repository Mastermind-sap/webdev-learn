//backend
const express= require("express");
const app=express();

app.use(express.json())
app.use(express.urlencoded())

// function signal(){
//     console.log("up and running....")
// }

//localhost:5000
app.get("/",(req,res)=>{
    res.send("<h2>Hello world</h2>");
});

//localhost:5000/about
app.get("/about",(req,res)=>{
    res.send("This is about");
})

app.post("/",(req,res)=>{
    console.log(req.body);
    res.send("<h2>username received</h2>")
})

let obj={
    name: "sap",
    password: "1234",
}
app.get("/obj",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    res.json(obj)
})

// app.listen(5000,signal);

app.listen(5000,()=>{
    console.log("Up and running...");
})