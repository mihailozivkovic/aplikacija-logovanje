const mongojs=require("mongojs");
const db=mongojs("fullapp",["users","gradovi","proizvodi"]);

const operaterController=(req,res)=>{
    let user=req.session.user;
    res.render("operater/index");
}


module.exports=operaterController;