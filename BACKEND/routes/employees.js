const router = require("express").Router();
let employee = require("../models/employee");

//Add Employee

router.route("/add").post(async(req,res)=>{

    const{employeeId,name,nic,birthdate,gender,maritalStatus,noOfChildren,title,joiningDate,telNo} = req.body;

    const newEmployee = await new employee({
        employeeId,
        name,
        nic,
        birthdate,
        gender,
        maritalStatus,
        noOfChildren,
        title,
        joiningDate,
        telNo
    })
    newEmployee.save().then(()=>{
        res.json("Employee Added")
    }).catch((err)=>{
        console.log(err);
    })
})


//Get Employee Details

router.route("/").get((req,res)=>{

    employee.find().then((employee)=> {
        res.json(employee)

    }).catch((err)=>{
        console.log(err);
    })

})

//Update Employee Details

router.route("/update/:id").put(async (req,res)=>{

    let employeeID = req.params.id;
    
    const{employeeId,name,nic,birthdate,gender,maritalStatus,noOfChildren,title,joiningDate,telNo} = req.body;

    //Create object

    const updateEmployee = {
        employeeId,
        name,
        nic,
        birthdate,
        gender,
        maritalStatus,
        noOfChildren,
        title,
        joiningDate,
        telNo
    }

    const update = await employee.findByIdAndUpdate(employeeID, updateEmployee)
    .then(()=>{
        res.status(200).send({status: "User Updated"});
    }).catch((err)=>{
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})


//Delete Employee

router.route("/delete/:id").post(async (req, res)=>{

    let employeeID = req.params.id;
  
     await employee.findByIdAndDelete(employeeID).then(()=>{
        res.status(200).send({status: "User Deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleting data", error: err.message})
    })
  })

  //One User Details
  
router.route("/get/:id").get(async (req, res)=> {
    let employeeID = req.params.id;
    
    const manager = await employee.findById(employeeID)
    .then((employee)=>{
        res.status(200).send({status: "User fetched", employee})
    }).catch((err)=>{
        res.status(500).send({status: "Error with fetched User", error: error.message})
    })
})



module.exports = router; 

