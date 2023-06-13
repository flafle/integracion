import { Router } from "express";

const router = Router();

router.get("/", (req, res)=>{
    const user = {
        name: "Solo Motos",
        email: "correo@com.com"
    }
    res.render("home",{
    name: user.name,
    css:"home"
});

});
//productos:
router.get("/products", (req, res)=>{
    const producto = [
        { name:"Casco", price:20000 },
        { name:"Casco", price:15000 },
        { name:"Casco", price:36000 },
    ]
    res.render("products", {
        producto,
        css:"products"
    })
});
//usuari@s: es mi login
router.get("/users", (req, res)=>{
    res.render("users");
});
//registro: es mi sing up
router.get("/register", (req, res)=>{
    res.render("register");
});

export default router;