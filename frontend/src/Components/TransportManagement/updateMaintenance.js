import { React, useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";


function UpdateMaintenanceModal(Maintenance) {

    console.log("update modal data", Maintenance);

    useEffect(() => {
        try {

            setVehicleID(Maintenance.data.Vehicle_ID);
            setVehiRegNo(Maintenance.data.Vehicle_Reg_NO);
            setIssue(Maintenance.data.Issue);
            setStatus(Maintenance.data.Status);
            setDescription(Maintenance.data.Description);
            setMaintainCost(Maintenance.data.MaintainCost);
            setDate(Maintenance.data.Date);
            

        } catch {
            window.alert("something went wrong");
        }
    }, [Maintenance.data]);

    const [Vehicle_ID, setVehicleID] = useState("");
    const [Vehicle_Reg_NO, setVehiRegNo] = useState("");
    const [Issue, setIssue] = useState("");
    const [Status, setStatus] = useState("");
    const [Description, setDescription] = useState("");
    const [MaintainCost, setMaintainCost] = useState("");
    const [Date, setDate] = useState("");


   function sendData (e){
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

            axios.put(`http://localhost:8070/maintenance/updateMaintenance/${Maintenance.data._id}`, newMaintenace)

                .then(() => {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Maintenance Details Added Succesfully',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    }
                    ).then(() => {
                        window.location.replace("/Maintenance/ViewAllMaintenance");

                    })
                    window.location.replace("/Maintenance/ViewAllMaintenance");

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
            <Modal.Title>Vehicle ID: {Maintenance.data.Vehicle_ID}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="px-4">

            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <form id="contact-form" class="form" action="#" method="POST" role="form" onSubmit={sendData}>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                <h3 className="topic-V text-left mt-1 mb-4">Update Vehicle Maintenance Details</h3>
                            </div>
                        </div>


                        <div className="row">

                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="Vehicle ID ">Vehicle ID </label>
                                <input type="text" class="form-control formInput" id="Vehicle ID" name="Vehicle ID" 
                                 tabindex="1" required

                                    value={Vehicle_ID}

                                    onChange={(e) => {
                                        setVehicleID(e.target.value); 
                                    }}


                                />

                            </div>

                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="Vehicle_Reg_NO">Vehicle Registration Number</label>
                                <input type="text" class="form-control formInput" id="Vehicle_Reg_NO" name="Vehicle_Reg_NO" 
                                 tabindex="1" required

                                    value={Vehicle_Reg_NO}

                                    onChange={(e) => {
                                        setVehiRegNo(e.target.value); 
                                    }}


                                />

                            </div>

                            

                            
                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="subject">Issue</label>
                                <select
                                    value={Issue}
                                    id="Issue"
                                    className="form-control "
                                    onChange={(e) => {
                                        setIssue(e.target.value); 
                                    }}
                                >
                                    <option value="Technical">Technical</option>
                                    <option value="Replacement">Replacement</option>
                                    <option value="Repair">Repair</option>
                                    <option value="Mechanical">Mechanical</option>
                                   
                                </select>
                            </div>



                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="subject">Status</label>
                                <select
                                    value={Status}
                                    id="Status"
                                    className="form-control "
                                    onChange={(e) => {
                                        setStatus(e.target.value); 
                                    }}
                                >
                                    <option value="Active">Active</option>
                                    <option value="Pending">Pending</option>
                                    
                                   
                                </select>
                            </div>    


                            
                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="Description">Description</label>
                                <input type="text" class="form-control formInput" id="Description" name="Description" 
                                 tabindex="1" required

                                    value={Description}

                                    onChange={(e) => {
                                        setDescription(e.target.value); 
                                    }}


                                />

                            </div>

                            <div class="form-group col-sm">
                                <label class="form-label-emp" for="MaintainCost">Maintenance Cost</label>
                                <input type="text" class="form-control formInput" id="MaintainCost" name="MaintainCost" 
                                 tabindex="1" required

                                    value={MaintainCost}

                                    onChange={(e) => {
                                        setMaintainCost(e.target.value); 
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
                                <button type="reset" className="btn btn-reset" onClick={Maintenance.onHide}>
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
           
                                                

export default UpdateMaintenanceModal