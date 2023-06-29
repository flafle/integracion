import {Router} from "express";

export default class BaseRouter {

    constructor(){
        this.router = Router();
        this.init();
    };
    init(){}

    getRouter = () => this.router;

    get(path,...callbacks){
        this.router.get(path,this.generateCustomResponses,this.applyCallbacks(callbacks));
    };

post(path,...callbacks){
        this.router.post(path,this.generateCustomResponses,this.applyCallbacks(callbacks));
};
put(path,...callbacks){
            this.router.put(path,this.generateCustomResponses, this.applyCallbacks(callbacks));
        };

delete(path,...callbacks){
                this.router.delete(path,this.generateCustomResponses,this.applyCallbacks(callbacks));
            };

//convencion de posibles respuestas.
generateCustomResponses = (req, res, next) =>{
    res.sendSuccess = message => res.send({status: "succes", message});
    res.sendSuccessWithPayload = payload=> res.send({status: "succes", payload});
   
    res.sendInternalError = error => res.status(500).send({status:"error", error})

    next();

};



//un callback es un midleware... con parametros req,res,next.etc--- posiciones(0,1,2)
    applyCallbacks(callbacks){
        return callbacks.map(callbacks=> async(...params)=>{
            try{
                await callbacks.apply(this.params);

            }catch (error){
                params[1].sendInternalError(error); // status(500).send(error);

            };
        });
    }
}