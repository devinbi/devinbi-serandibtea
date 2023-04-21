import React,{useState , useEffect} from 'react';
import axios from 'axios';
import { Modal, Button } from "react-bootstrap";
import "../../NavigateBar.css";
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineBars } from 'react-icons/ai';
import { HiPencilSquare } from "react-icons/hi2";
import { HiOutlineTrash } from "react-icons/hi2";
import Swal from 'sweetalert2'
import TestModal from './ViewAllReceivedTeaLeaves';




function ViewAllReceivedTeaLeaves() {

    // important to slide navigatebar
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
    const handleSidebarToggle = () => { setIsSidebarOpen(!isSidebarOpen); };





    const [AllReceivedTeaLeaves, setAllReceivedTeaLeaves] = useState([]);
 
    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    const [modalDataDelete, setModalDataDelete] = useState([]);
    const [modalDeleteConfirm, setModalDeleteConfirm] = useState(false);

    const [modalDataUpdate, setModalDataUpdate] = useState([]);
    const [modalUpdate, setModalUpdate] = useState(false);


    useEffect(() => {

        function getAllReceivedTeaLeaves() {
            axios.get("http://localhost:8070/product/").then((res) => {


            setAllReceivedTeaLeaves(res.data.reverse());

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

        getAllReceivedTeaLeaves();

    }, []);

    const deleteRental = async (data) => {
        console.log("----------------",data._id);
        
        // console.log("modalDataDelete.fyiff",modalDataDelete);
        const value = axios.post(`http://localhost:8070/allocating/delete/${data._id}`);
        //console.log("deletedddd", value);
        if (value) {
            console.log("Value",value.data);
            // alert("**Permenantly deleted the Vehicle Record");
            // window.""location.replace("/viewReservation");
            Swal.fire({
                title: 'Success!',
                text: 'Permenantly deleted the Vehicle Record &  added successfully !!',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000
            }
            ).then(() => {
                window.location.reload();
            })
        }
        
    }

    const openModal = (allocating) => {
        setData(allocating);
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
                {/* <img src={require('./images/logo1.png')} alt="logo" /> */}
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
                    <a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle ">Equipment Management</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu2">
                        <li>
                            <a href="#">Add Equipment Details</a>
                        </li>
                        <li>
                            <a href="#">View Equipment Details</a>
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

            
                <div class="container-fluid">
                        <span onClick={handleSidebarToggle}> <AiOutlineBars /></span> 
                </div>
            


            {/* Our Form Start */}
            <div class="page-component-body p-5 " style={{backgroundColor: "#cce7bb"}}>
                <div class="container input-main-form-emp pt-3 border border-success" style={{backgroundColor: "white"}}>
                    <div class="container " >

                            <div class="col">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-uppercase headerNameFont" style={{backgroundColor: "#658A4E", color: 'white', }}>
                                    <h3 className="topic text-center mt-3 mb-3 pt-3 pb-3"  >Tea Leaves Quantity Per Day</h3>
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
                                            <th class="text-center">Product Name</th>
                                            <th class="text-center">Type</th>
                                            <th class="text-center">Quantity</th>
                                            <th class="text-center">Weight</th>
                                            <th class="text-center">Status</th>
                                            <th class="text-center">Date</th>
                                            <th class="text-center">Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {AllReceivedTeaLeaves.map((AllReceivedTeaLeaves) => {

                                        return (
                                            <tr>
                                                {/* <td onClick={() => openModal(AllReceivedTeaLeaves)} data-toggle-1="tooltip" data-placement="right" title="Click to view details" className="view-td">
                                                    {AllReceivedTeaLeaves.supplierid}
                                                </td> */}
                                                <td class="text-center">{AllReceivedTeaLeaves.productName}</td>
                                                <td class="text-center">{AllReceivedTeaLeaves.type}</td>
                                                <td class="text-center">{AllReceivedTeaLeaves.quantity}</td>
                                                <td class="text-center">{AllReceivedTeaLeaves.weight}</td>
                                                <td class="text-center">{AllReceivedTeaLeaves.status}</td>
                                                <td class="text-center">{AllReceivedTeaLeaves.date}</td>
                                                
                                                
                                                    <td class="text-center ">
                                                        <HiPencilSquare class="tbl-Action-icon mr-3" size="25px" color="green" onClick={() => openModalUpdate(AllReceivedTeaLeaves)}/>
                                                        <HiOutlineTrash class="tbl-Action-icon" size="25px" color="red" onClick={() => openModalDelete(AllReceivedTeaLeaves)}/>
                                                    </td>
                                                
                                            </tr>
                                        );
                                    })}


                                </tbody>
                            </table>
                        </div>

                

        
                        {/* modal for delete employee record */}
                        <Modal show={modalDeleteConfirm} onHide={() => setModalDeleteConfirm(false)} size="md"
                            aria-labelledby="contained-modal-title-vcenter" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Confirm Deletion</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Are you want to delete this item ?</p>

                            </Modal.Body>
                            <Modal.Footer>

                                <div className="row">
                                    <div className="col -6">
                                        <button type="submit" className="btn btn-delete" onClick={() => { deleteRental(modalDataDelete); }}>
                                            Confirm
                                        </button>
                                    </div>
                                    <div className="col-6 text-right" onClick={() => setModalDeleteConfirm(false)}>
                                        <button type="reset" className="btn btn-reset">
                                            cancel
                                        </button>
                                    </div>
                                </div>
                            </Modal.Footer> 
                        </Modal>

                        {/* modal for update the data of vehicle  */}
                        {/* <Modal
                            show={modalUpdate}
                            onHide={() => setModalUpdate(false)}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered>
                            <UpdateallocatingModal
                                data={modalDataUpdate}
                                onHide={() => setModalUpdate(false)}
                            />
                        </Modal> */}
                    </div>
                </div>
            </div>


            

            
        </div>

    </div>
       
        
              
    )

}



export default ViewAllReceivedTeaLeaves;





        