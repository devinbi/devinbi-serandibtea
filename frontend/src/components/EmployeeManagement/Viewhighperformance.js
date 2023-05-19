import axios from 'axios'
import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2'

import TestModal from './Viewhighperformance';



function Viewhighperformance() {

    // const [search, setSearch] = useState("");

    const [highperformances, sethighPerformances] = useState([]);

    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    


     useEffect(() => {

        function gethighperformance() {
            axios.get("http://localhost:8070/performance/filter").then((res) => {


            sethighPerformances(res.data.reverse());

                //console.log("Data recieved");

            }).catch((error) => {
                // alert(error.message);
                console.log("f354754",error);

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    confirmButtonColor: '#207159',

                })
            })

        }

        gethighperformance()

    }, []);

       

    const openModal = (highperformance) => {
        setData(highperformance);
        handleViewOnClick();
    }


    const handleViewOnClick = () => {
        //console.log("req came for modal");
        // console.log(modalData, "data came for modalllllll");
        setModalShow(true);
    }

    
     return (

        <div className="page-component-body">
            {/* <Header></Header> */}

            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <TestModal
                    data={modalData}
                    onHide={() => setModalShow(false)}
                />
            </Modal>


            <div className="table-emp">
                <div class="row table-head mt-3">
                    <div class="col">
                        <h3 className="float-left ">High Performance List</h3>
                    </div>
                </div>

                

          <table class="table table-hover">
                    <thead class="">

                    <tr style={{backgroundColor: "#658A4E" , color:"white"}} >
                            <th class="text-center">Employee ID</th>
                            <th class="text-center">Job Title</th>
                            <th class="text-center">NIC</th>
                            <th class="text-center">Attendance Count</th>
                            <th class="text-center">OT count</th>
                            

                           
                        </tr>

                    </thead>
                    <tbody>
                        {highperformances.map((highperformances) => {

                            return (
                                <tr>
                                     <td onClick={() => openModal(highperformances)} data-toggle="tooltip" data-placement="right" title="Click to view details" className="view-td" class="text-center">
                                        {highperformances.employeeId}
                                    </td>

                                  

                                    {/* <td class="text-center">{employees.employeeId}</td> */}
                                    <td class="text-center">{highperformances.name}</td>
                                    <td class="text-center">{highperformances.position}</td>
                                    <td class="text-center">{highperformances.attendanceCount}</td>
                                    <td class="text-center">{highperformances.otCount}</td>
                                    <td class="text-center">

                                       

                                    </td>
                                </tr>
                            );
                        })}


                    </tbody>
                </table>
            </div>

           </div>


    )
}

export default Viewhighperformance;
