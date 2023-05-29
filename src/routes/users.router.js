import { Router } from "express";
import userModel from "../models/user.js";


const router = Router();

const users = [];

router.get("/", async (req,res)=>{
    const users = await userModel.find();
    
    res.send({status:"success", payload:users});

});
router.post("/", async (req,res)=>{ //todo lo que solicite en mi schema
    try {
        const {firstName, lastName, email, password} = req.body
    if(!firstName || !lastName ||!email||!password) 
    return  res.status(400).send({status: "error", message:"complete los valores"});
    const user = {
        firstName,
        lastName,
        email,
        password
    }
    const result = await userModel.create(user);
    res.send({status:"sucess", payload:result});
        
    } catch (error) {
        console.log(error);
        res.status(500).send({status:"error", error:"internal error"});

        
    }
});
router.put("/:uid", async (req,res)=>{
    try{
        const userId= req.params.uid;
        const userToUpdate= req.body;
        const result = await userModel.updateOne({_id:userId}, {$set:userToUpdate})
        res.send({status:"success", message:"User removed"});

    } catch(error){
        console.log(error);
        res.send({status:"error", error:"Error interno"})
    }

    
});
router.delete("/:uid",async (req,res)=>{
    const userId= req.params.uid;
    const result = await userModel.deleteOne({_id:userId});
    console.
    res.send({status:"success", message:"User removed"});
});


export default router;