const router = require("express").Router();
let Product = require("../models/Product");



router.route("/add").post((req,res)=>{

    const productId=req.body.productId;
    const productName=req.body.productName;
    const type=req.body.type;
    const quantity=Number(req.body.quantity);
    const weight=Number(req.body.weight);
    const status=req.body.status;
    const date=req.body.date;
    

    const newProduct = new Product({

         productId,
         productName,
         type,
         quantity,
         weight,
         status,
         date
    })
    newProduct.save().then(()=>{
        res.json("details added")
    }).catch((err)=>{
        console.log(err);

    })

})

//fetch




router.route("/").get((req,res)=>{

    Product.find().then((Product)=>{
        res.json(Product)
    }).catch((err)=>{
        console.log(err)
    })
})

 //update


 //async function (runs simaltaneously)
 //fetching userid 


router.route("/update/:id").put(async (req, res) => {
    let userid = req.params.id;
    const{ productId,
        productName,
        type,
        quantity,
        weight,
        status,
        date} = req.body;

    const updateProduct = {
         
        productId,
         productName,
         type,
         quantity,
         weight,
         status,
         date
        
       
    }
    //waiting till update is over

    const update = await Product.findByIdAndUpdate(userid,updateProduct).then(() => {
        res.status(200).send({status:"user updated"})
    }).catch((err)=>{
    res.status(500).send({status:"error with updating data" ,error: err.message});
  })
   
 })
//delete



router.route("/delete/:id").delete(async(req,res)=>{
  let userid=req.params.id;
  await Product.findByIdAndDelete(userid).then(()=>{
      res.status(200).send({status:"user deleted"});
  }).catch((err)=>{
      console.log(err.message);
      res.status(500).send({status:"error with delete user", error:err.message});
  })
  
})

router.route("/get/:id").get(async (req,res) =>{
    let userid = req.params.id;
    await Product.findById(userid).then(()=>{
        res.status(200).send({status:"user fetched"})
        console.log(err.message);
        res.status(500).send({status:"error with get user",error: err.message});
    })
})


module.exports = router;
