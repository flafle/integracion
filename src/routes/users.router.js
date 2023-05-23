import { Router } from "express";
import userModel from "../models/user.js";


const router = Router();

const users = [];

router.get("/", async (req,res)=>{
    const users = await userModel.find();
    
    res.send({status:"success", payload:users});

});
router.post("/", async (req,res)=>{ //todo lo que solicite en mi schema
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
});
router.put("/:uid", (req,res)=>{
    
});
router.delete
("/", (req,res)=>{
    
})
export default router;