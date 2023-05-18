import React,{useState , useEffect} from 'react';
import axios from 'axios';
import "../../NavigateBar.css";
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineBars } from 'react-icons/ai';


function AddVehicle() {

    // important to slide navigatebar
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
    const handleSidebarToggle = () => { setIsSidebarOpen(!isSidebarOpen); };


    const [Vehicle_ID, setVehicleid] = useState("");
    const [Vehicle_Type, setVehicletype] = useState("");
    const [Vehicle_Brand, setVehicleBrand] = useState("");
    const [Vehicle_Model, setVehicleModel] = useState("");
    const [Vehicle_Registration_No, setVehicleRegNO] = useState("");
    const [Current_Mileage, setCurrentMileage] = useState("");
    const [Insurance_Type, setInsuranceType] = useState("");
    const [Insurance_Name, setInsuranceName] = useState("");
    const [Air_Condition, setAirConditon] = useState("");
    const [Eco_Test_Issued_Date, setEcoIssuedate] = useState("");
    const [Eco_Test_Expire_Date, setEcoExpireDate] = useState("");
    const [Fuel_Type, setFuelType] = useState("");
    const [Vehicle_Owner, setVehicleOwner] = useState("");
    const [Owner_Name, setOwnerName] = useState("");
    const [NIC, setNIC] = useState("");
    const [Address, setAddress] = useState("");
    const [Contact_No, setContactNo] = useState("");
    const [Date, setDate] = useState("");




    function sendData(e){
        e.preventDefault();
      
        const newVehicle = {
            Vehicle_ID,
            Vehicle_Type, 
            Vehicle_Brand,
            Vehicle_Model,
            Vehicle_Registration_No,
            Current_Mileage,
            Insurance_Type,
            Insurance_Name,
            Air_Condition,
            Eco_Test_Issued_Date,
            Eco_Test_Expire_Date,
            Fuel_Type,
            Vehicle_Owner,
            Owner_Name,
            NIC,
            Address,
            Contact_No,
            Date
        }
        
    console.log(newVehicle)
        axios.post("http://localhost:8070/Vehicle/addVehicle",newVehicle).then(()=>{
            alert(" Vehicle Successfully added! ");
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
                            <a href="/addvehicle">Add Vehicle & Owner Details</a>
                        </li>
                        <li>
                            <a href="/Vehicle/viewVehicle">View Vehicle & Owner Details</a>
                        </li>
                        <li>
                            <a href="#">Allocate Vehicles</a>
                        </li>
                        <li>
                            <a href="#">View Allocate Vehicle Details</a>
                        </li>
                        <li>
                            <a href="#">Add Vehicle Maintenance Details</a>
                        </li>
                        <li>
                            <a href="#">View Vehicle Maintenance Details</a>
                        </li>
                        <li>
                            <a href="#">High Cost Vehicle Maintenance Details</a>
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
                                <h3 className="topic text-center mt-3 mb-3 "  >New Vehicle and Owner details </h3>
                            </div>
                        </div>
            
                        <form class="form" onSubmit={sendData}>
                            <div class="form pt-5 mb-2">
                                    <label for="vehicleid">Vehicle ID :</label>
                                    <input type="text" class="form-control formInput" id="vehicleid" pattern="[V][0-9]{4}" placeholder="Enter vehicle id"
                                    onChange={(e)=>{
                                        setVehicleid(e.target.value);
                                    }}/>
                                
                            </div>


                            <div class="form mb-2">
                                <label for="vehicletype">Vehicle Type:</label>
                                <input type="text" class="form-control formInput" id="vehicletype" 
                                onChange={(e)=>{
                                    setVehicletype(e.target.value);
                                }}/>

                            </div>

                            <div class="form mb-2">
                                <label for="VehicleBrand">Vehicle Brand:</label>
                                <input type="text" class="form-control formInput" id="VehicleBrand" 
                                onChange={(e)=>{
                                    setVehicleBrand(e.target.value);
                                }}/>

                            </div>
                            
                            <div class="form mb-2">
                                <label for="VehicleModel">Vehicle Model:</label>
                                <input type="text" class="form-control" id="VehicleModel" 
                                onChange={(e)=>{
                                    setVehicleModel(e.target.value);
                                }}/>

                            </div>
                            <div class="form mb-2">
                                <label for="VehicleRegistrationNo">Vehicle Registration Number:</label>
                                <input type="text" class="form-control" id="VehicleRegistrationNo" 
                                onChange={(e)=>{
                                    setVehicleRegNO(e.target.value);
                                }}/>

                            </div>

                            <div class="form mb-2">
                                <label for="CurrentMileage">Current Mileage:</label>
                                <input type="text" class="form-control" id="CurrentMileage" 
                                onChange={(e)=>{
                                    setCurrentMileage(e.target.value);
                                }}/>

                            </div>

                            <div class="form mb-2">
                                <label for="InsuranceType">Insurance Type</label>
                                <select type="text" class="form-control" id="InsuranceType" 
                                onChange={(e)=>{
                                    setInsuranceType(e.target.value);
                                }}>
                                    <option >CHOOSE</option>  
                             <option value="Third party">Third party</option>
                             <option value="Full Option">Full Option</option>
                             
                            </select>

                            </div>

                            <div class="form mb-2">
                                <label for="InsuranceName">Insurance Name:</label>
                                <input type="text" class="form-control" id="InsuranceName" 
                                onChange={(e)=>{
                                    setInsuranceName(e.target.value);
                                }}/>

                            </div>

                            <div class="form mb-2">
                                <label for="AirCondition">Air Condition</label>
                                <select type="text" class="form-control" id="AirCondition" 
                                onChange={(e)=>{
                                    setAirConditon(e.target.value);
                                }}>
                                    <option >CHOOSE</option>  
                                    <option value="A/C">A/C</option>
                                    <option value="Non A/C">Non A/C</option>
                             
                            </select>

                            </div>
                            

                            <div class="form mb-2">
                                <label for="Eco_Test_Issued_Date">Eco Test Issued Date:</label>
                                <input type="Date" class="form-control" id="Eco_Test_Issued_Date" 
                                onChange={(e)=>{
                                    setEcoIssuedate(e.target.value);
                                }}/>

                            </div>

                            <div class="form mb-2">
                                <label for="Eco_Test_Expire_Date">Eco Test Expire Date:</label>
                                <input type="Date" class="form-control" id="Eco_Test_Expire_Date" 
                                onChange={(e)=>{
                                    setEcoExpireDate(e.target.value);
                                }}/>

                            </div>

                            

                            <div class="form mb-2">
                                <label for="Fuel_Type">Fuel Type</label>
                                <select type="text" class="form-control" id="Fuel_Type" 
                                onChange={(e)=>{
                                    setFuelType(e.target.value);
                                }}>
                                    <option >CHOOSE</option>  
                                    <option value="Petrol">Petrol</option>
                                    <option value="Diesel">Diesel</option>
                                    <option value="Electric">Electric</option>
                             
                            </select>

                            </div>

                            <div class="form mb-2">
                                <label for="Vehicle_Owner">Vehicle Owner</label>
                                <select type="text" class="form-control" id="Vehicle_Owner" 
                                onChange={(e)=>{
                                    setVehicleOwner(e.target.value);
                                }}>
                                    <option >CHOOSE</option>  
                                    <option value="Tea factory">owned by Tea Factory</option>
                                    <option value="Rented">Rented</option>
                                    
                            </select>

                            </div>


                            <div class="form mb-2">
                                <label for="Owner_Name">Owner Name:</label>
                                <input type="text" class="form-control" id="Owner_Name" 
                                onChange={(e)=>{
                                    setOwnerName(e.target.value);
                                }}/>

                            </div>

                            <div class="form mb-2">
                                <label for="NIC">NIC:</label>
                                <input type="text" class="form-control" id="NIC" 
                                onChange={(e)=>{
                                    setNIC(e.target.value);
                                }}/>

                            </div>

                            <div class="form mb-2">
                                <label for="Address">Address:</label>
                                <input type="text" class="form-control" id="Address" 
                                onChange={(e)=>{
                                    setAddress(e.target.value);
                                }}/>

                            </div>

                            <div class="form mb-2">
                                <label for="Contact_No">Contact Number:</label>
                                <input type="text" class="form-control" id="Contact_No" 
                                onChange={(e)=>{
                                    setContactNo(e.target.value);
                                }}/>

                            </div>

                            

                            <div class="form mb-2">
                                <label for="Date">Date:</label>
                                <input type="Date" class="form-control" id="Date" 
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



export default AddVehicle;

