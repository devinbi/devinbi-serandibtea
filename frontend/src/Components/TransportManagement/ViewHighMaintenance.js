import React,{useState , useEffect} from 'react';
import axios from 'axios';
import { Modal, Button } from "react-bootstrap";
import "../../NavigateBar.css";
import {withRouter} from 'react-router-dom';
import Swal from 'sweetalert2'
import TestModal from './ViewHighMaintenance';





function ViewHighMaintenenace() {


    const [ViewHighMaintenenace, setViewHighMaintenenace] = useState([]);
 
    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    
    useEffect(() => {

        function getHighMaintenance() {
            axios.get("http://localhost:8070/maintenance/filter").then((res) => {


            setViewHighMaintenenace(res.data.reverse());

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

        getHighMaintenance();

    }, []);

    

    const openModal = (ViewHighMaintenenace) => {
        setData(ViewHighMaintenenace);
        handleViewOnClick();
    }

    const handleViewOnClick = () => {
        //console.log("req came for modal");
        //console.log(modalData, "data came for modalllllll");
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
                        <h3 className="float-left ">High Maintenance Cost List</h3>
                    </div>
                </div>

                

          <table class="table table-hover">
                    <thead class="">

                    <tr style={{backgroundColor: "#658A4E" , color:"white"}} >

                               <th class="text-center">Vehicle ID</th>
                               <th class="text-center">Vehicle Registration Number</th>
                               <th class="text-center">Issue</th>
                               <th class="text-center">Status</th>
                               <th class="text-center">Description</th>
                               <th class="text-center">Maintenance Cost</th>
                               <th class="text-center">Date</th>    
                               
                    </tr>
                   </thead>

                    <tbody>
                        {ViewHighMaintenenace.map((ViewHighMaintenenace) => {

                            return (
                                <tr>
                                     <td onClick={() => openModal(ViewHighMaintenenace)} data-toggle="tooltip" data-placement="right" title="Click to view details" className="view-td" class="text-center">
                                        {ViewHighMaintenenace.employeeId}
                                    </td>

                                  

                                    {/* <td class="text-center">{employees.employeeId}</td> */}
                                    <td class="text-center">{ViewHighMaintenenace.Vehicle_ID}</td>
                                    <td class="text-center">{ViewHighMaintenenace.Vehicle_Reg_NO}</td>
                                    <td class="text-center">{ViewHighMaintenenace.Issue}</td>
                                    <td class="text-center">{ViewHighMaintenenace.Status}</td>
                                    <td class="text-center">{ViewHighMaintenenace.Description}</td>
                                    <td class="text-center">{ViewHighMaintenenace.MaintainCost}</td>
                                    <td class="text-center">{ViewHighMaintenenace.Date}</td>
                                </tr>
                            );
                        })}


                    </tbody>
                </table>
            </div>

           </div>


    )
}

export default ViewHighMaintenenace;





        