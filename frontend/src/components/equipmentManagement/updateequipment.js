import { React, useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";






function UpdateEquipmentModal(equipment) {

    console.log("update modal dataaaaaa", equipment);

    useEffect(() => {
        try {

            setEquipmentid(equipment.data.equipmentid);
            setEquipmentname(equipment.data.equipmentname);
            setEquipmenttype(equipment.data.equipmenttype);
            setDate(equipment.data.date);
            setDepartment(equipment.data.department);
            setIntertek(equipment.data.intertek);
            setStatus(equipment.data.status);
            
//ttt

        } catch {
           
        }
    }, [equipment.data]);

    const [equipmentid, setEquipmentid] = useState("");
    const [equipmentname, setEquipmentname] = useState("");
    const [equipmenttype, setEquipmenttype] = useState("");
    const [date, setDate] = useState("");
    const [department, setDepartment] = useState("");
    const [intertek, setIntertek] = useState("");
    const [status, setStatus] = useState("");

    // console.log("came dataaaaa", uptVehicle)


   function sendData (e){
    e.preventDefault();

            const newEquipment = {
              equipmentid,
              equipmentname,
              equipmenttype,
              date,
              department,
              intertek,
              status

            }


            axios.put(`http://localhost:8070/equipment/update/${equipment.data._id}`, newEquipment)

                .then(() => {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Vehicle Details Added Succesfully',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    }
                    ).then(() => {
                        window.location.replace("/equipment/viewequipment");

                    })
                    window.location.replace("/equipment/viewequipment");

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
                <Modal.Title>equipment id : {equipment.data.equipmentid}</Modal.Title>
            </Modal.Header>

            <Modal.Body className="px-4">

                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form id="contact-form" class="form" action="#" method="POST" role="form" onSubmit={sendData}>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                    <h3 className="topic-V text-left mt-1 mb-4">Equipment Details</h3>
                                </div>
                            </div>
                            <div className="row">


                                <div class="form-group ">

                                    <div class=" row ml-1">
                                        <div class="col-6">
                                            <label class="form-label-V mt-2" for="RegNo">Equipment ID </label>
                                        </div>
                                        <div class="col-5">
                                            <input
                                                disabled
                                                id="regNo"
                                                type="text"
                                                className="form-control "
                                                placeholder="ABC-XXXX"
                                                value={equipmentid}

                                                onChange={(e) => {
                                                  setEquipmentid(e)
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div class="form-group col-sm">
                                    <label class="form-label-emp" for="name">Equipment Name</label>
                                    <input type="text" class="form-control formInput" id="VehicleBrand" name="VehicleBrand" placeholder="eg : Toyota , Nissan" tabindex="1" required

                                        value={equipmentname}

                                        onChange={(e) => {
                                          setEquipmentname(e.target.value); // assign value
                                        }}


                                    />

                                </div>
                                <div class="form-group col-sm">
                                    <label class="form-label-emp" for="email">Equipment Type</label>
                                    <input type="text" class="form-control formInput" id="vehModal" name="vehModal" placeholder=" eg : KDH, Axio " tabindex="2" required

                                        value={date}
                                        onChange={(e) => {
                                          setDate(e.target.value); // assign value
                                        }}

                                    />
                                </div>
                                <div class="form-group col-sm">
                                    <label class="form-label-emp" for="subject">Department</label>
                                    <select
                                        value={department}
                                        id="vehType"
                                        className="form-control "
                                        onChange={(e) => {
                                          setDepartment(e.target.value); // assign value
                                        }}
                                    >
                                        <option id="car">Cutting</option>
                                        <option id="van">Rolling</option>
                                        <option id="bus">Heating</option>
                                    </select>
                                </div>
                            </div>


                            <hr></hr>


                            <div className="row">
                                <div class="form-group col-md-6">
                                    <label class="form-label-emp" for="subject">Intertek</label>
                                    <input required type="text" class="form-control formInput" id="InsCom" name="InsCom" placeholder="Insurance Company Name" tabindex="2" 
                                        value={intertek}
                                        onChange={(e) => {
                                          setIntertek(e.target.value);
                                        }}

                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div class="form-group col-md-6">
                                    <label class="form-label-emp" for="subject">Status</label>
                                    <select type="text" class="form-control formInput" id="InsCom" name="InsCom" placeholder="Insurance Company Name" tabindex="2" 
                                        value={status}
                                        onChange={(e) => {
                                          setStatus(e.target.value);
                                        }}

                                    >
                                      <option >CHOOSE</option>  
                                      <option value="repair">repair</option>
                                      <option value="Maintenance">Maintenance </option>
                                      <option value="replace">replace</option>
                                      </select>
                                </div>
                            </div>





                            <div className="row mt-3 mb-4">
                                <div className="col py-3 text-center">
                                    <button type="submit" className="btn btn-ok" >
                                        Update
                                    </button>
                                </div>
                                <div className="col py-3 text-center">
                                    <button type="reset" className="btn btn-reset" onClick={equipment.onHide}>
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

export default UpdateEquipmentModal