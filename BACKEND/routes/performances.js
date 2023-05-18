const router = require("express").Router();
let performance = require("../models/performance");

//Add Employee Performance

router.route("/add").post(async(req,res)=>{

    const{employeeId,name,position,attendanceCount,otCount} = req.body;

    const newPerformance = await new performance({
        employeeId,
        name,
        position,
        attendanceCount,
        otCount
    })
    newPerformance.save().then(()=>{
        res.json("Employee Performance Added")
    }).catch((err)=>{
        console.log(err);
    })
})


//Get Employee Details

router.route("/").get((req,res)=>{

    performance.find().then((performance)=> {
        res.json(performance)

    }).catch((err)=>{
        console.log(err);
    })

})

//Update Employee Details

router.route("/update/:id").put(async (req,res)=>{

    let performanceID = req.params.id;
    
    const{employeeId,name,position,attendanceCount,otCount} = req.body;

    //Create object

    const updatePerformance = {
        employeeId,
        name,
        position,
        attendanceCount,
        otCount
       
    }

    const update = await performance.findByIdAndUpdate(performanceID, updatePerformance)
    .then(()=>{
        res.status(200).send({status: "data Updated"});
    }).catch((err)=>{
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})


//Delete Employee

router.route("/delete/:id").post(async (req, res)=>{

    let performanceID = req.params.id;
  
     await performance.findByIdAndDelete(performanceID).then(()=>{
        res.status(200).send({status: "User Deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleting data", error: err.message})
    })
  })

  //One User Details
  
router.route("/get/:id").get(async (req, res)=> {
    let performanceID = req.params.id;
    
    const data = await performance.findById(performanceID)
    .then((performance)=>{
        res.status(200).send({status: "Data fetched", performance})
    }).catch((err)=>{
        res.status(500).send({status: "Error with fetched Data", error: error.message})
    })
})

//filter user deatils -- (get filtered by performance)

router.route("/filter").get((req, res) => {
    // let performanceID = req.params.id;
     performance.find({
       attendanceCount: { $gt: 250 },
       otCount: { $gt: 750 }
     })
     .then((performance) => {
       res.json(performance)
     })
     .catch((err) => {
       console.log(err);
       res.status(500).send({ status: "Error with fetching data", error: err.message })
     })
   })


   router.route("/search/:empID").get(async (req, res) => {

    let employeeID = req.params.empID;
    
     try {
        const responses = await performance.find({ 'employeeId': employeeID})
        console.log(responses)
    return res.status(200).send({ status: "Success", data: responses });
    
    
    
    } catch (error) {
    
         console.log("something went wrong!!");
    
         return { ok: flase };
    
     }
    
    })

module.exports = router; 

