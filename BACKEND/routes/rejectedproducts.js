const router = require("express").Router();
let RejectedProduct = require("../models/RejectedProduct");



router.route("/add").post((req,res)=>{

    const productId=req.body.productId;
    const productName=req.body.productName;
    const type=req.body.type;
    const quantity=Number(req.body.quantity);
    const weight=Number(req.body.weight);
    const status=req.body.status;
    const date=req.body.date;
    

    const newRejectedProduct = new RejectedProduct({

         productId,
         productName,
         type,
         quantity,
         weight,
         status,
         date
    })
    newRejectedProduct.save().then(()=>{
        res.json("details added")
    }).catch((err)=>{
        console.log(err);

    })

})



//fetch
router.route("/").get((req,res)=>{

    RejectedProduct.find().then((RejectedProduct)=>{
        res.json(RejectedProduct)
    }).catch((err)=>{
        console.log(err)
    })
})




router.route("/delete/:id").delete(async(req,res)=>{
    let userid=req.params.id;
    await RejectedProduct.findByIdAndDelete(userid).then(()=>{
        res.status(200).send({status:"user deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error with delete user", error:err.message});
    })
    
  })

module.exports = router;