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


    useEffect(() => {

        setNet_weight((weight ? Number(weight) : 0) - ((moisture_content? Number(moisture_content) : 0) + (ripe_tea_leaves ? Number(ripe_tea_leaves) : 0)));
        console.log("performance", weight);

    }, [weight, moisture_content, ripe_tea_leaves]);
      


    return(
       
        <div class="page-component-body p-3 " style={{backgroundColor: "#E6F2D0"}}>
           <div class="container input-main-form-emp pt-3 border border-success" style={{backgroundColor: "white"}}>
                           <div class="container border-top " >
                               <div class="row">
                                   <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center text-light " style={{backgroundColor: "#658A4E"}}>
                                       <h3 className="topic-V text-left mt-4 mb-4 ">Tea Leaves Quantity Per Day</h3>
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


                          <div class="form mb-2">
                              <label for="totalamount">Net Weight</label>
                              <input type="text" class="form-control" id="net_weight" disabled
                              value={net_weight}/>
  
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