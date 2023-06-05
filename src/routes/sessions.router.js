import { Router } from "express";
// import userModel from "../models/user";

const router = Router();



router.post("/register", async (req, res)=>{
    console.log(req.body);
    res.send("Ok");
});

export default router;