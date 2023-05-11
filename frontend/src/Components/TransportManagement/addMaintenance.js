import React,{useState , useEffect} from 'react';
import axios from 'axios';
import "../../NavigateBar.css";
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineBars } from 'react-icons/ai';


function AddMaintenance() {

    // important to slide navigatebar
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
    const handleSidebarToggle = () => { setIsSidebarOpen(!isSidebarOpen); };


    const [Vehicle_ID, setVehicleID] = useState("");
    const [Vehicle_Reg_NO, setVehiRegNo] = useState("");
    const [Issue, setIssue] = useState("");
    const [Status, setStatus] = useState("");
    const [Description, setDescription] = useState("");
    const [MaintainCost, setMaintainCost] = useState("");
    const [Date, setDate] = useState("");




    function sendData(e){
        e.preventDefault();
      
        const newMaintenace = {
            Vehicle_ID,
            Vehicle_Reg_NO,
            Issue,
            Status,
            Description,
            MaintainCost,
            Date
        }
        
    console.log(newMaintenace)
        axios.post("http://localhost:8070/maintenance/addMain",newMaintenace).then(()=>{
            alert(" Add Vehicle Maintenance Successfully ");
            window.location.reload()
      
        }).catch((err)=>{
            alert(err);
        })
     
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
                            <a href="/AddSupplier">View All Received Tea Leaves</a>
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
                            <a href="#">Allocate Vehicle</a>
                        </li>
                        <li>
                            <a href="#">View Allocate Vehicle Details</a>
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
                    <div class="container border-top " >
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-uppercase  " style={{backgroundColor: "#658A4E", color: 'white', }}>
                                <h3 className="topic text-center mt-3 mb-3 "  >Vehicle Maintenance </h3>
                            </div>
                        </div>
            
                        <form class="form" onSubmit={sendData}>
                            <div class="form pt-5 mb-2">
                                    <label for="Vehicle_ID">Vehicle ID :</label>
                                    <input type="text" class="form-control formInput" id="Vehicle_ID"  
                                    onChange={(e)=>{
                                        setVehicleID(e.target.value);
                                    }}/>
                                
                            </div>



                            <div class="form mb-2">
                                <label for="Vehicle_Reg_NO">Vehicle Registration Number:</label>
                                <input type="text" class="form-control formInput" id="Vehicle_Reg_NO"  
                                onChange={(e)=>{
                                    setVehiRegNo(e.target.value);
                                }}/>

                            </div>
                            
                        
                            <div class="form mb-2">
                                <label for="Issue">Issue:</label>
                                <select type="text" class="form-control" id="Issue" 
                                onChange={(e)=>{
                                    setIssue(e.target.value);
                                }}>
                                    <option >CHOOSE</option>  
                                    <option value="Technical">Technical</option>
                                    <option value="Replacement">Replacement</option>
                                    <option value="Repair">Repair</option>
                                    <option value="Mechanical">Mechanical</option>
                             
                            </select>

                            </div>


                            <div class="form mb-2">
                                <label for="Status">Status:</label>
                                <select type="text" class="form-control" id="Status" 
                                onChange={(e)=>{
                                    setStatus(e.target.value);
                                }}>
                                    <option >CHOOSE</option>  
                                    <option value="Active">Active</option>
                                    <option value="Pending">Pending</option>
                                    
                             
                                </select>

                            </div>

                            <div class="form mb-2">
                                <label for="Description">Description:</label>
                                <input type="text" class="form-control" id="Description"
                                onChange={(e)=>{
                                    setDescription(e.target.value);
                                }}/>

                            </div>

                            <div class="form mb-2">
                                <label for="MaintainCost">Maintenance Cost:</label>
                                <input type="text" class="form-control" id="MaintainCost"
                                onChange={(e)=>{
                                    setMaintainCost(e.target.value);
                                }}/>

                            </div>

                          
                            <div class="form mb-2">
                                <label for="Date">Date:</label>
                                <input type="text" class="form-control" id="Date" 
                                onChange={(e)=>{
                                    setDate(e.target.value);
                                }}/>

                            </div>


                            
                            
                            <div className="col py-3 text-center">
                            <button  type="submit" class="btn-ok1" >Submit</button>
                            </div>
                        
                        </form>
                    </div>
                </div>
            </div>


            

            
        </div>

    </div>
       
        
              
    )

}



export default AddMaintenance;
