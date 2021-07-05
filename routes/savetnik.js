const express=require("express");
const router=express.Router();

router.use(checkOperater);

router.get("/",require("../controllers/savetnik/savetnikController"));
router.get("/termin/:id",require("../controllers/savetnik/showTerminController"));

router.post("/izvestaj/:id",require("../controllers/savetnik/izvestajController"));

function checkOperater(req,res,next){
    let user=req.session.user;
    if(user){
        if(user.role=="operater"){
            next();
        }else{
            res.redirect("/");
        }
    }else{
        res.redirect("/");
    }
}

module.exports=router;