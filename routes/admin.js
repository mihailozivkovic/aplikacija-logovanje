const express=require("express");
const router=express.Router();

router.get("/",require("../controllers/admin/adminController"));

router.get("/create",(req,res)=>{
    res.render("admin/adminCreateForm");
})

router.post("/create/save",require("../controllers/admin/saveController"));
router.get("/create/grad",(req,res)=>{
    res.render("admin/createGrad")
})


module.exports=router;