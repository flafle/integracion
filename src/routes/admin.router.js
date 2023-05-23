import { Router } from "express";

const router = Router();
const admins = [];

router.get("/", (req,res)=>{
    res.send(admins);


});
router.post("/", (req,res)=>{
    const admin = req.body;
   admins.push(admin);
    res.send({status: "success", message:"mensaje agregado"});
    
    
});
router.put
("/", (req,res)=>{
    
});
router.delete("/", (req,res)=>{
    
});

export default router;