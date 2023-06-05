import express from "express";
import userRouter from "./routes/users.router.js";
import productsRouter from "./routes/products.router.js";
import contactRouter from "./routes/contact.router.js";
import homeRouter from "./routes/home.router.js"; 
import __dirname from "./utils.js";
import { Server } from "socket.io";

import adminRouter from "./routes/admin.router.js";
import cartRouter from "./routes/cart.router.js";
import handlebars from "express-handlebars";

import rolesModel from "./models/roles.js";
import adminsModel from "./models/admin.js";
import userModel from "./models/user.js";

import viewsRouter from "./routes/views.router.js";
import mongoose from "mongoose";
import cartModel from "./models/cartModel.js";

import session from "express-session";
import MongoStore from "connect-mongo";
import sessionRouter from "./routes/sessions.router.js";



const app = express();
const PORT = process.env.PORT||8080;
const server = app.listen(PORT,()=> console.log(`Listening on ${PORT} `));

const io = new Server(server); // Create socket.io server instance.
  
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
app.use("/api/home", homeRouter);
app.use("/", viewsRouter);



//motores de plantilla
app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars"); //uso handlebars.

//session-trabaja con 4 conceptos importantes.
const connection = mongoose.connect("mongodb+srv://flex:123Motos@solomotoscluster.ojbrcir.mongodb.net/modulo2?retryWrites=true&w=majority");

app.use(session({

    store: new MongoStore ({
        mongoUrl:"mongodb+srv://flex:123Motos@solomotoscluster.ojbrcir.mongodb.net/modulo2?retryWrites=true&w=majority", //url de la base de datos.
        ttl:30,
    }),

    secret: "Palabra3ecreta",
    resave: false,
    saveUninitialized:false,

}));
app.use("/", viewsRouter);
app.use("/api/sessions", sessionRouter)

app.get("/", (req, res)=>{
    req.session.user1= {numero1:true};
    res.send("Pass!");
});


//conexiones
// const context = async()=>{
// const connection = mongoose.connect("mongodb+srv://flex:123Motos@solomotoscluster.ojbrcir.mongodb.net/BaseSoloMotos?retryWrites=true&w=majority");
// // creo un admin:
const admin = {
    firstName: "Juan",
    lastName: "Rodriguez",
    email: "juan@correo.com",
 
}
await adminsModel.create(admin);

const roles = {
    title: "Admin1",
    description: "añade, actualiza, elimina",
    nameAdmin: "Flavia"
}
await rolesModel.create(roles);
// }


// agregamos un producto al admin:

const adminId = "6473d69a99906c3f531a179b";
const rolesAdminId = "6473ccd2642a14f2a42204f9";

// await adminsModel.updateOne(
//     {_id:adminId},
//     {$push:{roles:{roles:new mongoose.Types.ObjectId(rolesAdminId)}}}
// );

// context();





export default function socketProducts(socketServer){
    socketServer.on('connection', async socket => {
    
    const data = await solo.getProducts()
  
    socket.emit('products', { data } )

    socket.on('product', async data => {

        try {        
            const valueReturned = await solo.addProduct(data)
          
            socket.emit('message', valueReturned)
        }
        catch (error) {
            console.log(error);
        }

    });

    socket.on('delete', async data => {

        const result = await solo.deleteProduct(data)
        
        socket.emit('delete', result)
    });

    
});
};



