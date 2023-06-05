import { response } from "express";
import router from "../routes/users.router";

const form = document.getElementById("registerForm");

from.addEventListener("submit", async event =>{
    event.preventDefault(); 
    const data = new FormData(form);
    console.log(data);
    const obj = {};
    data.forEach((value, key) => (obj[key]= value));
    
     fetch("api/sessions/register", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type" : "aplication/json"
        }
     });
     response.status(200)
     const responseData = response.json();
     if (responseData.status === "sucess"){
        window.location.replace("./login")
     }
});

export default router;