export const privacy = (privacyType) => {
    return (req, res, next)=>{
        const {user} =req.session;
        switch(privacyType){
            case "PRIVATE": //para quienes tienn permiso
                if(user) next();
                else res.redirect("/login");
                break;

              case "NO_AUTHENTICATED":
                if(!user) next();
                else res.redirect("/profile");



        }
    };
};