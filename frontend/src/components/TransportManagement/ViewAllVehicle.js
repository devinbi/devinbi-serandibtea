import React,{useState , useEffect} from 'react';
import axios from 'axios';
import { Modal, Button } from "react-bootstrap";
import "../../NavigateBar.css";
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineBars } from 'react-icons/ai';
import { HiPencilSquare } from "react-icons/hi2";
import { HiOutlineTrash } from "react-icons/hi2";
import Swal from 'sweetalert2'
import TestModal from './ViewAllVehicle';
import UpdateVehicleModal from './updateVehicle';




function ViewAllVehicle() {

    // important to slide navigatebar
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
    const handleSidebarToggle = () => { setIsSidebarOpen(!isSidebarOpen); };





    const [ViewAllVehicle, setViewAllVehicle] = useState([]);
 
    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    const [modalDataDelete, setModalDataDelete] = useState([]);
    const [modalDeleteConfirm, setModalDeleteConfirm] = useState(false);

    const [modalDataUpdate, setModalDataUpdate] = useState([]);
    const [modalUpdate, setModalUpdate] = useState(false);


    useEffect(() => {

        function getAllVehicle() {
            axios.get("http://localhost:8070/Vehicle/viewVehicle").then((res) => {


            setViewAllVehicle(res.data.reverse());

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

        getAllVehicle();

    }, []);

    const deletevehicle = async (data) => {
        console.log("----------------",data._id);
        
        // console.log("modalDataDelete.fyiff",modalDataDelete);
        const value = axios.delete(`http://localhost:8070/Vehicle/delete/${data._id}`);
        console.log("deleted", value);
        if (value) {
            console.log("Value",value.data);
            // alert("**Permenantly deleted the Vehicle Record");
            // window.""location.replace("/viewReservation");
            Swal.fire({
                title: 'Success!',
                text: 'Permenantly deleted the vehivle & owner details successfully !!',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000
            }
            ).then(() => {
                window.location.reload();
            })
        }
        
    }

    const openModal = (ViewAllVehicle) => {
        setData(ViewAllVehicle);
        handleViewOnClick();
    }

    const handleViewOnClick = () => {
        //console.log("req came for modal");
        //console.log(modalData, "data came for modalllllll");
        setModalShow(true);
    }

    const openModalDelete = (data) => {
        setModalDataDelete(data);
        setModalDeleteConfirm(true);
    }

    const openModalUpdate = (data) => {
        //console.log("request came for modal updateeeeeee", data);
        setModalDataUpdate(data);
        setModalUpdate(true);

    }
      


    return(

    <div class="wrapper">
        
        <nav id="sidebar" className={isSidebarOpen ? "active" : ""}>
            <div class="sidebar-header">
                <h3></h3>
                <div class="logo">
                <img src="/images/logo1.png" alt="logo"/>
                </div>
            </div>

            <ul class="list-unstyled components">
                {/* <p>SIDE NAVIGATE BAR</p> */}
                <li >
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Inventory Management</a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="/AddSupplier">Add Tea Leaves Quantity</a>
                        </li>
                        <li>
                            <a href="/ViewAllReceivedTeaLeaves">View All Received Tea Leaves</a>
                        </li>
                        <li>
                            <a href="/AddTransferredproduct">Add Transferred product</a>
                        </li>
                        <li>
                            <a href="#">View Total product</a>
                        </li>
                        <li>
                            <a href="#">View Rejected Product</a>
                        </li>
                    </ul>
                </li>
                
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Equipment Management</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="/addequipment">Add Equipment Details</a>
                        </li>
                        <li>
                            <a href="#">View Equipment Details</a>
                        </li>
                        <li>
                            <a href="#">Allocate Equipment</a>
                        </li>
                        <li>
                            <a href="/allocating/viewallocating">View Allocate Details</a>
                        </li>
                        <li>
                            <a href="#">Monitoring Equipment</a>
                        </li>
                        <li>
                            <a href="#">View Performance Details</a>
                        </li>

                    </ul>
                </li>
                <li>
                    <a href="#pageSubmenu1" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Employee Management</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu1">
                        <li>
                            <a href="#">Add Employees</a>
                        </li>
                        <li>
                            <a href="#">View Employees</a>
                        </li>
                        <li>
                            <a href="#">Add Performance</a>
                        </li>
                        <li>
                            <a href="#">View Performance</a>
                        </li>
                        <li>
                            <a href="#">High Performance list</a>
                        </li>
                        <li>
                            <a href="#">Resigned Employees</a>
                        </li>

                    </ul>
                </li>
                <li>
                    <a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle ">Transport Management</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu2">
                        <li>
                            <a href="#">Add Vehicle & Owner Details</a>
                        </li>
                        <li>
                            <a href="#">View Vehicle & Owner Details</a>
                        </li>
                        <li>
                            <a href="#">Allocate Equipment</a>
                        </li>
                        <li>
                            <a href="#">View Allocate Details</a>
                        </li>
                        <li>
                            <a href="#">Monitoring Equipment</a>
                        </li>
                        <li>
                            <a href="#">View Performance Details</a>
                        </li>

                    </ul>
                </li>
            </ul>
            
            
            <button class="logout-button"><FiLogOut />Logout</button>


        </nav>

        
        <div id="content">

            
                <div class="see-more-icon">
                        <span onClick={handleSidebarToggle}> <AiOutlineBars /></span> 
                </div>
            


            {/* Our Form Start */}
            <div class="page-component-body p-5 " style={{backgroundColor: "#cce7bb"}}>
                <div class="container input-main-form-emp pt-3 border border-success" style={{backgroundColor: "white"}}>
                    <div class="container ">

                            <div class="col">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-uppercase headerNameFont" style={{backgroundColor: "#658A4E", color: 'white', }}>
                                    <h3 className="topic text-center mt-3 mb-3 pt-3 pb-3"  >View All Vehicle & Owner details</h3>
                                </div>
                            </div>

                        <div className="table-emp1">
                            

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



                            <table class="table table-hover">
                                <thead class="">
                                    <tr style={{backgroundColor: "#527449" , color:"white"}} >
                                            <th class="text-center">Vehicle ID</th>
                                            <th class="text-center">Vehicle Type</th>
                                            <th class="text-center">Vehicle Brand</th>
                                            <th class="text-center">Vehicle Registration Number</th>
                                            <th class="text-center">Current Mileage</th>
                                            <th class="text-center">Insurance Type</th>
                                            <th class="text-center">Air Condition</th>
                                            <th class="text-center">Eco Test Issued Date</th>
                                            <th class="text-center">Eco Test Expire Date</th>
                                            <th class="text-center">Fuel Type</th>
                                            <th class="text-center">Vehicle Owner</th>
                                            <th class="text-center">NIC</th>
                                            <th class="text-center">Address</th>
                                            <th class="text-center">Contact Number</th>
                                            <th class="text-center">Date</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {ViewAllVehicle.map((ViewAllVehicle) => {

                                        return (
                                            <tr>
                                                {/* <td onClick={() => openModal(AllReceivedTeaLeaves)} data-toggle-1="tooltip" data-placement="right" title="Click to view details" className="view-td">
                                                    {AllReceivedTeaLeaves.supplierid}
                                                </td> */}
                                                <td class="text-center">{ViewAllVehicle.Vehicle_ID}</td>
                                                <td class="text-center">{ViewAllVehicle.Vehicle_Type}</td>
                                                <td class="text-center">{ViewAllVehicle.Vehicle_Brand}</td>
                                                <td class="text-center">{ViewAllVehicle.Vehicle_Model}</td>
                                                <td class="text-center">{ViewAllVehicle.Vehicle_Registration_No}</td>
                                                <td class="text-center">{ViewAllVehicle.Current_Mileage}</td>
                                                <td class="text-center">{ViewAllVehicle.Insurance_Type}</td>
                                                <td class="text-center">{ViewAllVehicle.Insurance_Name}</td>
                                                <td class="text-center">{ViewAllVehicle.Air_Condition}</td>
                                                <td class="text-center">{ViewAllVehicle.Eco_Test_Issued_Date}</td>
                                                <td class="text-center">{ViewAllVehicle.Eco_Test_Expire_Date}</td>
                                                <td class="text-center">{ViewAllVehicle.Fuel_Type}</td>
                                                <td class="text-center">{ViewAllVehicle.Vehicle_Owner}</td>
                                                <td class="text-center">{ViewAllVehicle.Owner_Name}</td>
                                                <td class="text-center">{ViewAllVehicle.NIC}</td>
                                                <td class="text-center">{ViewAllVehicle.Address}</td>
                                                <td class="text-center">{ViewAllVehicle.Contact_No}</td>
                                                <td class="text-center">{ViewAllVehicle.Date}</td>
                                                
                                                
                                                    <td class="text-center ">
                                                        <HiPencilSquare class="tbl-Action-icon mr-3" size="25px" color="green" onClick={() => openModalUpdate(ViewAllVehicle)}/>
                                                        <HiOutlineTrash class="tbl-Action-icon" size="25px" color="red" onClick={() => openModalDelete(ViewAllVehicle)}/>
                                                    </td>
                                                
                                            </tr>
                                        );
                                    })}


                                </tbody>
                            </table>
                        </div>

                

                        <div className="dlt-confirm mt-3"></div>
                        {/* modal for delete employee record */}
                        <Modal show={modalDeleteConfirm} onHide={() => setModalDeleteConfirm(false)} size="md"
                            aria-labelledby="contained-modal-title-vcenter" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Confirm Deletion</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="dlt-confirm mt-3">
                                    <p>Are you want to delete this item  ?</p>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>

                                <div className="row">
                                    <div className="col -6">
                                        <button type="submit" className="btn btn-delete" onClick={() => { deletevehicle(modalDataDelete); }}>
                                            Confirm
                                        </button>
                                    </div>
                                    <div className="col-6 text-right" onClick={() => setModalDeleteConfirm(false)}>
                                        <button type="reset" className="btn btn-reset">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </Modal.Footer> 
                        </Modal>

                        {/* modal for update the data of vehicle  */}
                        <Modal
                            show={modalUpdate}
                            onHide={() => setModalUpdate(false)}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered>
                            <UpdateVehicleModal
                                data={modalDataUpdate}
                                onHide={() => setModalUpdate(false)}
                            />
                        </Modal>
                    </div>
                </div>
            </div>


            

            
        </div>

    </div>
       
        
              
    )

}



export default ViewAllVehicle;





        