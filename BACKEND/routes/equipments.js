const router = require("express").Router();
let equipment = require("../models/equipment");
const moment = require('moment');


router.route("/add").post((req,res)=>{
    const equipmentid=req.body.equipmentid;
    const equipmentname=req.body.equipmentname;
    const equipmenttype=req.body.equipmenttype;
    const date = moment(req.body.Date).format('YYYY-MM-DD');
    const department=req.body.department; 
    const intertek=Number(req.body.intertek);
    const status=req.body.status; 

    const newequipment = new equipment({

         equipmentid,
         equipmentname,
         equipmenttype,
         date,
         department,
         intertek,
         status

    })
    newequipment.save().then(()=>{
        res.json("details added")
    }).catch((err)=>{
        console.log(err);

    })

})
//fetch


router.route("/").get((req,res)=>{

    equipment.find().then((equipment)=>{
        res.json(equipment)
    }).catch((err)=>{
        console.log(err)
    })
})
//update


//async function (runs simaltaneously)
//fetching userid 
router.route("/update/:id").put(async (req, res) => {
    let userid = req.params.id;
    const{ equipmentid,equipmentname,equipmenttype,date,department,intertek,status} = req.body;

    const updateequipment = {
        equipmentid,
        equipmentname,
        equipmenttype,
        date,
        department,
        intertek,
        status

    }
    //waiting till update is over
    const update = await equipment.findByIdAndUpdate(userid,updateequipment).then(() => {
        res.status(200).send({status:"user updated"})
    }).catch((err)=>{
    res.status(500).send({status:"error with updating data" ,error: err.message});
  })
   
})
//delete


router.route("/delete/:id").post(async(req,res)=>{
  let userid=req.params.id;
  console.log(userid)
  await equipment.findByIdAndDelete(userid).then(()=>{
      res.status(200).send({status:"user deleted"});
  }).catch((err)=>{
      console.log(err.message);
      res.status(500).send({status:"error with delete user", error:err.message});
  })
  
})

router.route("/get/:id").get(async (req,res) =>{
    let userid = req.params.id;
    await equipment.findById(userid).then(()=>{
        res.status(200).send({status:"user fetched"})
        console.log(err.message);
        res.status(500).send({status:"error with get user",error: err.message});
    })
})

router.route("/reporte/:dateFrom/:dateTo").get(async (req, res) => {

    console.log("report -----",req);

    const dateFrom = moment(req.params.dateFrom.trim()).format('YYYY-MM-DD');
    const dateTo = moment(req.params.dateTo.trim()).format('YYYY-MM-DD');
    

    console.log("report function", dateFrom, dateTo);



    equipment.find({
        $and: [{

            Date: { $gte: dateFrom, $lte: dateTo },
           


        }]

    }).then((equipment) => {
        res.json(equipment);
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;