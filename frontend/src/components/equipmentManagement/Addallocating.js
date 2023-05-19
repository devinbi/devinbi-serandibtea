import React,{useState , useEffect} from 'react';
import axios from 'axios';
import "../../NavigateBar.css";
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineBars } from 'react-icons/ai';
import Swal from 'sweetalert2'


function AddAllocating(){ 

  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const handleSidebarToggle = () => { setIsSidebarOpen(!isSidebarOpen); };

  const [equipmentid, setEquipmentid] = useState("");
  const [department, setDepartment] = useState("");
  const [wattage, setWattage] = useState(null);
  const [hours, setHours] = useState(null);
  const [result, setResult] = useState(0);



  const [RegNoErr, setRegNoErr] = useState("");
  
   

  function sendData(e){
      e.preventDefault();


      const isValid = formValidation();
     




      if (isValid) {


    
      const newAllocating = {
        equipmentid,
        department,
        wattage,
        hours,
        result
      }
      
  console.log(newAllocating)
      axios.post("http://localhost:8070/allocating/add",newAllocating).then(()=>{
        //   alert("Success");
        //   window.location.reload()
               
            Swal.fire({
                title: 'Success!',
                text: 'Vehicle Details Added Succesfully',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000
            }
            ).then(() => {
                window.location.replace("/allocating/viewallocating");

            })



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

  
  }

  useEffect(() => {
    setResult((wattage ? wattage : 0) * (hours ? hours : 0));
    console.log("result", result);
  }, [wattage, hours]);
  

  const formValidation = () => {//validate function

    const RegNoErr = {}; //State
    let isValid = true; 

    setRegNoErr(RegNoErr);//update error objects
    return isValid;

}


    const [isRegValid, setRegIsValid] = useState(false);
    const [Regmessage, setRegMessage] = useState('');

    const VehRegex1 = /^[E][0-9][0-9][0-9]$/;
    const VehRegex2 = /^[E][0-9][0-9][0-9]$/;

    const validateRegNo = (event) => {

        const RegNo = event.target.value;
        if (VehRegex1.test(RegNo)) {
            setRegIsValid(true);
            setRegMessage('Vehicle Registation Number looks good!');
        } else if (VehRegex2.test(RegNo)) {
            setRegIsValid(true);
            setRegMessage('Vehicle Registation Number looks good!');

        }
        else {
            setRegIsValid(false);
            setRegMessage('Please enter a valid Vehicle Registation Number !');
        }
    };


return(

   
    <div class="wrapper">
        
        <nav id="sidebar" className={isSidebarOpen ? "active" : ""}>
            <div class="sidebar-header">
                <h3></h3>
                <div class="logo">
                {/* <img src={require('./images/logo1.png')} alt="logo" /> */}
                <img src="/images/logo1.png" alt="logo"/>
                
                </div>
            </div>

            <ul class="list-unstyled components">
                {/* <p>SIDE NAVIGATE BAR</p> */}
                <li >
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Inventory Management</a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="/AddSupplier">Add Tea Leaves Quantity</a>
                        </li>
                        <li>
                            <a href="/ViewAllReceivedTeaLeaves">View All Received Tea Leaves</a>
                        </li>
                        <li>
                            <a href="/AddTransferredproduct">Add Transferred product</a>
                        </li>
                        <li>
                            <a href="#">View Total product</a>
                        </li>
                        <li>
                            <a href="#">View Rejected Product</a>
                        </li>
                    </ul>
                </li>
                
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Equipment Management</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="/addequipment">Add Equipment Details</a>
                        </li>
                        <li>
                            <a href="/equipment/viewequipment">View Equipment Details</a>
                        </li>
                        <li>
                            <a href="/addallocating">Allocate Equipment</a>
                        </li>
                        <li>
                            <a href="/allocating/viewallocating">View Allocate Details</a>
                        </li>
                        <li>
                            <a href="/addmonitor">Monitoring Equipment</a>
                        </li>
                        <li>
                            <a href="/viewmonitor">View Performance Details</a>
                        </li>
                        <li>
                            <a href="/reporte">Equipment Detail Report</a>
                        </li>

                    </ul>
                </li>
                <li>
                    <a href="#pageSubmenu1" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Employee Management</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu1">
                        <li>
                            <a href="#">Add Employees</a>
                        </li>
                        <li>
                            <a href="#">View Employees</a>
                        </li>
                        <li>
                            <a href="#">Add Performance</a>
                        </li>
                        <li>
                            <a href="#">View Performance</a>
                        </li>
                        <li>
                            <a href="#">High Performance list</a>
                        </li>
                        <li>
                            <a href="#">Resigned Employees</a>
                        </li>

                    </ul>
                </li>
                <li>
                    <a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle ">Equipment Management</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu2">
                        <li>
                            <a href="#">Add Equipment Details</a>
                        </li>
                        <li>
                            <a href="#">View Equipment Details</a>
                        </li>
                        <li>
                            <a href="#">Allocate Equipment</a>
                        </li>
                        <li>
                            <a href="#">View Allocate Details</a>
                        </li>
                        <li>
                            <a href="#">Monitoring Equipment</a>
                        </li>
                        <li>
                            <a href="#">View Performance Details</a>
                        </li>

                    </ul>
                </li>
            </ul>
            
            
            <button class="logout-button"><FiLogOut />Logout</button>


        </nav>

        
        <div id="content">

            
                <div class="see-more-icon">
                        <span onClick={handleSidebarToggle}> <AiOutlineBars /></span> 
                </div>
            


            {/* Our Form Start */}
            <div class="page-component-body p-5 " style={{backgroundColor: "#cce7bb"}}>
                <div class="container input-main-form-emp pt-3 border border-success" style={{backgroundColor: "white"}}>
                    <div class="container border-top " >
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-uppercase headerNameFont" style={{backgroundColor: "#658A4E", color: 'white', }}>
                                <h3 className="topic text-center mt-3 mb-3 "  >Equipment Allocation</h3>
                            </div>
                        </div>
            
                        <form class="form" onSubmit={sendData}>
                            <div class="form pt-5 mb-2">
                                    <label for="expenseid">equipment ID :</label>
                                    <input type="text" class="form-control formInput" id="expenseid" placeholder="Enter Supplier ID"
                                    onChange={(e)=>{
                                        setEquipmentid(e.target.value);
                                        validateRegNo(e);
                                    }}/>


                                                    <div className={`message ${isRegValid ? 'success' : 'error'}`}>
                                                        {Regmessage}
                                                    </div>




                                                    {Object.keys(RegNoErr).map((key) => {
                                                        // return<div style={{color :"red"}}>{RegNoErr[key]}</div>
                                                    })}
                                                
                                
                                            </div>


                            <div class="form mb-2">
                                <label for="totalamount">department:</label>
                                <select
                                        type="text" 
                                        class="form-control formInput" 
                                        id="Address" 
                                        name="Address"
                                        
                                        tabindex="2" 
                                        required
                                        onChange={(e)=>{
                                            setDepartment(e.target.value);// assign value
                                        }}
                                        >
                                         <option id="car">choose</option>
                                         <option id="car">cutting</option>
                                         <option id="van">rolling</option>
                                         <option id="bus">heating</option>
                                        </select>

                            </div>

                            <div class="form mb-2">
                                <label for="totalamount">Equipment Wattage in watts</label>
                                <input type="number" class="form-control formInput" id="production" placeholder="Enter number of watts" required 
                                onChange={(e)=>{
                                    setWattage(e.target.value);
                                }}/>

                            </div>
                            
                            <div class="form mb-2">
                                <label for="totalamount"> Hours</label> 
                                <input type="number" class="form-control" id="totalamount" placeholder="Enter number of hours " required
                                onChange={(e)=>{
                                    setHours(e.target.value);
                                }}/>

                            </div>

                            <div class="form mb-2">
                                <label for="totalamount">result:</label>
                                <input type="text" class="form-control" id="net_weight" disabled
                                value={result}/>

                            </div>
                            
                            <div className="col py-3 text-center">
                            <button  type="submit" class="btn-ok1" >Submit</button>
                            </div>
                        
                        </form>
                    </div>
                </div>
            </div>


            

            
        </div>

    </div>
       
        
              
    )

}


                        export default AddAllocating;
  
  

