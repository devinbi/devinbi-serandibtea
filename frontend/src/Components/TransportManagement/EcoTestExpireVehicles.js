import React,{useState , useEffect} from 'react';
import axios from 'axios';
import { Modal, Button } from "react-bootstrap";
import "../../NavigateBar.css";
import {withRouter} from 'react-router-dom';
import Swal from 'sweetalert2'
import TestModal from './EcoTestExpireVehicles';





function EcoTestExpireVehicles() {


    const [EcoTestExpire, setEcoTestExpireVehiclesdata] = useState([]);
 
    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    
    useEffect(() => {

        

        getEcoTestExpireVehicles();

    }, []);

    
    function getEcoTestExpireVehicles() {
        axios.get("http://localhost:8070/Vehicle/getExpire").then((res) => {

        console.log(res.data)
        setEcoTestExpireVehiclesdata(res.data[0]);

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
    const openModal = (EcoTestExpireVehicles) => {
        setData(EcoTestExpireVehicles);
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
                        <h3 className="float-left ">Vehicles near the expiration date of the Eco test</h3>
                    </div>
                </div>

                

          <table class="table table-hover">
                    <thead class="">

                    <tr style={{backgroundColor: "#658A4E" , color:"white"}} >

                               

                               <th class="text-center">Vehicle ID</th>
                               <th class="text-center">Vehicle Registration Number</th>
                               <th class="text-center">Eco Test Issued Date</th>
                               <th class="text-center">Eco Test Expire Date</th>
                               <th class="text-center">Fuel Type</th>
                               <th class="text-center">Vehicle Owner</th>
                               <th class="text-center">Owner Name</th>
                               <th class="text-center">NIC</th>
                               <th class="text-center">Address</th>
                               <th class="text-center">Contact Number</th>
                                            
                                            
                    </tr>
                   </thead>

                    <tbody>
                        {EcoTestExpire.map((EcoTestExpireVehicles) => {

                            return (
                                <tr>
                                     <td onClick={() => openModal(EcoTestExpireVehicles)} data-toggle="tooltip" data-placement="right" title="Click to view details" className="view-td" class="text-center">
                                        {EcoTestExpireVehicles.employeeId}
                                    </td>

                                  
                                    <td class="text-center">{EcoTestExpireVehicles.Vehicle_ID}</td>
                                    <td class="text-center">{EcoTestExpireVehicles.Vehicle_Registration_No}</td>
                                    <td class="text-center">{EcoTestExpireVehicles.Eco_Test_Issued_Date}</td>
                                    <td class="text-center">{EcoTestExpireVehicles.Eco_Test_Expire_Date}</td>
                                    <td class="text-center">{EcoTestExpireVehicles.Fuel_Type}</td>
                                    <td class="text-center">{EcoTestExpireVehicles.Vehicle_Owner}</td>
                                    <td class="text-center">{EcoTestExpireVehicles.Owner_Name}</td>
                                    <td class="text-center">{EcoTestExpireVehicles.NIC}</td>
                                    <td class="text-center">{EcoTestExpireVehicles.Contact_No}</td>
                                    <td class="text-center">{EcoTestExpireVehicles.Owner_Name}</td>
                                </tr>
                            );
                        })}


                    </tbody>
                </table>
            </div>

           </div>


    )
}

export default EcoTestExpireVehicles;





        