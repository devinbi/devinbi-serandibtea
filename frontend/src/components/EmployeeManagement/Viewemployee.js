import axios from 'axios'
import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2'

import TestModal from './Viewemployee';
import { HiPencilSquare } from "react-icons/hi2";
import { HiOutlineTrash } from "react-icons/hi2";

import UpdateEmployeeModal from "./Updateemployee";
import Header from "../../Header";



function Viewemployee() {

    // const [search, setSearch] = useState("");

    const [employees, setEmployees] = useState([]);

    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    const [modalDataDelete, setModalDataDelete] = useState([]);
    const [modalDeleteConfirm, setModalDeleteConfirm] = useState(false);


    const [modalDataUpdate, setModalDataUpdate] = useState([]);
    const [modalUpdate, setModalUpdate] = useState(false);
    



    useEffect(() => {

        function getemployees() {
            axios.get("http://localhost:8070/employee/").then((res) => {


                setEmployees(res.data.reverse());

                //console.log("Data recieved");

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

        getemployees();

    }, []);

        const deleteEmployee = async (data) => {
            console.log("----------------",data._id);
            
                    // console.log("modalDataDelete.fyiff",modalDataDelete);
                        const value = axios.post(`http://localhost:8070/employee/delete/${data._id}`);
                        //console.log("deletedddd", value);
                        if (value) {
                            console.log("Value",value.data);
                            // alert("**Permenantly deleted the Vehicle Record");
                            // window.""location.replace("/viewReservation");
                            Swal.fire({
                                title: 'Success!',
                                text: 'Permenantly deleted the Vehicle Record &  added successfully !!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 2000
                            }
                            ).then(() => {
                                window.location.reload();
                            })
            
            
            
                        }
            
                }

    const openModal = (employee) => {
        setData(employee);
        handleViewOnClick();
    }


    const handleViewOnClick = () => {
        //console.log("req came for modal");
        // console.log(modalData, "data came for modalllllll");
        setModalShow(true);
    }

    const openModalDelete = (data) => {
        setModalDataDelete(data);
        setModalDeleteConfirm(true);
    }

    const openModalUpdate = (data) => {

        //console.log("request came for modal updateeeeeee", data);
        setModalDataUpdate(data);
        setModalUpdate(true);

    }


    
   

    return (

        <div className="page-component-body">
            {/* <Header></Header> */}

            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <TestModal
                    data={modalData}
                    onHide={() => setModalShow(false)}
                />
            </Modal>


            <div className="table-emp">
                <div class="row table-head mt-3">
                    <div class="col">
                        <h3 className="float-left ">Employee Details</h3>
                    </div>
                </div>

                

          <table class="table table-hover">
                    <thead class="">

                    <tr style={{backgroundColor: "#658A4E" , color:"white"}} >
                            <th class="text-center">Employee ID</th>
                            <th class="text-center">Full Name</th>
                            <th class="text-center">NIC</th>
                            <th class="text-center">Birthdate</th>
                            <th class="text-center">Gender</th>
                            <th class="text-center">Marital Status</th>
                            <th class="text-center">No of Children</th>
                            <th class="text-center">Job Title</th>
                            <th class="text-center">Joining Date</th>
                            <th class="text-center">Contact Number</th>
                            <th class="text-center">Action </th>

                           
                        </tr>

                    </thead>
                    <tbody>
                        {employees.map((employees) => {

                            return (
                                <tr>
                                     <td onClick={() => openModal(employees)} data-toggle="tooltip" data-placement="right" title="Click to view details" className="view-td" class="text-center">
                                        {employees.employeeId}
                                    </td>

                                  

                                    {/* <td class="text-center">{employees.employeeId}</td> */}
                                    <td class="text-center">{employees.name}</td>
                                    <td class="text-center">{employees.nic}</td>
                                    <td class="text-center">{employees.birthdate}</td>
                                    <td class="text-center">{employees.gender}</td>
                                    <td class="text-center">{employees.maritalStatus}</td>
                                    <td class="text-center">{employees.noOfChildren}</td>
                                    <td class="text-center">{employees.title}</td>
                                    <td class="text-center">{employees.joiningDate}</td>
                                    <td class="text-center">{employees.telNo}</td>
                                    <td class="text-center">

                                       <HiPencilSquare size="25px" color="green" onClick={() => openModalUpdate(employees)}/>
                                       
                                       <HiOutlineTrash size="25px" color="red" onClick={() => openModalDelete(employees)}/>

                                    </td>
                                </tr>
                            );
                        })}


                    </tbody>
                </table>
            </div>

           

   
        {/* modal for delete employee record */}
        <Modal show={modalDeleteConfirm} onHide={() => setModalDeleteConfirm(false)} size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
            <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Are you want to delete the employee's details ?</p>

        </Modal.Body>
        <Modal.Footer>

            <div className="row">
                <div className="col -6">
                    <button type="submit" className="btn btn-delete" onClick={() => { deleteEmployee(modalDataDelete); }}>
                        Confirm
                    </button>
                </div>
                <div className="col-6 text-right" onClick={() => setModalDeleteConfirm(false)}>
                    <button type="reset" className="btn btn-reset">
                        cancel
                    </button>
                </div>
            </div>
        </Modal.Footer> 
       </Modal>

         {/* modal for update the data of vehicle  */}
        <Modal
        show={modalUpdate}
        onHide={() => setModalUpdate(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <UpdateEmployeeModal
            data={modalDataUpdate}
            onHide={() => setModalUpdate(false)}
        />
        </Modal>

        </div>


    )
}

export default Viewemployee;
