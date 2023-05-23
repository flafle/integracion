import { Router } from "express";

const router = Router();

const carrito = [];

router.get("./", (req, res)=>{
    res.send(carrito)
});

export default router;