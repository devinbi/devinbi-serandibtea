const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070;

app.use(cors({origin: true, credentials: true}));
app.use(express.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})

const connection = mongoose.connection;
//connect database
 connection.once("open",() => {
    console.log("mongodb Connection Sucess !");
 })


const productRouter = require("./routes/products.js");
app.use("/product",productRouter);

const supplierRouter = require("./routes/suppliers.js");
app.use("/supplier",supplierRouter);



const allocatingRouter = require("./routes/allocatings.js");
app.use("/allocating",allocatingRouter);

const equipmentRouter = require("./routes/equipments.js");
app.use("/equipment",equipmentRouter);

const monitorRouter = require("./routes/monitors.js");
app.use("/monitor",monitorRouter);


// const monitorRouter = require("./routes/monitors.js");

// app.use("/monitor",monitorRouter);

const employeeRouter= require("./routes/employees.js");
app.use("/employee",employeeRouter);

const performanceRouter= require("./routes/performances.js");
app.use("/performance",performanceRouter);



const vehicleRouter = require("./routes/vehicles.js");
app.use("/vehicle", vehicleRouter);

const AllocationRouter = require("./routes/allocations.js");
app.use("/allocation", AllocationRouter);

const MaintenanceRouter = require("./routes/maintenances.js");
app.use("/maintenance", MaintenanceRouter);



app.listen(PORT, () => {
    console.log(`server is up and running on porT: ${PORT}`);
})