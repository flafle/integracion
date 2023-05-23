import { Router } from "express";

const router = Router();
const contact = [];


router.get("/", (req,res)=>{
    res.send(contact);

});
router.post("/", (req,res)=>{
    const contacto = req.body;
    contact.push(contacto);
    res.send({status: "success", message:"mensaje agregado"});
    
});
router.put("/:uid", (req,res)=>{
    
});
router.delete
("/", (req,res)=>{
    
});

export default router;