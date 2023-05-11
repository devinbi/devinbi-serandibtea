import { React, useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";


function UpdateAllocationModal(Allocation) {

    console.log("update modal data", Allocation);

    useEffect(() => {
        try {

            setTeaQuantity(Allocation.data.Tea_Quantity);
            setDestination(Allocation.data.Destination);
            setDistance(Allocation.data.Distance);
            setSuggestedvehicle(Allocation.data.Suggested_vehicle);
            setVehicleregno(Allocation.data.Vehicle_reg_no);
            setDrivername(Allocation.data.Driver_name);
            setFueltype(Allocation.data.Fuel_type);
            setDate(Allocation.data.Date);
            

        } catch {
            window.alert("something went wrong");
        }
    }, [Allocation.data]);

    const [Tea_Quantity, setTeaQuantity] = useState("");
    const [Destination, setDestination] = useState("");
    const [Distance, setDistance] = useState("");
    const [Suggested_vehicle, setSuggestedvehicle] = useState("");
    const [Vehicle_reg_no, setVehicleregno] = useState("");
    const [Driver_name, setDrivername] = useState("");
    const [Fuel_type, setFueltype] = useState("");
    const [Date, setDate] = useState("");


   function sendData (e){
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

            axios.put(`http://localhost:8070/allocation/updateAllocation/${Allocation.data._id}`, newAllocation)

                .then(() => {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Allocation Details Added Succesfully',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    }
                    ).then(() => {
                        window.location.replace("/Allocation/viewAllocation");

                    })
                    window.location.replace("/Allocation/viewAllocation");

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
            <Modal.Title>Vehicle Registration Number : {Allocation.data.Vehicle_reg_no}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="px-4">

            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <form id="contact-form" class="form" action="#" method="POST" role="form" onSubmit={sendData}>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                <h3 className="topic-V text-left mt-1 mb-4">Allocated Vehicle Details</h3>
                            </div>
                        </div>


                        <div className="row">

                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="Tea_Quantity">Tea Quantity</label>
                                <input type="text" class="form-control formInput" id="Tea_Quantity" name="Tea_Quantity" 
                                 tabindex="1" required

                                    value={Tea_Quantity}

                                    onChange={(e) => {
                                        setTeaQuantity(e.target.value); 
                                    }}


                                />

                            </div>

                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="Destination">Destination</label>
                                <input type="text" class="form-control formInput" id="Destination" name="Destination" 
                                 tabindex="1" required

                                    value={Destination}

                                    onChange={(e) => {
                                        setDestination(e.target.value); 
                                    }}


                                />

                            </div>

                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="name">Distance</label>
                                <input type="text" class="form-control formInput" id="Distance" name="Distance" 
                                 tabindex="1" required

                                    value={Distance}

                                    onChange={(e) => {
                                        setDistance(e.target.value); 
                                    }}


                                />

                            </div>

                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="Suggested_vehicle">Suggested vehicle</label>
                                <input type="text" class="form-control formInput" id="Suggested_vehicle" name="Suggested_vehicle" 
                                 tabindex="1" required

                                    value={Suggested_vehicle}

                                    onChange={(e) => {
                                        setSuggestedvehicle(e.target.value); 
                                    }}


                                />

                            </div>



                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="name">Vehicle Registration Number</label>
                                <input type="text" class="form-control formInput" id="Vehicle_Registration_No" name="Vehicle_Registration_No" 
                                 tabindex="1" required

                                    value={Vehicle_reg_no}

                                    onChange={(e) => {
                                        setVehicleregno(e.target.value); 
                                    }}


                                />

                            </div>

                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="Driver_name">Driver name</label>
                                <input type="text" class="form-control formInput" id="Driver_name" name="Driver_name" 
                                 tabindex="1" required

                                    value={Driver_name}

                                    onChange={(e) => {
                                        setDrivername(e.target.value); 
                                    }}


                                />

                            </div>

                            


                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="Fuel_type">Fuel type</label>
                                <input type="Fuel_type" class="form-control formInput" id="Fuel_type" name="Fuel_type" 
                                 tabindex="1" required

                                    value={Fuel_type}

                                    onChange={(e) => {
                                        setFueltype(e.target.value); 
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
                                <button type="reset" className="btn btn-reset" onClick={Allocation.onHide}>
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
           
                                                

export default UpdateAllocationModal