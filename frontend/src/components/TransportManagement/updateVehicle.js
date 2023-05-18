import { React, useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";




function UpdateVehicleModal(Vehicle) {

    console.log("update modal data", Vehicle);

    useEffect(() => {
        try {

            setVehicleid(Vehicle.data.Vehicle_ID);
            setVehicletype(Vehicle.data.Vehicle_Type);
            setVehicleBrand(Vehicle.data.Vehicle_Brand);
            setVehicleModel(Vehicle.data.Vehicle_Model);
            setVehicleRegNO(Vehicle.data.Vehicle_Registration_No);
            setCurrentMileage(Vehicle.data.Current_Mileage);
            setInsuranceType(Vehicle.data.Insurance_Type);
            setInsuranceName(Vehicle.data.Insurance_Name);
            setAirConditon(Vehicle.data.Air_Condition);
            setEcoIssuedate(Vehicle.data.Eco_Test_Issued_Date);
            setEcoExpireDate(Vehicle.data.Eco_Test_Expire_Date);
            setFuelType(Vehicle.data.Fuel_Type);
            setVehicleOwner(Vehicle.data.Vehicle_Owner);
            setOwnerName(Vehicle.data.Owner_Name);
            setNIC(Vehicle.data.NIC);
            setAddress(Vehicle.data.Address);
            setContactNo(Vehicle.data.Contact_No);
            setDate(Vehicle.data.Date);
            

        } catch {
            window.alert("something went wrong");
        }
    }, [Vehicle.data]);

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
     


   function sendData (e){
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

            axios.put(`http://localhost:8070/vehicle/updateVehicle/${Vehicle.data._id}`, newVehicle)

                .then(() => {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Vehicle Details Added Succesfully',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    }
                    ).then(() => {
                        window.location.replace("/Vehicle/viewVehicle");

                    })
                    window.location.replace("/Vehicle/viewVehicle");

                }).catch((err) => {
                    const msgerr = err.response.data.status
                    Swal.fire({
                        icon: 'warning',
                        title: 'Oops...',
                        text: `${msgerr}`,
                        confirmButtonColor: '#1fc191',

                    })
                })

             
        

   }
   
   return (
    <div>
        <Modal.Header closeButton>
            <Modal.Title>Vehicle ID : {Vehicle.data.Vehicle_ID}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="px-4">

            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <form id="contact-form" class="form" action="#" method="POST" role="form" onSubmit={sendData}>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                <h3 className="topic-V text-left mt-1 mb-4">Vehicle & Owner Details</h3>
                            </div>
                        </div>
                        <div className="row">


                            <div class="form-group ">

                                <div class=" row ml-1">
                                    <div class="col-6">
                                        <label class="form-label-V mt-2" for="RegNo">Vehicle ID </label>
                                    </div>
                                    <div class="col-5">
                                        <input
                                            disabled
                                            id="regNo"
                                            type="text"
                                            className="form-control "
                                            placeholder="VXXXX"
                                            value={Vehicle_ID}

                                            onChange={(e) => {
                                                setVehicleid(e)
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">

                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="name">Vehicle Type</label>
                                <input type="text" class="form-control formInput" id="Vehicle_Type" name="Vehicle_Type" placeholder="eg : Car , Van" tabindex="1" required

                                    value={Vehicle_Type}

                                    onChange={(e) => {
                                        setVehicletype(e.target.value); 
                                    }}


                                />

                            </div>

                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="name">Vehicle Brand</label>
                                <input type="text" class="form-control formInput" id="Vehicle_Brand" name="Vehicle_Brand" placeholder="eg Toyota , Nissan" tabindex="1" required

                                    value={Vehicle_Brand}

                                    onChange={(e) => {
                                        setVehicleBrand(e.target.value); 
                                    }}


                                />

                            </div>

                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="name">Vehicle Model</label>
                                <input type="text" class="form-control formInput" id="Vehicle_Model" name="Vehicle_Model" placeholder="eg  KDH, Axio" tabindex="1" required

                                    value={Vehicle_Model}

                                    onChange={(e) => {
                                        setVehicleModel(e.target.value); 
                                    }}


                                />

                            </div>

                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="name">Vehicle Registration Number</label>
                                <input type="text" class="form-control formInput" id="Vehicle_Registration_No" name="Vehicle_Registration_No" 
                                 tabindex="1" required

                                    value={Vehicle_Registration_No}

                                    onChange={(e) => {
                                        setVehicleRegNO(e.target.value); 
                                    }}


                                />

                            </div>

                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="name">Current Mileage</label>
                                <input type="text" class="form-control formInput" id="CurrentMileage" name="CurrentMileage" 
                                 tabindex="1" required

                                    value={Current_Mileage}

                                    onChange={(e) => {
                                        setCurrentMileage(e.target.value); 
                                    }}


                                />

                            </div>

                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="subject">Insurance Type</label>
                                <select
                                    value={Insurance_Type}
                                    id="InsuranceType"
                                    className="form-control "
                                    onChange={(e) => {
                                        setInsuranceType(e.target.value); 
                                    }}
                                >
                                    <option value="Third party">Third party</option>
                                    <option value="Full Option">Full Option</option>
                                   
                                </select>
                            </div>


                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="name">Insurance Name</label>
                                <input type="text" class="form-control formInput" id="InsuranceName" name="InsuranceName" 
                                 tabindex="1" required

                                    value={Insurance_Name}

                                    onChange={(e) => {
                                        setInsuranceName(e.target.value); 
                                    }}


                                />

                            </div>

                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="subject">Air Condition</label>
                                <select
                                    value={Air_Condition}
                                    id="AirCondition"
                                    className="form-control "
                                    onChange={(e) => {
                                        setAirConditon(e.target.value); 
                                    }}
                                >
                                    <option value="A/C">A/C</option>
                                    <option value="Non A/C">Non A/C</option>
                                   
                                </select>
                            </div>

                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="name">Eco Test Issued Date</label>
                                <input type="text" class="form-control formInput" id="Eco_Test_Issued_Date" name="Eco_Test_Issued_Date" 
                                 tabindex="1" required

                                    value={Eco_Test_Issued_Date}

                                    onChange={(e) => {
                                        setEcoIssuedate(e.target.value); 
                                    }}


                                />

                            </div>

                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="name">Eco Test Expire Date</label>
                                <input type="text" class="form-control formInput" id="Eco_Test_Expire_Date" name="Eco_Test_Expire_Date" 
                                 tabindex="1" required

                                    value={Eco_Test_Expire_Date}

                                    onChange={(e) => {
                                        setEcoExpireDate(e.target.value); 
                                    }}


                                />

                            </div>

                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="Fuel_Type">Fuel Type</label>
                                <select
                                    value={Fuel_Type}
                                    id="Fuel_Type"
                                    className="form-control "
                                    onChange={(e) => {
                                        setFuelType(e.target.value); 
                                    }}
                                >
                                    <option value="Petrol">Petrol</option>
                                    <option value="Diesel">Diesel</option>
                                    <option value="Electric">Electric</option>
                                   
                                </select>
                            </div>

                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="Vehicle_Owner">Vehicle Owner</label>
                                <select
                                    value={Fuel_Type}
                                    id="Vehicle_Owner"
                                    className="form-control "
                                    onChange={(e) => {
                                        setVehicleOwner(e.target.value); 
                                    }}
                                >
                                    <option value="Tea factory">owned by Tea Factory</option>
                                    <option value="Rented">Rented</option>
                                   
                                </select>
                            </div>

                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="name">Owner Name</label>
                                <input type="text" class="form-control formInput" id="Owner_Name" name="Owner_Name" 
                                 tabindex="1" required

                                    value={Owner_Name}

                                    onChange={(e) => {
                                        setOwnerName(e.target.value); 
                                    }}


                                />

                            </div>

                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="NIC">NIC</label>
                                <input type="text" class="form-control formInput" id="NIC" name="NIC" 
                                 tabindex="1" required

                                    value={NIC}

                                    onChange={(e) => {
                                        setNIC(e.target.value); 
                                    }}


                                />

                            </div>

                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="Address">Address</label>
                                <input type="text" class="form-control formInput" id="Address" name="Address" 
                                 tabindex="1" required

                                    value={Address}

                                    onChange={(e) => {
                                        setAddress(e.target.value); 
                                    }}


                                />

                            </div>

                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="Contact_No">Contact Number</label>
                                <input type="text" class="form-control formInput" id="Contact_No" name="Contact_No" 
                                 tabindex="1" required

                                    value={Owner_Name}

                                    onChange={(e) => {
                                        setContactNo(e.target.value); 
                                    }}

                                />

                            </div>

                            
                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="Date">Date</label>
                                <input type="text" class="form-control formInput" id="Date" name="Date"   tabindex="2" required

                                    value={Date}
                                    onChange={(e) => {
                                      setDate(e.target.value); 
                                    }}

                                />
                            </div>


            
                        </div>


                        <hr></hr>


                        <div className="row mt-3 mb-4">
                            <div className="col py-3 text-center">
                                <button type="submit" className="btn btn-ok" >
                                    Update
                                </button>
                            </div>
                            <div className="col py-3 text-center">
                                <button type="reset" className="btn btn-reset" onClick={Vehicle.onHide}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </Modal.Body>
    </div>
    
)
                              
                              
                      }        
           
                                                

export default UpdateVehicleModal