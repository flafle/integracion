import multer from "multer";
import __dirname from "../utils.js";
import bcrypt, { hash } from "bcrypt";

//dos metodos principales del bc
export const createHash = async (password) => {
    const salts = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salts);
}
export const validatePassword = (password, hashedpassword) => bcrypt.compareSync(password, hashedpassword);

//donde dejo mis archivos:

const storage = multer.diskStorage({
     //carpeta donde guardará el fichero final.
     destination: function(req, file, cb){
        cb(null,`${__dirname}/public/img`)
     },
     filename: function(req,file,cb){
        cb(null,`${Date.now()}_${file.originalname}`);

     }
});

const uploader = multer({storage}); //la entidad que carga.
export default uploader;