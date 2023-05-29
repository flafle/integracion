 import mongoose from "mongoose";       

 const collection = "roles";

 const schema = new mongoose.Schema({
    title: String,
    description: String,
    NameAdmin: String
 });

 //genero los modelos:
 const rolesModel = mongoose.model(collection, schema);
 
 export default rolesModel;