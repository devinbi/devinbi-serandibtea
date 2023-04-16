const router = require("express").Router();
let monitor = require("../models/monitor");
const moment = require('moment');


router.route("/add").post((req,res)=>{
    const monitorid=req.body.monitorid;
    const runtime=Number(req.body.runtime);
    const productiontime=Number(req.body.productiontime);
    const availability=Number(req.body.availability);
    const goodcount=Number(req.body.goodcount);
    const totalcount=Number(req.body.totalcount);
    const quality=Number(req.body.quality);
    const idealcycle=Number(req.body.idealcycle);
    const count=Number(req.body.count);
    const rtime=Number(req.body.rtime);
    const performance=Number(req.body.performance);
    const availability1=Number(req.body.availability1);
    const performance1=Number(req.body.performance1);
    const quality1=Number(req.body.quality1);
    const oee=Number(req.body.oee);
    const status=req.body.status;


    const newmonitor = new monitor({

         
        monitorid,
        runtime,
        productiontime,
        availability,
        goodcount,
        totalcount,
        quality,
        idealcycle,
        count,
        rtime,
        performance,
        availability1,
        performance1,
        quality1,
        oee,
        status

    })
    newmonitor.save().then(()=>{
        res.json("details added")
    }).catch((err)=>{
        console.log(err);

    })

})
//fetch


router.route("/").get((req,res)=>{

    monitor.find().then((monitor)=>{
        res.json(monitor)
    }).catch((err)=>{
        console.log(err)
    })
})
//update


//async function (runs simaltaneously)
//fetching userid 
router.route("/update/:id").put(async (req, res) => {
    let userid = req.params.id;
    const{  monitorid,
        runtime,
        productiontime,
        availability, 
        goodcount,
        totalcount,
        quality,
        idealcycle,
        count,
        rtime,
        performance,
        availability1,
        performance1,
        quality1,
        oee,
        status
} = req.body;

    const updatemonitor = {

        monitorid,
        runtime,
        productiontime,
        availability,
        goodcount,
        totalcount,
        quality,
        idealcycle,
        count,
        rtime,
        performance,
        availability1,
        performance1,
        quality1,
        oee,
        status

    }
    //waiting till update is over
    const update = await monitor.findByIdAndUpdate(userid,updatemonitor).then(() => {
        res.status(200).send({status:"user updated"})
    }).catch((err)=>{
    res.status(500).send({status:"error with updating data" ,error: err.message});
  })
   
})
//delete


router.route("/delete/:id").post(async(req,res)=>{
  let userid=req.params.id;
  console.log(userid)
  await monitor.findByIdAndDelete(userid).then(()=>{
      res.status(200).send({status:"user deleted"});
  }).catch((err)=>{
      console.log(err.message);
      res.status(500).send({status:"error with delete user", error:err.message});
  })
  
})

router.route("/get/:id").get(async (req,res) =>{
    let userid = req.params.id;
    await monitor.findById(userid).then(()=>{
        res.status(200).send({status:"user fetched"})
        console.log(err.message);
        res.status(500).send({status:"error with get user",error: err.message});
    })
})





module.exports = router;