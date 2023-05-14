const router = require("express").Router();
const { isMoment } = require("moment/moment");
let Maintenance = require("../models/Maintenance");
const moment = require('moment');
//const Maintenance = require("../models/Maintenance");


//add vehicle_maintenance
router.route("/addMain").post((req, res) => {

    console.log(" file ", req.body)

    const Vehicle_ID = req.body.Vehicle_ID;
    const Vehicle_Reg_NO = req.body.Vehicle_Reg_NO;
    const Issue = req.body.Issue;
    const Status = req.body.Status;
    const Description = req.body.Description;
    const MaintainCost = req.body.MaintainCost;
    const Date = moment(req.body.Date).format('YYYY-MM-DD');
    

    const vehiMaintenance = new Maintenance({

        Vehicle_ID,
        Vehicle_Reg_NO,
        Issue,
        Status,
        Description,
        MaintainCost,
        Date

    })
    console.log("new", vehiMaintenance);


    vehiMaintenance.save().then(() => {
        console.log(req);
        res.json(" Add vehicle Maintenance");

    }).catch((err) => {
        console.log(err);
        return res.status(400).send({ status: "Vehicle already exist!" });
    })

})

//update maintenance

router.route("/updateMaintenance/:id").put(async (req, res) => {
    let userId = req.params.id;
    const { Vehicle_ID,
            Vehicle_Reg_NO,
            Issue,
            Status,
            Description,
            MaintainCost,
            Date } = req.body;

    const updateMaintenance = {
        Vehicle_ID,
        Vehicle_Reg_NO,
        Issue,
        Status,
        Description,
        MaintainCost,
        Date
    }
    const update = await Maintenance.findByIdAndUpdate(userId, updateMaintenance)
        .then(() => {
            res.status(200).send({ status: "Vehicle maintenance Updated" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data", error: err.message });
        })
})

//view all maintenance details

router.route("/viewMaintenance").get((req, res) => {
    Maintenance.find().then((maintenances) => {
        res.json(maintenances)
    }).catch((err) => {
        console.log(err)
    })
})

//delete maintenance

router.route("/deleteMaintenance/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Maintenance.findByIdAndDelete(userId)
        .then(() => {
            res.status(200).send({ status: "vehicle maintenance details deleted" });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with delete maintenance details", error: err.message });
        })
})

//fetch details

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const fetchMaintenace = await Maintenance.findById(userId)
        .then((maintenance) => {
            res.status(200).send({ status: "maintenance fetched", maintenance})
        }).catch(() => {
            console.log(err.message);
            res.status(500).send({ status: "Error with get vehicle maintenance", error: err.message });
        })
})

//vehile report router

router.route("/reportM/:dateFrom/:dateTo").get(async (req, res) => {

    // console.log("report -----",req);

    let dateFrom = moment(req.params.dateFrom.trim()).format('YYYY-MM-DD');
    let dateTo = moment(req.params.dateTo.trim()).format('YYYY-MM-DD');
    console.log(dateFrom)

    console.log("report function", dateFrom, dateTo);
try{
    const responses = await Maintenance.find({
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

router.route("/filter").get((req, res) => {
    // let performanceID = req.params.id;
    Maintenance.find({
        MaintainCost: { $gt: 100000 }
     })
     .then((Maintenance) => {
       res.json(Maintenance)
     })
     .catch((err) => {
       console.log(err);
       res.status(500).send({ status: "Error with fetching data", error: err.message })
     })
   })


module.exports = router;
