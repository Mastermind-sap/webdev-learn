import express from "express";
import HelloRouter from "./src/routers/hello.js"
import UserRouter from "./src/routers/user.js"
import {logger} from "./src/middlewares/logger.js"

const app=express();

app.use(express.json())

// //_req says vscode we will not use this now
// app.get("/",(_req,res)=>{
//     // res.send("Hello world");
//     res.send('<h1 style="color:red;">Hello world</h1>');
//     console.log("request received");
// })

app.use(logger);
app.use(express.static("public"));

app.use("/hello",HelloRouter);
app.use("/user",UserRouter);

//server starts listening
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
}).on("error",()=>{
    console.log("An error has occured");
});

