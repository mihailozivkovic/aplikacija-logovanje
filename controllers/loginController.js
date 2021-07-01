const mongojs=require("mongojs");
const db=mongojs("fullapp",["users"]);


const loginController=(req,res)=>{
    

    //preuzeti podatke u req.body
    let nameIzForme=req.body.name;
    let passIzForme=req.body.password;

    db.users.find({first_name:nameIzForme,password:passIzForme},(err,docs)=>{
        if(err){
            console.log("greska");
            res.redirect("/");
        }
        else
        {
            if(docs.length===1)
            {
                //nadjen korisnik
            let user=docs[0];
                req.session.user=user;
                if(user.role == "admin")
                {
                    res.redirect("/admin");
                }
                else{
                res.redirect("/");
                } }  
            else{
                //podaci nisu tacni
                res.redirect("/");
            }
            }
    })

}

module.exports=loginController;