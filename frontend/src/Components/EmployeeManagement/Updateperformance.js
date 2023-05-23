import { React, useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";


function UpdatePerformanceModal(performance) {

    console.log("update modal dataaaaaa",performance);

    useEffect(() => {
        try {
            

            setEmployeeId(performance.data.employeeId);
            setName(performance.data.name);
            setPosition(performance.data.position);
            setAttendanceCount(performance.data.attendanceCount);
            setOtCount(performance.data.otCount);
            
            
            
     } catch {
            
        }
    }, [performance.data]);

    const [employeeId,setEmployeeId] = useState("");
    const [name,setName] = useState("");
    const [position,setPosition] = useState("");
    const [attendanceCount,setAttendanceCount] = useState("");
    const [otCount,setOtCount] = useState("");
    
    

    // console.log("came dataaaaa", uptVehicle)


   function sendData (e){
    e.preventDefault();

            const newPerformance= {
                employeeId,
                name,
                position,
                attendanceCount,
                otCount
              }

           

            axios.put(`http://localhost:8070/performance/update/${performance.data._id}`, newPerformance)

                .then(() => {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Employee Performance Details Added Succesfully',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    }
                    ).then(() => {
                        window.location.replace("/performance/Viewperformance");

                    })
                    window.location.replace("/performance/Viewperformance");

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
                <Modal.Title>Employee ID: {performance.data.employeeId}</Modal.Title>
            </Modal.Header>

            <Modal.Body className="px-4">

                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form id="contact-form" class="form" action="#" method="POST" role="form" onSubmit={sendData}>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                    <h3 className="topic-V text-left mt-1 mb-4">Employee Performance Details</h3>
                                </div>
                            </div>
                            <div className="row">


                                <div class="form-group ">

                                    <div class=" row ml-1">
                                        <div class="col-6">
                                            <label class="form-label-V mt-2" for="RegNo">Employee ID</label>
                                        </div>
                                        <div class="col-5">
                                            <input
                                                disabled
                                                id="regNo"
                                                type="text"
                                                className="form-control "
                                                placeholder="ABC-XXXX"
                                                value={employeeId}

                                                onChange={(e) => {
                                                    setEmployeeId(e)
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div class="form-group col-sm">
                                    <label class="form-label-emp" for="name">Name</label>
                                    <input type="text" class="form-control formInput" id="name" name="name" placeholder="enter the name with initials" tabindex="1" required

                                        value={name}

                                        onChange={(e) => {
                                            setName(e.target.value); // assign value
                                        }}


                                    />

                                </div>

                     </div>
                            


                         


                            <div class="form-group col-sm">
                                    <label class="form-label-emp" for="position">Job Tiltle</label>
                                    <select
                                        value={position}
                                        id="position"
                                        className="form-control "
                                        onChange={(e) => {
                                            setPosition(e.target.value); // assign value
                                        }}
                                    >
                                        <option id="single">Manager</option>
                                        <option id="married">Assistant Manager</option>
                                        <option id="married">Quality Assurance Executive</option>
                                        <option id="married">Maintenanace Technician</option>
                                        
                                    </select>
                                </div>

                                <div className="row">
                                <div class="form-group col-md-6">
                                    <label class="form-label-emp" for="subject">Attendance Count</label>
                                    <input required type="text" class="form-control formInput" id="AttendanceCount" name="AttendanceCount"  tabindex="2" 
                                        value={attendanceCount}
                                        onChange={(e) => {
                                            setAttendanceCount(e.target.value);
                                        }}

                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div class="form-group col-md-6">
                                    <label class="form-label-emp" for="otcount">OT Count</label>
                                    <input required type="text" class="form-control formInput" id="otcount" name="otcount" placeholder="Insurance Company Name" tabindex="2" 
                                        value={otCount }
                                        onChange={(e) => {
                                            setOtCount(e.target.value);
                                        }}

                                    />
                                </div>
                            </div>





                            <div className="row mt-3 mb-4">
                                <div className="col py-3 text-center">
                                    <button type="submit" className="btn btn-ok" >
                                        Update
                                    </button>
                                </div>
                                <div className="col py-3 text-center">
                                    <button type="reset" className="btn btn-reset" onClick={performance.onHide}>
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

export default UpdatePerformanceModal;