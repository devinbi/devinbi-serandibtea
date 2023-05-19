import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import Pdf from "react-to-pdf";
import Swal from "sweetalert2";

const ref = React.createRef();



function VehicleReport() {


    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");

    
    const [equipments, setEquipments] = useState([]);

    const date = new Date();

    useEffect(() => {
        document.getElementById("dateDisplay").innerHTML = date;

    }, []);

    function sendData(e) {

        e.preventDefault();
        changeBoxes();

        console.log("date from..",dateFrom);
        console.log("date to...",dateTo);
        
        axios.get(`http://localhost:8070/equipment/reporte/${dateFrom}/${dateTo}`).then((res) => {
            // const message = "No record found!"
            // console.log("data in vehicle list page", res.data);
            setEquipments(res.data);
            //console.log("list", vehicles);

            if (res.data == 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No data found!',
                    confirmButtonColor: '#207159',

                })
            }


        }).catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                confirmButtonColor: '#207159',

            })
        })

    }

    function changeBoxes() {
        document.getElementById('myTabContent').style.display = "none";
        document.getElementById('myTabContent2').style.display = "block";

    }




    return (
        <div className="page-component-body">          
            <div class="container input-main-form-emp">
                <div class="tab-content-emp" id="myTabContent">

                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                <form>
                                    <center>
                                        <h3 className=" mt-3 mb-4">Generate equipment report </h3>
                                    </center>
                                    <hr></hr>
                                </form>
                            </div>
                        </div>
                        <br></br>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <form id="contact-form" class="form" onSubmit={sendData} >
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label class="form-label-emp" for="from">From</label>
                                            <DatePicker
                                                //type="date" 
                                                class="form-control formInput"
                                                id="dateFrom"
                                                name="dateFrom"
                                                placeholder=""
                                                tabindex="5"
                                                timeFormat={false}
                                                required
                                                onChange={(e) => {
                                                    setDateFrom(e);
                                                }}

                                            />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="form-label-emp" for="to">To</label>
                                            <DatePicker
                                                required
                                                //type="date" 
                                                class="form-control formInput"
                                                id="dateTo"
                                                name="dateTo"
                                                placeholder=""
                                                tabindex="6"
                                                timeFormat={false}
                                                onChange={(e => {
                                                    setDateTo(e);
                                                })}


                                            />
                                        </div>
                                    </div>

                                    <br></br>

                                   

                                    <div className="row">
                                        <div className="col py-3 text-center">
                                            <button type="submit" className="btn btn-ok" >
                                                Generate
                                            </button>
                                        </div>

                                    </div>
                                    <br></br>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="myTabContent2" style={{ display: "none" }}>
                    <Pdf targetRef={ref} filename="VehicleReport.pdf">
                        {({ toPdf }) => <button class="btn btn-download white" onClick={toPdf}><i class="fa fa-download" aria-hidden="true"></i></button>}
                    </Pdf>
                    <div ref={ref} className="pl-4">
                        <div className="report">
                            {/* <img src="/images/report.png" /> */}
                            <br></br>

                            
                            <h3>Equipment Management Report</h3>
                            <br></br>
                            <img src="/images/report.png" width="745px" height="150px"/>
                            <br></br>


                            <table class="table table-hover">
                                <thead class="thead-dark">
                                    <tr>

                                        <th>equipmentid</th>
                                        <th>equipmentname</th>
                                        <th>equipmenttype</th>
                                        <th>date</th>
                                        <th>department</th>
                                        <th>intertek</th>
                                        <th>status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {equipments.map((equipment) => {
                                        // console.log("table", vehicle.Date);
                                        return (


                                            <tr >
                                    <td class="text-center">{equipment.equipmentid}</td>
                                    <td class="text-center">{equipment.equipmentname}</td>
                                    <td class="text-center">{equipment.equipmenttype}</td>
                                    <td class="text-center">{equipment.date}</td>
                                    <td class="text-center">{equipment.department}</td>
                                    <td class="text-center">{equipment.intertek}</td>
                                    <td class="text-center">{equipment.status}</td>

                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <h6 className="pb-5">Report generated on : <span id="dateDisplay"></span></h6>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default VehicleReport;