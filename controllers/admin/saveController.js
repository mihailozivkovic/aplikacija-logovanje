const mongojs=require("mongojs");
const db=mongojs("fullapp",["users"]);


const saveController=(req,res)=>{
    //preuzeti podatke
    let firstName=req.body.first_name;
    let lastName=req.body.last_name;
    let password=req.body.password;
    let role=req.body.role;

    console.log(firstName,lastName,password,role);

}


module.exports=saveController;