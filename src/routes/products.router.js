import { Router } from "express";
import uploader from "../services/uploader.js";

const router = Router();
const products = [];


router.get("/", (req,res)=>{
    res.send(products);

});
router.post("/",uploader.single("image"), (req,res)=>{
    const product = req.body;
    products.push(product);
    res.send({status: "success", message:"Product agregado"});
    
});
router.put("/:uid", (req,res)=>{
    
});
router.delete
("/", (req,res)=>{
    
});

export default router;