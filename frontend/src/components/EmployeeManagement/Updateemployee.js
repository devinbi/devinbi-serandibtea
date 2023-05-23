import { React, useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";






function UpdateEmployeeModal(employee) {

    console.log("update modal dataaaaaa", employee);

    useEffect(() => {
        try {
            

            setEmployeeId(employee.data.employeeId);
            setName(employee.data.name);
            setNic(employee.data.nic);
            setBirthdate(employee.data.birthdate);
            setGender(employee.data.gender);
            setMaritalStatus(employee.data.maritalStatus);
            setnoOfChildren(employee.data.noOfChildren);
            setTitle(employee.data.title);
            setJoiningDate(employee.data.joiningDate);
            setTelNo(employee.data.telNo);
            
            
     } catch {
            window.alert("something went wrong");
        }
    }, [employee.data]);

    const [employeeId,setEmployeeId] = useState("");
    const [name,setName] = useState("");
    const [nic,setNic] = useState("");
    const [birthdate,setBirthdate] = useState("");
    const [gender, setGender] = useState("");
    const [maritalStatus,setMaritalStatus] = useState("");
    const [noOfChildren,setnoOfChildren] = useState("");
    const [title,setTitle] = useState("");
    const [joiningDate,setJoiningDate] = useState("");
    const [telNo,setTelNo] = useState("");

    // console.log("came dataaaaa", uptVehicle)


   function sendData (e){
    e.preventDefault();

            const newEmployee = {
              employeeId,
              name,
              nic,
              birthdate,
              gender,
              maritalStatus,
              noOfChildren,
              title,
              joiningDate,
              telNo

              }

           

            axios.put(`http://localhost:8070/employee/update/${employee.data._id}`, newEmployee)

                .then(() => {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Employee Details Added Succesfully',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    }
                    ).then(() => {
                        window.location.replace("/employee/Viewemployee");

                    })
                    window.location.replace("/employee/Viewemployee");

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
                <Modal.Title>Employee ID: {employee.data.employeeId}</Modal.Title>
            </Modal.Header>

            <Modal.Body className="px-4">

                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form id="contact-form" class="form" action="#" method="POST" role="form" onSubmit={sendData}>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                    <h3 className="topic-V text-left mt-1 mb-4">Employee Details</h3>
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

                                <div class="form-group col-sm">
                                    <label class="form-label-emp" for="email">NIC</label>
                                    <input type="text" class="form-control formInput" id="nic" name="nic" placeholder=" enter email" tabindex="2" required

                                        value={nic}
                                        onChange={(e) => {
                                            setNic(e.target.value); // assign value
                                        }}

                                    />
                                </div>

                                <div class="form-group col-sm">
                                    <label class="form-label-emp" for="birthday">Birthdate</label>
                                    <input type="text" class="form-control formInput" id="birthday" name="birthday"  tabindex="2" required

                                        value={birthdate}
                                        onChange={(e) => {
                                            setBirthdate(e.target.value); // assign value
                                        }}

                                    />
                                </div>

                               

                                <div class="form-group col-sm">
                                    <label class="form-label-emp" for="gender">Gender</label>
                                    <select
                                        value={gender}
                                        id="gender"
                                        className="form-control "
                                        onChange={(e) => {
                                          setGender(e.target.value); // assign value
                                        }}
                                    >
                                        <option id="male">Male</option>
                                        <option id="femaled">Female</option>
                                        
                                    </select>
                                </div>
                                
                            </div>
                            


                            <hr></hr>


                            <div class="form-group col-sm">
                                    <label class="form-label-emp" for="status">Marital Status</label>
                                    <select
                                        value={maritalStatus}
                                        id="status"
                                        className="form-control "
                                        onChange={(e) => {
                                            setMaritalStatus(e.target.value); // assign value
                                        }}
                                    >
                                        <option id="single">Single</option>
                                        <option id="married">Married</option>
                                        
                                    </select>
                                </div>

                            <div className="row">
                                <div class="form-group col-md-6">
                                    <label class="form-label-emp" for="noOfChildren">No of Children</label>
                                    <input required type="text" class="form-control formInput" id="noOfChildren" name="noOfChildren" placeholder="Number of Children" tabindex="2" 
                                        value={noOfChildren}
                                        onChange={(e) => {
                                            setnoOfChildren(e.target.value);
                                        }}

                                    />
                                </div>
                            </div>

                            <div class="form-group col-sm">
                                    <label class="form-label-emp" for="title">Job Tiltle</label>
                                    <select
                                        value={title}
                                        id="title"
                                        className="form-control "
                                        onChange={(e) => {
                                            setTitle(e.target.value); // assign value
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
                                    <label class="form-label-emp" for="subject">Joining Date</label>
                                    <input required type="text" class="form-control formInput" id="joiningdate" name="joiningdate"  tabindex="2" 
                                        value={joiningDate}
                                        onChange={(e) => {
                                            setJoiningDate(e.target.value);
                                        }}

                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div class="form-group col-md-6">
                                    <label class="form-label-emp" for="contactnumber">Contact Number</label>
                                    <input required type="text" class="form-control formInput" id="contactnumber" name="contactnumber" placeholder="Insurance Company Name" tabindex="2" 
                                        value={telNo }
                                        onChange={(e) => {
                                            setTelNo(e.target.value);
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
                                    <button type="reset" className="btn btn-reset" onClick={employee.onHide}>
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

export default UpdateEmployeeModal;