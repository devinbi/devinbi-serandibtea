const router = require("express").Router();
const { isMoment } = require("moment/moment");
let Allocation = require("../models/Allocation");
const moment = require('moment');

//add vehicle_allocation
router.route("/addAllocation").post((req, res) => {

    console.log("  file ", req.body)

    const Tea_Quantity = req.body.Tea_Quantity;
    const Destination = req.body.Destination;
    const Distance = req.body.Distance;
    const Suggested_vehicle = req.body.Suggested_vehicle;
    const Vehicle_reg_no = req.body.Vehicle_reg_no;
    const Driver_name = req.body.Driver_name;
    const Fuel_type = req.body.Fuel_type;
    const Date = moment(req.body.Date).format('YYYY-MM-DD');


    const vehiAllocation = new Allocation({

        Tea_Quantity,
        Destination,
        Distance,
        Suggested_vehicle,
        Vehicle_reg_no,
        Driver_name,
        Fuel_type,
        Date

    })
    console.log("new", vehiAllocation);


    vehiAllocation.save().then(() => {
        console.log(req);
        res.json(" vehicle allocated");

    }).catch((err) => {
        console.log(err);
        return res.status(400).send({ status: "Vehicle already exist!" });
    })

})

//update allocation

router.route("/updateAllocation/:id").put(async (req, res) => {
    let userId = req.params.id;
    const { Tea_Quantity,
        Destination,
        Distance,
        Suggested_vehicle,
        Vehicle_reg_no,
        Driver_name,
        Fuel_type,
        Date } = req.body;

    const updateAllocation = {
        Tea_Quantity,
        Destination,
        Distance,
        Suggested_vehicle,
        Vehicle_reg_no,
        Driver_name,
        Fuel_type,
        Date
    }
    const update = await Allocation.findByIdAndUpdate(userId, updateAllocation)
        .then(() => {
            res.status(200).send({ status: "Vehicle allocation Updated" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data", error: err.message });
        })
})

//view allocation details

router.route("/viewAllocation").get((req, res) => {
    Allocation.find().then((allocations) => {
        res.json(allocations)
    }).catch((err) => {
        console.log(err)
    })
})

//delete allocation

router.route("/deleteAllocation/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Allocation.findByIdAndDelete(userId)
        .then(() => {
            res.status(200).send({ status: " Alllocated vehicle deleted" });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with delete vehicle", error: err.message });
        })
})

//fetch details

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const fetchAllocation = await Allocation.findById(userId)
        .then((allocations) => {
            res.status(200).send({ status: "allocation fetched", allocations })
        }).catch(() => {
            console.log(err.message);
            res.status(500).send({ status: "Error with get vehicle", error: err.message });
        })
})


//vehile report router

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

//searh records
router.route("/searchA/:search").get(async (req, res) => {


    let val = req.params.search.trim();
    let search = req.params.search;

    console.log("search data", val, search);
    try {
        if (!isNaN(search)) {
            try {
                const response = await Allocation.find({ "Tea_Quantity": { $gte: search } });
                return res.status(200).send({ status: "Success", data: response });
            } catch (error) {
                return { ok: flase };

            }
        }
        else {
            try {
                const response = await Allocation.find({ Vehicle_reg_no: { $regex: '.*' + val + '.*', $options: 'i' } });
                return res.status(200).send({ status: "Success", data: response });
            } catch (error) {
                return { ok: flase };

            }
        }

    } catch (error) {

        console.log("something went wrong!!");
        return { ok: flase };

    }



})


//allocate vehicle

// router.route("/suggestedVehicle/:search").get(async (req, res) => {

//     let val = req.params.search.trim();
//     let search = req.params.search;

//     if(search >= 500){

//         try {
//             const response = await Allocation.find({ "Tea_Quantity": { $gte: search } });
//             if(response){

//             }
//             return res.status(200).send({ status: "Success", data: response });
//         } catch (error) {
//             return { ok: flase };

//         }


//     }

//     if(search < 500){

//         try {
//             const response = await Allocation.find({ "Tea_Quantity": { $lt: search } });
//             return res.status(200).send({ status: "Success", data: response });
//         } catch (error) {
//             return { ok: flase };

//         }

//     }
    


// })


module.exports = router;
