import mongoose from "mongoose";

const collection = "Admins";

const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email:String,
    roles: {
         type: [
            {
                rol:{
                    type:mongoose.SchemaTypes.ObjectId,
                    ref: "roles"
                }

            }
         ],
         default:[]
    },

});
const adminsModel = mongoose.model(collection, schema);

export default adminsModel;