import React,{useState , useEffect} from 'react';
import axios from 'axios';
import { Modal, Button } from "react-bootstrap";
import "../../NavigateBar.css";
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineBars } from 'react-icons/ai';
import Swal from 'sweetalert2'


function DeletedVehicles() {

    // important to slide navigatebar
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
    const handleSidebarToggle = () => { setIsSidebarOpen(!isSidebarOpen); };

    const [DeletedVehicles, setDeletedVehicles] = useState([]);
 
    


    useEffect(() => {

        function getDeletedVehicle() {
            axios.get("http://localhost:8070/Del/viewDeletedVehicle").then((res) => {


            setDeletedVehicles(res.data.reverse());

                

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

        getDeletedVehicle();

    }, []);

    


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
                            <a href="/ViewAllSuppliers">View All Received Tea Leaves</a>
                        </li>
                        <li>
                            <a href="/AddTransferredproduct">Add Transferred product</a>
                        </li>
                        <li>
                            <a href="/ViewAllTransferredProduct">View All Transferred Product</a>
                        </li>
                        <li>
                            <a href="RejectedProducts">View Rejected Product</a>
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

            
                <div class="see-more-icon">
                        <span onClick={handleSidebarToggle}> <AiOutlineBars /></span> 
                </div>
            


            {/* Our Form Start */}
            <div class="page-component-body p-5 " style={{backgroundColor: "#cce7bb"}}>
                <div class="container input-main-form-emp pt-3 border border-success" style={{backgroundColor: "white"}}>
                    <div class="container " >

                            <div class="col">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-uppercase headerNameFont" style={{backgroundColor: "#658A4E", color: 'white', }}>
                                    <h3 className="topic text-center mt-3 mb-3 pt-3 pb-3"  >Deleted Vehicle Details</h3>
                                </div>
                            </div>

                        <div className="table-emp1">
                            

                            



                            <table class="table table-hover">
                                <thead class="">
                                    <tr style={{backgroundColor: "#527449" , color:"white"}} >
                                    
                                            <th class="text-center">Vehicle ID</th>
                                            <th class="text-center">Vehicle Type</th>
                                            <th class="text-center">Vehicle Brand</th>
                                            <th class="text-center">Vehicle Model</th>
                                            <th class="text-center">Vehicle Registration Number</th>
                                            <th class="text-center">Current Mileage</th>
                                            <th class="text-center">Insurance Type</th>
                                            <th class="text-center">Insurance Name</th>
                                            <th class="text-center">Air Condition</th>
                                            <th class="text-center">Eco Test Issued Date</th>
                                            <th class="text-center">Eco Test Expire Date</th>
                                            <th class="text-center">Fuel Type</th>
                                            <th class="text-center">Vehicle Owner</th>
                                            <th class="text-center">Owner Name</th>
                                            <th class="text-center">NIC</th>
                                            <th class="text-center">Address</th>
                                            <th class="text-center">Contact Number</th>
                                            <th class="text-center">Date</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {DeletedVehicles.map((DeletedVehicles) => {

                                        return (
                                            <tr>
                                                {/* <td onClick={() => openModal(DeletedVehicles)} data-toggle-1="tooltip" data-placement="right" title="Click to view details" className="view-td">
                                                    {DeletedVehicles.supplierid}
                                                </td> */}
                                                <td class="text-center">{DeletedVehicles.Vehicle_ID}</td>
                                                <td class="text-center">{DeletedVehicles.Vehicle_Type}</td>
                                                <td class="text-center">{DeletedVehicles.Vehicle_Brand}</td>
                                                <td class="text-center">{DeletedVehicles.Vehicle_Model}</td>
                                                <td class="text-center">{DeletedVehicles.Vehicle_Registration_No}</td>
                                                <td class="text-center">{DeletedVehicles.Current_Mileage}</td>
                                                <td class="text-center">{DeletedVehicles.Insurance_Type}</td>
                                                <td class="text-center">{DeletedVehicles.Insurance_Name}</td>
                                                <td class="text-center">{DeletedVehicles.Air_Condition}</td>
                                                <td class="text-center">{DeletedVehicles.Eco_Test_Issued_Date}</td>
                                                <td class="text-center">{DeletedVehicles.Eco_Test_Expire_Date}</td>
                                                <td class="text-center">{DeletedVehicles.Fuel_Type}</td>
                                                <td class="text-center">{DeletedVehicles.Vehicle_Owner}</td>
                                                <td class="text-center">{DeletedVehicles.Owner_Name}</td>
                                                <td class="text-center">{DeletedVehicles.NIC}</td>
                                                <td class="text-center">{DeletedVehicles.Address}</td>
                                                <td class="text-center">{DeletedVehicles.Contact_No}</td>
                                                <td class="text-center">{DeletedVehicles.Date}</td>
                                            </tr>
                                        );
                                    })}


                                </tbody>
                            </table>
                        </div>

                

                        

                        
                    </div>
                </div>
            </div>


            

            
        </div>

    </div>
       
        
              
    )

}



export default DeletedVehicles;





        