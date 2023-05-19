const router = require("express").Router();
const { isMoment } = require("moment/moment");
let DeletedVehicles = require("../models/DeletedVehicles");
const moment = require('moment');

//add vehicle
router.route("/addDeletedVehicle").post((req, res) => {

    console.log("  file ", req.body)

    const Vehicle_ID = req.body.Vehicle_ID;
    const Vehicle_Type = req.body.Vehicle_Type;
    const Vehicle_Brand = req.body.Vehicle_Brand;
    const Vehicle_Model = req.body.Vehicle_Model;
    const Vehicle_Registration_No = req.body.Vehicle_Registration_No;
    const Current_Mileage = req.body.Current_Mileage;
    const Insurance_Type = req.body.Insurance_Type;
    const Insurance_Name = req.body.Insurance_Name;
    const Air_Condition = req.body.Air_Condition;
    const Eco_Test_Issued_Date = moment(req.body.Eco_Test_Issued_Date).format('YYYY-MM-DD');
    const Eco_Test_Expire_Date = moment(req.body.Eco_Test_Expire_Date).format('YYYY-MM-DD');
    const Fuel_Type = req.body.Fuel_Type;
    const Vehicle_Owner = req.body.Vehicle_Owner;
    const Owner_Name = req.body.Owner_Name;
    const NIC = req.body.NIC;
    const Address = req.body.Address;
    const Contact_No = req.body.Contact_No;
    const reminder_send_count = req.body. reminder_send_count;
    const Date = moment(req.body.Date).format('YYYY-MM-DD');
    

    const newDeletedVehicle = new DeletedVehicles({

        Vehicle_ID,
        Vehicle_Type,
        Vehicle_Brand,
        Vehicle_Model,
        Vehicle_Registration_No,
        Current_Mileage,
        Insurance_Type,
        Insurance_Name,
        Air_Condition,
        Eco_Test_Issued_Date,
        Eco_Test_Expire_Date,
        Fuel_Type,
        Vehicle_Owner,
        Owner_Name,
        NIC,
        Address,
        Contact_No,
        reminder_send_count,
        Date

    })
    console.log("new", newDeletedVehicle);


    newDeletedVehicle.save().then(() => {
        console.log(req);
        res.json("Vehicle added");

    }).catch((err) => {
        console.log(err);
        return res.status(400).send({ status: "Vehicle already exist!" });
    })

})

//view vehicle details

router.route("/viewDeletedVehicle").get((req, res) => {
    DeletedVehicles.find().then((DeletedVehicles) => {
        res.json(DeletedVehicles)
    }).catch((err) => {
        console.log(err)
    })
})

module.exports = router;