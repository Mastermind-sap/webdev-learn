import {Router} from "express";
import * as HelloGet from "../controllers/hello/get.js";

const router=Router();

//here "/" means the root inside the listen endpoint in the main server.js
router.get("/",(req,res)=>{
    res.send("Hello world");
})

//http://localhost:5000/hello/sap/world
router.get("/:name/world",(req,res)=>{
    const {name} =req.params;
    res.send(`Hello World ${name}`)
})

//This runs as it is above
router.get("/world",(req,res)=>{
    const {name} =req.params;
    res.send(`Hello`)
})



//http://localhost:5000/hello/sap
router.get("/:name",HelloGet.getGreeting)

//this doesnot run as the above one becomes true (will work if above)
router.get("/world",(req,res)=>{
    const {name} =req.params;
    res.send(`Hello`)
})

export default router;