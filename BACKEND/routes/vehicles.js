const router = require("express").Router();
const { isMoment } = require("moment/moment");
let Vehicle = require("../models/Vehicle");
const moment = require('moment');

//add vehicle
router.route("/addVehicle").post((req, res) => {

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
    const Date = moment(req.body.Date).format('YYYY-MM-DD');
    // const vehPic = req.body.imgPath;

    const newVehicle = new Vehicle({

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
        Date

        // vehPic,

    })
    console.log("new", newVehicle);


    newVehicle.save().then(() => {
        console.log(req);
        res.json("Vehicle added");

    }).catch((err) => {
        console.log(err);
        return res.status(400).send({ status: "Vehicle already exist!" });
    })

})

//update vehicle

router.route("/updateVehicle/:id").put(async (req, res) => {
    let userId = req.params.id;
    const { Vehicle_ID, Vehicle_Type, Vehicle_Brand, Vehicle_Model, Vehicle_Registration_No, Current_Mileage, Insurance_Type,
        Insurance_Name, Air_Condition, Eco_Test_Issued_Date, Eco_Test_Expire_Date, Fuel_Type, Vehicle_Owner, Owner_Name,
        NIC, Address, Contact_No, Date } = req.body;

    const updateVehicle = {
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
        Date
    }
    const update = await Vehicle.findByIdAndUpdate(userId, updateVehicle)
        .then(() => {
            res.status(200).send({ status: "Vehicle Updated" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data", error: err.message });
        })
})

//view vehicle details

router.route("/viewVehicle").get((req, res) => {
    Vehicle.find().then((vehicles) => {
        res.json(vehicles)
    }).catch((err) => {
        console.log(err)
    })
})

//delete vehicle

router.route("/deleteVehicle/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Vehicle.findByIdAndDelete(userId)
        .then(() => {
            res.status(200).send({ status: "vehicle deleted" });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with delete vehicle", error: err.message });
        })
})

//fetch details

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const fetchVehicle = await Vehicle.findById(userId)
        .then((vehicle) => {
            res.status(200).send({ status: "User fetched", vehicle })
        }).catch(() => {
            console.log(err.message);
            res.status(500).send({ status: "Error with get vehicle", error: err.message });
        })
})


//vehile report router

router.route("/reportV/:dateFrom/:dateTo").get(async (req, res) => {

    // console.log("report -----",req);

    let dateFrom = moment(req.params.dateFrom.trim()).format('YYYY-MM-DD');
    let dateTo = moment(req.params.dateTo.trim()).format('YYYY-MM-DD');
    console.log(dateFrom)

    console.log("report function", dateFrom, dateTo);
try{
    const responses = await Vehicle.find({
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



//searh records
router.route("/searchV/:search").get(async (req, res) => {


    let val = req.params.search.trim();
    let search = req.params.search;

    console.log("search data", val, search);

    if (!isNaN(search)) {
        if (search < 11) {

            try {
                const response = await Vehicle.find({ Vehicle_ID: { $regex: '.*' + val + '.*', $options: 'i' } });
                 console.log("search results", response);
                return res.status(200).send({ status: "Success", data: response });
            } catch (error) {

                console.log("something went wrong!!");
                return { ok: flase };

            }


        }
        try {
            const response = await Vehicle.find({ Vehicle_Registration_No: { $regex: '.*' + val + '.*', $options: 'i' } });
            // console.log("search results", response);
            return res.status(200).send({ status: "Success", data: response });
        } catch (error) {

            console.log("something went wrong!!");
            return { ok: flase };

        }

    } else if (isNaN(search)) {
        try {
            const response = await Vehicle.find({ Vehicle_Registration_No: { $regex: '.*' + val + '.*', $options: 'i' } });

            if (response.length > 0) {
                return res.status(200).send({ status: "Success", data: response });
            }

        } catch (error) {

            console.log("somethio,,mlnohubng went wrong!!");
            return { ok: flase };

        }

    }

    try {
        const response = await Vehicle.find({ Vehicle_Type: { $regex: '.*' + val + '.*', $options: 'i' } });
        if (response.length > 0) {
            return res.status(200).send({ status: "Success", data: response });
        }
        else {
            try {
                const response = await Vehicle.find({ Vehicle_Model: { $regex: '.*' + val + '.*', $options: 'i' } });
                if (response.length > 0) {
                    return res.status(200).send({ status: "Success", data: response });
                } else {
                    try {
                        const response = await Vehicle.find({ Vehicle_Brand: { $regex: '.*' + val + '.*', $options: 'i' } });
                     if(response.length > 0)  {
                        return res.status(200).send({ status: "Success", data: response });
                     } 
                    else{
                        try {
                            const response = await Vehicle.find({ Vehicle_ID: { $regex: '.*' + val + '.*', $options: 'i' } });
                            return res.status(200).send({ status: "Success", data: response });
                        } catch (error) {
            
                            console.log("something went wrong!!");
                            return { ok: flase };
            
                        }

                    }
                    } catch (err) {
                        console.log("something went wrong!!");
                        return { ok: flase };


                    }
                }

            } catch (err) {
                console.log("something went wrong!!");
                return { ok: flase };


            }
        }

    } catch (error) {

        console.log("something went wrong!!");
        return { ok: flase };

    }




})

//searh records
router.route("/getExpire").get(async (req, res) => {

    // Current date: September 29, 2022
const date = new Date();

date.setDate(date.getDate() + 30);

// New date: August 30, 2022
console.log(date);

})





module.exports = router;
