import React,{useState , useEffect} from 'react';
import axios from 'axios';


function AddSupplier() {

    const [supplierid, setSupplierid] = useState("");
    const [suppliername, setSuppliername] = useState("");
    const [weight, setWeight] = useState("");
    const [moisture_content, setMoisture_content] = useState("");
    const [ripe_tea_leaves, setRipe_tea_leaves] = useState("");
    const [net_weight, setNet_weight] = useState("");



    function sendData(e){
        e.preventDefault();
      
        const newSupplier = {
        supplierid,
        suppliername,
        weight,
        moisture_content,
        ripe_tea_leaves,
        net_weight
        }
        
    console.log(newSupplier)
        axios.post("http://localhost:8070/supplier/add",newSupplier).then(()=>{
            alert("Success");
            window.location.reload()
      
        }).catch((err)=>{
            alert(err);
        })
     
    }


    // useEffect(() => {
    //     setResult((wattage ? wattage : 0) * (hours ? hours : 0));
    //     console.log("result", result);
    // }, [wattage, hours]);
      


    return(
       
        <div class="page-component-body p-3">
           <div class="container input-main-form pt-3 border border-success">
                           <div class="container border-top ">
                               <div class="row">
                                   <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center text-light " style={{backgroundColor: "#658A4E"}}>
                                       <h3 className="topic-V text-left mt-4 mb-4 ">OEE Calculation</h3>
                                   </div>
                                </div>
                    
                      <form class="form" onSubmit={sendData}>
                      <div class="form pt-5 mb-2">
                              <label for="expenseid">Supplier ID :</label>
                              <input type="text" class="form-control formInput" id="expenseid" pattern="[S][0-9]{4}" placeholder="Enter expense id"
                              onChange={(e)=>{
                                setSupplierid(e.target.value);
                              }}/>
                          
                          </div>
  
  
                          <div class="form mb-2">
                              <label for="totalamount">Supplier Name</label>
                              <input type="text" class="form-control formInput" id="runtime" 
                              onChange={(e)=>{
                                setSuppliername(e.target.value);
                              }}/>
  
                          </div>
                          <div class="form mb-2">
                              <label for="totalamount">Weight</label>
                              <input type="text" class="form-control formInput" id="production" 
                              onChange={(e)=>{
                                setWeight(e.target.value);
                              }}/>
  
                          </div>
                          {/* <div class="form mb-2">
                              <label for="totalamount">Result For Availability:</label>
                              <input type="text" class="form-control" id="availabilty" disabled
                              value={availability}
                              />
  
                          </div> */}
                          <div class="form mb-2">
                              <label for="totalamount">Moisture Content of the Tea Leaves</label>
                              <input type="text" class="form-control" id="totalamount" 
                              onChange={(e)=>{
                                setMoisture_content(e.target.value);
                              }}/>
  
                          </div>
                          <div class="form mb-2">
                              <label for="totalamount">Ripe Tea Leaves</label>
                              <input type="text" class="form-control" id="totalamount" 
                              onChange={(e)=>{
                                setRipe_tea_leaves(e.target.value);
                              }}/>
  
                          </div>
                          {/* <div class="form mb-2">
                              <label for="totalamount">Result For Quality:</label>
                              <input type="text" class="form-control" id="quality" disabled
                              value={quality}/>
  
                          </div> */}
                          <div class="form mb-2">
                              <label for="totalamount">Net Weight</label>
                              <input type="text" class="form-control" id="idealcycle" 
                              onChange={(e)=>{
                                setNet_weight(e.target.value);
                              }}/>
  
                          </div>
                          
  
                          
                     <div className="col py-3 text-center">
                      <button  type="submit" class="btn btn-info btn-lg" >Submit</button>
                      </div>
                      
                      </form>
                  </div>
                  </div>
                  </div>
              
     )



}

export default AddSupplier;