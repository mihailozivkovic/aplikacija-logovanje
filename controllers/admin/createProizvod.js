const mongojs=require("mongojs");
const db=mongojs("fullapp",["users","gradovi","proizvodi"]);

const createProizvod=(req,res)=>{
    let name=req.body.name;
    let cena=req.body.price;

    db.proizvodi.insert({name:name,cena:cena},(err,docs)=>{
        res.redirect("/admin");
    })
}

module.exports=createProizvod;