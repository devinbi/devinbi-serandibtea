import { React, useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";



function UpdateTransferredProduct(product) {

    console.log("update modal dataaaaaa", product);

    useEffect(() => {
        try {

            setProductId(product.data.productId);
            setProductName(product.data.productName);
            setType(product.data.type);
            setQuantity(product.data.quantity);
            setWeight(product.data.weight);
            setStatus(product.data.status);
            setDate(product.data.date);

        } catch {
            window.alert("something went wrong");
        }
    }, [product.data]);

    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [type, setType] = useState("");
    const [quantity, setQuantity] = useState("");
    const [weight, setWeight] = useState("");
    const [status, setStatus] = useState("");
    const [date, setDate] = useState("");
     


   function sendData (e){
    e.preventDefault();

            const newproduct = {
                productId,
                productName,
                type,
                quantity,
                weight,
                status,
                date
            }

            axios.put(`http://localhost:8070/product/update/${product.data._id}`, newproduct)

                .then(() => {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Details Update Succesfully',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    }
                    ).then(() => {
                        window.location.replace("ViewAllTransferredProduct");

                    })
                    window.location.replace("ViewAllTransferredProduct");

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
                <Modal.Title>Product ID : {productId}</Modal.Title>
            </Modal.Header>

            <Modal.Body className="px-4 pt-4 pb-1">

                <div className="table-emp1">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <form id="contact-form" class="form" action="#" method="POST" role="form" onSubmit={sendData}>
                                <div class="col">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-uppercase headerNameFont" style={{backgroundColor: "#658A4E", color: 'white', }}>
                                        <h3 className="topic text-center mt-3 mb-3 pt-3 pb-3"  >Update Transferred Product Details</h3>
                                    </div>
                                </div>


                                <div className="col">
                                    
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-floating mb-3">
                                            <label for="VehicleBrand1">Product Name :</label>
                                            <input type="text" class="form-control" id="VehicleBrand1" name="VehicleBrand1" tabindex="1" required
                                                value={productName}
                                                onChange={(e) => {
                                                    setProductName(e.target.value);
                                                }} />
                                            
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-floating mb-3">
                                            <label for="VehicleBrand2">Type :</label>
                                            <input type="text" class="form-control" id="VehicleBrand2" name="VehicleBrand2" tabindex="1" required
                                                value={type}
                                                onChange={(e) => {
                                                    setType(e.target.value);
                                                }} />
                                            
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col">
                                            <div class="form-floating mb-3">
                                            <label for="VehicleBrand1">Quantity :</label>
                                            <input type="text" class="form-control" id="VehicleBrand1" name="VehicleBrand1" tabindex="1" required
                                                value={quantity}
                                                onChange={(e) => {
                                                    setQuantity(e.target.value);
                                                }} />
                                            
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-floating mb-3">
                                            <label for="VehicleBrand2">Weight (Grams) :</label>
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
                                                <label for="VehicleBrand1">Status :</label>
                                                    <select
                                                        value={status}
                                                        id="vehType"
                                                        className="form-control "
                                                        onChange={(e) => {
                                                            setStatus(e.target.value); // assign value
                                                        }}
                                                    >
                                                        <option>Choose</option>
                                                        <option id="car">Pending</option>
                                                        <option id="van">Approved</option>
                                                        <option id="bus">Rejected</option>
                                                    </select>
                                            
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-floating mb-3">
                                            <label for="VehicleBrand2">Date :</label>
                                            <input type="text" class="form-control" id="VehicleBrand2" name="VehicleBrand2" tabindex="1" required
                                                value={date}
                                                onChange={(e) => {
                                                    setDate(e.target.value);
                                                }} />
                                            
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
                                        <button type="reset" className="btn btn-reset" onClick={product.onHide}>
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

export default UpdateTransferredProduct;