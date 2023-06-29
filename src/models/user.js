import mongoose from "mongoose";

const collection = "Users"

const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email:{
        type:String,
        unique:true
        },
        role: {
            type:String,
            default:"user"
        },
    password:String


},{timestamps:{createdAt:"created_at", updateAt:"update_at"}})

const userModel = mongoose.model(collection, schema);

export default userModel;