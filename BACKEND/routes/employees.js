const router = require("express").Router();
let employee = require("../models/employee");

//Add Employee

router.route("/add").post(async (req, res) => {

    const { employeeId, name, nic, birthdate, gender, maritalStatus, noOfChildren, title, joiningDate, telNo } = req.body;

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
    newEmployee.save().then(() => {
        res.json("Employee Added")
    }).catch((err) => {
        console.log(err);
    })
})


//Get Employee Details

router.route("/").get((req, res) => {

    employee.find().then((employee) => {
        res.json(employee)

    }).catch((err) => {
        console.log(err);
    })

})

//Update Employee Details

router.route("/update/:id").put(async (req, res) => {

    let employeeID = req.params.id;

    const { employeeId, name, nic, birthdate, gender, maritalStatus, noOfChildren, title, joiningDate, telNo } = req.body;

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
        .then(() => {
            res.status(200).send({ status: "User Updated" });
        }).catch((err) => {
            res.status(500).send({ status: "Error with updating data", error: err.message });
        })
})


//Delete Employee

router.route("/delete/:id").post(async (req, res) => {

    let employeeID = req.params.id;

    await employee.findByIdAndDelete(employeeID).then(() => {
        res.status(200).send({ status: "User Deleted" })
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with deleting data", error: err.message })
    })
})

//One User Details

router.route("/get/:id").get(async (req, res) => {
    let employeeID = req.params.id;

    const manager = await employee.findById(employeeID)
        .then((employee) => {
            res.status(200).send({ status: "User fetched", employee })
        }).catch((err) => {
            res.status(500).send({ status: "Error with fetched User", error: error.message })
        })
})


//search records

router.route("/search/:search").get(async (req, res) => {

    let val = req.params.search.trim();
    let search = req.params.search;

 console.log("search data", val, search);

    try {

        if (!isNaN(search)) {

            try {

                const response = await employee.find({employeeId: search });
                return res.status(200).send({ status: "Success", data: response });

            } catch (error) {

                return { ok: flase };
  }

        }

        else {
            try {
                console.log(search)
                const response = await employee.find({'employeeId': search });
                console.log(response)
                return res.status(200).send({ status: "Success", data: response });

            } catch (error) {

                return { ok: flase };
  }

            // try {

            //     const response = await employee.find({ employeeId: { $regex: '.*' + val + '.*', $options: 'i' } });
            //     return res.status(200).send({ status: "Success", data: response });

            // } catch (error) {

            //     return { ok: flase };
            // }

        }


    } catch (error) {
        console.log("something went wrong!!");
        return { ok: flase };
    }


})

router.route("/reportA/:dateFrom/:dateTo").get(async (req, res) => {

    let dateFrom = moment(req.params.dateFrom.trim()).format('YYYY-MM-DD');
    let dateTo = moment(req.params.dateTo.trim()).format('YYYY-MM-DD');
    
     console.log(dateFrom)
    
    console.log("report function", dateFrom, dateTo);
    
     try {
        const responses = await Allocation.find({
    
    $and: [
    
    {
    $or: [
    
     { Date: { $gte: dateFrom } },
    
    { Date: { $lte: dateTo } }
    
      ]
    
     }
    
    ]
    
    })
    
    return res.status(200).send({ status: "Success", data: responses });
    
     console.log(responses)
    
    } catch (error) {
    
         console.log("something went wrong!!");
    
         return { ok: flase };
    
     }
    
    })


module.exports = router;

