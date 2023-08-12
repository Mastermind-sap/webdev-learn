import prisma from "../../../db/index.js";

const createUser=async(req,res)=>{
    const {email,name}=req.body;
    await prisma.user.create({
        data:{
            email,
            name,
        },
    })
    res.send("User created");
};

export default createUser;