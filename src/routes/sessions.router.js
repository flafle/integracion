import { Router } from "express";
import user from "../models/user.js";

const router = Router();



router.post("/register", async (req, res)=>{
    const result= await user.create(req.body); //si esta todo bien
    
    res.send( {status: "success", payload:result});
});


router.post("/login", async (req, res)=>{
    //existe?:
    const {email, password} = req.body;
    const user = await user.findOne({email, password});
    if (!user) return res.status(400).send ({status: "error", error: "User o pass incorreto"})
    console.log(req.body);
    //si existe:
    req.session.user = { //estoy creacndo in objeto user en la session
        name: `${user.firstName} ${user.lastName}`,
        email: user.email
         
    }
    res.sendStatus(200);
});

export default router;