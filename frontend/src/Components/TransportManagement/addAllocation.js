import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../NavigateBar.css";
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineBars } from 'react-icons/ai';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';
// import { use } from '../../../../BACKEND/routes/vehicles';


function AddAllocation() {

    // important to slide navigatebar
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const handleSidebarToggle = () => { setIsSidebarOpen(!isSidebarOpen); };


    const [Tea_Quantity, setTeaQuantity] = useState("");
    const [Destination, setDestination] = useState("");
    const [Distance, setDistance] = useState("");
    const [Suggested_vehicle, setSuggestedvehicle] = useState("");
    const [Vehicle_reg_no, setVehicleregno] = useState("");
    const [Driver_name, setDrivername] = useState("");
    const [Fuel_type, setFueltype] = useState("");
    const [Date, setDate] = useState("");

    const options = [];
    const defaultOption = options[0];
    useEffect(() => {
        options.push()
        if(Tea_Quantity >= 500){
            
            options.push('one', 'two', 'three')
    
        }
        if(Tea_Quantity < 500){
            
            options.push('Car', 'van')
    
        }


    }, [Tea_Quantity])

    function sendData(e) {
        e.preventDefault();

        const newAllocation = {
            Tea_Quantity,
            Destination,
            Distance,
            Suggested_vehicle,
            Vehicle_reg_no,
            Driver_name,
            Fuel_type,
            Date
        }


        console.log(newAllocation)
        axios.post("http://localhost:8070/allocation/addAllocation", newAllocation).then(() => {
            alert(" Vehicle Successfully Allocated! ");
            window.location.reload()

        }).catch((err) => {
            alert(err);
        })

    }
    const customStyles = {
         control: (base, state) => (
            { ...base, 
            border: 'none',
            borderBottom: '1px solid black',
            borderRadius: '0', 
            boxShadow: 'none', 
            '&:hover': { borderColor: '#ccc' } }
            ) 
        };


    return (

        <div class="wrapper">

            <nav id="sidebar" className={isSidebarOpen ? "active" : ""}>
                <div class="sidebar-header">
                    <h3></h3>
                    <div class="logo">
                        {/* <img src={require('./images/logo1.png')} alt="logo" /> */}
                        <img src="/images/logo1.png" alt="logo" />

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
                <div class="page-component-body p-5 " style={{ backgroundColor: "#cce7bb" }}>
                    <div class="container input-main-form-emp pt-3 border border-success" style={{ backgroundColor: "white" }}>
                        <div class="container border-top " >
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-uppercase  " style={{ backgroundColor: "#658A4E", color: 'white', }}>
                                    <h3 className="topic text-center mt-3 mb-3 "  >Vehicle Allocation </h3>
                                </div>
                            </div>

                            <form class="form" onSubmit={sendData}>
                                <div class="form pt-5 mb-2">
                                    <label for="Tea_Quantity">Tea Quantity :</label>
                                    <input type="text" class="form-control formInput" id="Tea_Quantity" placeholder="Enter Tea Quantity"
                                        onChange={(e) => {
                                            setTeaQuantity(e.target.value);
                                        }} />

                                </div>



                                <div class="form mb-2">
                                    <label for="Destination">Destination:</label>
                                    <input type="text" class="form-control formInput" id="Destination"
                                        onChange={(e) => {
                                            setDestination(e.target.value);
                                        }} />

                                </div>

                                <div class="form mb-2">
                                    <label for="Distance">Distance:</label>
                                    <input type="text" class="form-control" id="Distance"
                                        onChange={(e) => {
                                            setDistance(e.target.value);
                                        }} />

                                </div>
                                <div class="form mb-2">
                                <label for="Suggested_vehicle">Suggested vehicle:</label>
                                <Dropdown options={options}
                                    // styles={customStyles}
                                    value={defaultOption}
                                    class="form-control"
                                    placeholder="Select an option"
                                />
                                {/* <input type="text" class="form-control" id="Suggested_vehicle" 
                                onChange={(e)=>{
                                    setSuggestedvehicle(e.target.value);
                                }}/> */}

                                </div>

                                <div class="form mb-2">
                                    <label for="Vehicle_reg_no">Vehicle_reg_no</label>
                                    <input type="text" class="form-control" id="Vehicle_reg_no"
                                        onChange={(e) => {
                                            setVehicleregno(e.target.value);
                                        }} />

                                </div>



                                <div class="form mb-2">
                                    <label for="Driver_name">Driver name</label>
                                    <input type="text" class="form-control" id="Driver_name"
                                        onChange={(e) => {
                                            setDrivername(e.target.value);
                                        }} />

                                </div>



                                <div class="form mb-2">
                                    <label for="Fuel_Type">Fuel Type</label>
                                    <select type="text" class="form-control" id="Fuel_Type"
                                        onChange={(e) => {
                                            setFueltype(e.target.value);
                                        }}>
                                        <option >CHOOSE</option>
                                        <option value="Petrol">Petrol</option>
                                        <option value="Diesel">Diesel</option>
                                        <option value="Electric">Electric</option>

                                    </select>

                                </div>


                                <div class="form mb-2">
                                    <label for="Date">Date:</label>
                                    <input type="Date" class="form-control" id="Date"
                                        onChange={(e) => {
                                            setDate(e.target.value);
                                        }} />

                                </div>




                                <div className="col py-3 text-center">
                                    <button type="submit" class="btn-ok1" >Submit</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>





            </div>

        </div>



    )

}



export default AddAllocation;
