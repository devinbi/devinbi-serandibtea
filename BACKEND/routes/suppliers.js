const router = require("express").Router();
let Supplier = require("../models/Supplier");

//Localhost:8070/equipment/add
router.route("/add").post((req, res) => {

  const supplierid = req.body.supplierid;
  const suppliername = req.body.suppliername;
  const weight = Number(req.body.weight);
  const moisture_content = Number(req.body.moisture_content);
  const ripe_tea_leaves = Number(req.body.ripe_tea_leaves);
  const net_weight = Number(req.body.net_weight);

  const neweSupplier = new Supplier({
    supplierid,
    suppliername,
    weight,
    moisture_content,
    ripe_tea_leaves,
    net_weight
  });

  neweSupplier
    .save()
    .then(() => {
      res.json("details added");
    })
    .catch((err) => {
        console.log(err);
    });
});

//fetch

router.route("/").get((req, res) => {
  Supplier
    .find()
    .then((Supplier) => {
      res.json(Supplier);
    })
    .catch((err) => {
      console.log(err);
    });
});
//update

//async function (runs simaltaneously)
//fetching userid
router.route("/update/:id").put(async (req, res) => {
  let userid = req.params.id;
  const {
    supplierid,
    suppliername,
    weight,
    moisture_content,
    ripe_tea_leaves,
    net_weight,
  } = req.body;

  const updateSupplier = {
    supplierid,
    suppliername,
    weight,
    moisture_content,
    ripe_tea_leaves,
    net_weight,
  };
  //waiting till update is over
  const update = await Supplier
    .findByIdAndUpdate(userid, updateSupplier)
    .then(() => {
      res.status(200).send({ status: "user updated" });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "error with updating data", error: err.message });
    });
});
//delete

router.route("/delete/:id").delete(async (req, res) => {
  let userid = req.params.id;
  await Supplier
    .findByIdAndDelete(userid)
    .then(() => {
      res.status(200).send({ status: "user deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "error with delete user", error: err.message });
    });
});

router.route("/get/:id").get(async (req, res) => {
  let userid = req.params.id;
  await Supplier.findById(userid).then(() => {
    res.status(200).send({ status: "user fetched" });
    console.log(err.message);
    res.status(500).send({ status: "error with get user", error: err.message });
  });
});
module.exports = router;
