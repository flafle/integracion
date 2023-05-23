import multer from "multer";
import __dirname from "../utils.js";

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