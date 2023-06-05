import { Router } from "express";

const router = Router();
const home = [];


router.get("/", (req,res)=>{
    res.send(home);

});
router.post("/", (req,res)=>{
    const inicio = req.body;
    contact.push(inicio);
    res.send({status: "success", message:"mensaje agregado"});
    
});
router.put("/:uid", (req,res)=>{
    
});
router.delete
("/", (req,res)=>{
    
});

export default router;