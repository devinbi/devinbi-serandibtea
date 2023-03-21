const router = require("express").Router();
let allocating = require("../models/allocating");



router.route("/add").post((req,res)=>{

    const equipmentid=req.body.equipmentid;
    const department=req.body.department;
    const wattage=Number(req.body.wattage);
    const hours=Number(req.body.hours);
   // const totalamount=Number(req.body.totalamount);

    const newallocating = new allocating({

         
         equipmentid,
         department,
         wattage,
         hours
        // totalamount

    })
    newallocating.save().then(()=>{
        res.json("details added")
    }).catch((err)=>{
        console.log(err);

    })

// })
//fetch




// router.route("/").get((req,res)=>{

//     allocating.find().then((allocatings)=>{
//         res.json(allocatings)
//     }).catch((err)=>{
//         console.log(err)
//     })
// })
//update


//async function (runs simaltaneously)
//fetching userid 


// router.route("/update/:id").put(async (req, res) => {
//     let userid = req.params.id;
//     const{ equipmentid,department,wattage,hours} = req.body;

//     const updateallocating= {
         
//         equipmentid,
//         department,
//         wattage,
//         hours
        
//        // totalamount
//     }
    //waiting till update is over

//     const update = await allocating.findByIdAndUpdate(userid,updateallocating).then(() => {
//         res.status(200).send({status:"user updated"})
//     }).catch((err)=>{
//     res.status(500).send({status:"error with updating data" ,error: err.message});
//   })
   
// })
// //delete



// router.route("/delete/:id").delete(async(req,res)=>{
//   let userid=req.params.id;
//   await allocating.findByIdAndDelete(userid).then(()=>{
//       res.status(200).send({status:"user deleted"});
//   }).catch((err)=>{
//       console.log(err.message);
//       res.status(500).send({status:"error with delete user", error:err.message});
//   })
  
// })

// router.route("/get/:id").get(async (req,res) =>{
//     let userid = req.params.id;
//     await allocating.findById(userid).then(()=>{
//         res.status(200).send({status:"user fetched"})
//         console.log(err.message);
//         res.status(500).send({status:"error with get user",error: err.message});
//     })
})



module.exports = router;
