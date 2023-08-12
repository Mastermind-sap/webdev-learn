const getGreeting=(req,res)=>{
    const {name} =req.params;
    res.send(`Hello ${name}`);
}

const getName = ()=>{
    console.log("Hello");
}

export {getGreeting, getName};