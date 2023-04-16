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


const allocatingRouter = require("./routes/allocatings.js");


app.use("/allocating",allocatingRouter);

const equipmentRouter = require("./routes/equipments.js");

app.use("/equipment",equipmentRouter);

const monitorRouter = require("./routes/monitors.js");

app.use("/monitor",monitorRouter);



app.listen(PORT, () => {
    console.log(`server is up and running on porT: ${PORT}`);
})