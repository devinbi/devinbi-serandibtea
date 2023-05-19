import { React, useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";



function UpdateReceivedTeaLeaves(receivedTeaLeaves) {

    console.log("update modal dataaaaaa", receivedTeaLeaves);

    useEffect(() => {
        try {

            setSupplierId(receivedTeaLeaves.data.supplierid);
            setSuppliername(receivedTeaLeaves.data.suppliername);
            setWeight(receivedTeaLeaves.data.weight);
            setMoistureContent(receivedTeaLeaves.data.moisture_content);
            setRipeTeaLeaves(receivedTeaLeaves.data.ripe_tea_leaves);
            setNetWeight(receivedTeaLeaves.data.net_weight);

        } catch {
            window.alert("something went wrong");
        }
    }, [receivedTeaLeaves.data]);

    const [supplierid, setSupplierId] = useState("");
    const [suppliername, setSuppliername] = useState("");
    const [weight, setWeight] = useState("");
    const [moisture_content, setMoistureContent] = useState("");
    const [ripe_tea_leaves, setRipeTeaLeaves] = useState("");
    const [net_weight, setNetWeight] = useState("");
     


    function sendData (e){
        e.preventDefault();

            const neweSupplier = {
                supplierid,
                suppliername,
                weight,
                moisture_content,
                ripe_tea_leaves,
                net_weight
            }

            axios.put(`http://localhost:8070/supplier/update/${receivedTeaLeaves.data._id}`, neweSupplier)

                .then(() => {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Details Update Succesfully',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    }
                    ).then(() => {
                        window.location.replace("ViewAllReceivedTeaLeaves");

                    })
                    window.location.replace("ViewAllReceivedTeaLeaves");

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



    useEffect(() => {

        setNetWeight((weight ? Number(weight) : 0) - ((moisture_content? Number(moisture_content) : 0) + (ripe_tea_leaves ? Number(ripe_tea_leaves) : 0)));
        console.log("performance", weight);

    }, [weight, moisture_content, ripe_tea_leaves]);
  
           
  return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>Supplier ID : {supplierid}</Modal.Title>
            </Modal.Header>

            <Modal.Body className="px-4 pt-4 pb-1">

                <div className="table-emp1">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <form id="contact-form" class="form" action="#" method="POST" role="form" onSubmit={sendData}>
                                <div class="col">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-uppercase headerNameFont" style={{backgroundColor: "#658A4E", color: 'white', }}>
                                        <h3 className="topic text-center mt-3 mb-3 pt-3 pb-3"  >Update Details of received tea leaves</h3>
                                    </div>
                                </div>


                                <div className="col">
                                    
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-floating mb-3">
                                            <label for="VehicleBrand1">Supplier Name :</label>
                                            <input type="text" class="form-control" id="VehicleBrand1" name="VehicleBrand1" tabindex="1" required
                                                value={suppliername}
                                                onChange={(e) => {
                                                    setSuppliername(e.target.value);
                                                }} />
                                            
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-floating mb-3">
                                            <label for="VehicleBrand2">Weight (Kilogram) :</label>
                                            <input type="text" class="form-control" id="VehicleBrand2" name="VehicleBrand2" tabindex="1" required
                                                value={weight}
                                                onChange={(e) => {
                                                    setWeight(e.target.value);
                                                }} />
                                            
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col">
                                            <div class="form-floating mb-3">
                                            <label for="VehicleBrand1">Moisture Content of the Tea Leaves (Kilogram) :</label>
                                            <input type="text" class="form-control" id="VehicleBrand1" name="VehicleBrand1" tabindex="1" required
                                                value={moisture_content}
                                                onChange={(e) => {
                                                    setMoistureContent(e.target.value);
                                                }} />
                                            
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-floating mb-3">
                                            <label for="VehicleBrand2">Ripe Tea Leaves (Kilogram) :</label>
                                            <input type="text" class="form-control" id="VehicleBrand2" name="VehicleBrand2" tabindex="1" required
                                                value={ripe_tea_leaves}
                                                onChange={(e) => {
                                                    setRipeTeaLeaves(e.target.value);
                                                }} />
                                            
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col">
                                            <div class="form-floating mb-3">
                                            <label for="VehicleBrand2">Net Weight :</label>
                                            <input type="text" class="form-control" id="VehicleBrand2" name="VehicleBrand2" tabindex="1" disabled
                                                value={net_weight}
                                            />
                                            
                                            </div>
                                        </div>
                                    </div>
                                    
                                
                                </div>




                                <hr></hr>



                                

                                <div className="row mt-4 mb-3 ">
                                    <div className="col-6 pl-5">
                                        <button type="submit" className="btn btn-delete">
                                            Confirm
                                        </button>
                                    </div>
                                    <div className="col-6 text-right pr-5" >
                                        <button type="reset" className="btn btn-reset" onClick={receivedTeaLeaves.onHide}>
                                            Cancel
                                        </button>
                                    </div>
                                </div>



                            </form>
                        </div>
                    </div>
                </div>

            </Modal.Body>
        </div>
        
    )
                                  
                                  
}                                                            

export default UpdateReceivedTeaLeaves;