import express from "express";
import userRouter from "./routes/users.router.js";
import productsRouter from "./routes/products.router.js";
import contactRouter from "./routes/contact.router.js";
import __dirname from "./utils.js";
import { Server } from "socket.io";
import adminRouter from "./routes/admin.router.js";
import cartRouter from "./routes/cart.router.js";
import handlebars from "express-handlebars";
import viewsRouter from "./routes/views.router.js";
import mongoose from "mongoose";

const app = express();

const connection = mongoose.connect("mongodb+srv://flex:123Motos@solomotoscluster.ojbrcir.mongodb.net/?retryWrites=true&w=majority");

app.use(express.json());//puedo leer peticiones.
app.use(express.urlencoded({extended:true}));//puedo leer de lo que viene de la url
// app.use(express.static(`${__dirname}/public`));

// comienza la petición.
// const validacionUser = (req,res,next)=>{
//     const body = req.body;
//     if(body.user === "Nose")
//     return res.status(403).send({status:"error", error: "no estas autorizad@"});
//     res.send({status:"Success", message:"Bienvenid@"});
//     next();
// }

// app.use(validacionUser);

//Mis rutas .
app.use("/api/users", userRouter);
app.use("/api/products", productsRouter);
app.use("/api/contact", contactRouter);
app.use("/api/admin", adminRouter);
app.use("api/cart", cartRouter);
app.use("/", viewsRouter);
app.use(express.static(`${__dirname}/public`));


//motores de plantilla
app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars"); //uso handlebars.

export default function socketProducts(socketServer){
    socketServer.on('connection', async socket => {
    
    const data = await encuadernacion.getProducts()
  
    socket.emit('products', { data } )

    socket.on('product', async data => {

        try {        
            const valueReturned = await encuadernacion.addProduct(data)
          
            socket.emit('message', valueReturned)
        }
        catch (err) {
            console.log(err);
        }

    });

    socket.on('delete', async data => {

        const result = await encuadernacion.deleteProduct(data)
        
        socket.emit('delete', result)
    });

    
});
};

app.listen(8080,()=> console.log("Listening on PORT"));


