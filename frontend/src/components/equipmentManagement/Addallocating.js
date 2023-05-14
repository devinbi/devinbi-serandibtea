import React,{useState , useEffect} from 'react';
import axios from 'axios';
import "../../NavigateBar.css";
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineBars } from 'react-icons/ai';


function AddAllocating(){ 

  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const handleSidebarToggle = () => { setIsSidebarOpen(!isSidebarOpen); };

  const [equipmentid, setEquipmentid] = useState("");
  const [department, setDepartment] = useState("");
  const [wattage, setWattage] = useState(null);
  const [hours, setHours] = useState(null);
  const [result, setResult] = useState(0);
   

  function sendData(e){
      e.preventDefault();
    
      const newAllocating = {
        equipmentid,
        department,
        wattage,
        hours,
        result
      }
      
  console.log(newAllocating)
      axios.post("http://localhost:8070/allocating/add",newAllocating).then(()=>{
          alert("Success");
          window.location.reload()
    
      }).catch((err)=>{
          alert(err);
      })
   
  }


useEffect(() => {
  setResult((wattage ? wattage : 0) * (hours ? hours : 0));
  console.log("result", result);
}, [wattage, hours]);

  

  
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
                            <a href="#">View Equipment Details</a>
                        </li>
                        <li>
                            <a href="#">Allocate Equipment</a>
                        </li>
                        <li>
                            <a href="/allocating/viewallocating">View Allocate Details</a>
                        </li>
                        <li>
                            <a href="#">Monitoring Equipment</a>
                        </li>
                        <li>
                            <a href="#">View Performance Details</a>
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
                                <h3 className="topic text-center mt-3 mb-3 "  >Tea Leaves Quantity Per Day</h3>
                            </div>
                        </div>
            
                        <form class="form" onSubmit={sendData}>
                            <div class="form pt-5 mb-2">
                                    <label for="expenseid">equipment ID :</label>
                                    <input type="text" class="form-control formInput" id="expenseid" pattern="[E][0-9]{4}" placeholder="Enter Supplier ID"
                                    onChange={(e)=>{
                                        setEquipmentid(e.target.value);
                                    }}/>
                                
                            </div>


                            <div class="form mb-2">
                                <label for="totalamount">department:</label>
                                <select
                                        type="text" 
                                        class="form-control formInput" 
                                        id="Address" 
                                        name="Address"
                                        placeholder="Employee Address"
                                        tabindex="2" 
                                        required
                                        onChange={(e)=>{
                                            setDepartment(e.target.value);// assign value
                                        }}
                                        >
                                         <option id="car">cutting</option>
                                         <option id="van">rolling</option>
                                         <option id="bus">heating</option>
                                        </select>

                            </div>

                            <div class="form mb-2">
                                <label for="totalamount"> Wattage :</label>
                                <input type="text" class="form-control formInput" id="production" placeholder="Enter Weight"
                                onChange={(e)=>{
                                    setWattage(e.target.value);
                                }}/>

                            </div>
                            
                            <div class="form mb-2">
                                <label for="totalamount"> Hours:</label> 
                                <input type="text" class="form-control" id="totalamount" placeholder="Enter Moisture Content of the Tea Leaves"
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

//     return(
//         <div class="page-component-body">
//             {/* <Header></Header> */}
//             <div class="container input-main-form-emp pt-3">
//                 <div class="container border-top">
//                     <div class="row">
//                         <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
//                             <h3 className="topic-V text-left mt-4 mb-4">Add alocation details</h3>
//                         </div>
//                     </div> 
//                     <div class="row">
//                         <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
//                             <form id="contact-form" class="form" role="form" onSubmit={sendData}>
//                                 <div class="form-group">
//                                     <label class="form-label" for="Name">equipment id </label>
//                                     <input 
//                                         type="text" 
//                                         class="form-control formInput" 
//                                         id="Name" 
//                                         name="Name" 
//                                         placeholder="Employee Name" 
//                                         tabindex="1" 
//                                         required
//                                         onChange={(e) => {
//                                             setEquipmentid(e.target.value); // assign value
//                                         }}
//                                     />
//                                 </div>
//                                 <div class="form-group">
//                                     <label class="form-label" for="Address">department </label>
//                                     <select
//                                         type="text" 
//                                         class="form-control formInput" 
//                                         id="Address" 
//                                         name="Address"
//                                         placeholder="Employee Address"
//                                         tabindex="2" 
//                                         required
//                                         onChange={(e)=>{
//                                             setDepartment(e.target.value);// assign value
//                                         }}
//                                         >
//                                          <option id="car">cutting</option>
//                                          <option id="van">rolling</option>
//                                          <option id="bus">heating</option>
//                                         </select>
//                                 </div>

//                                 <div className="row">
//                                     <div class="form-group col-md-6">
//                                         <label class="form-label" for="NIC">wattage</label>
//                                         <input 
//                                             type="text" 
//                                             class="form-control formInput" 
//                                             id="NIC" 
//                                             name="NIC"
//                                             placeholder="Employee NIC"
//                                             tabindex="3"
//                                             required
//                                             onChange={(e)=>{
//                                                 setWattage(e.target.value);//assign value
//                                             }}
//                                         />
//                                     </div>

//                                     <div class="form-group col-md-6">
//                                         <label class="form-label" for="DOB">hOURS </label>
//                                         <input 
//                                             type="text" 
//                                             class="form-control formInput" 
//                                             id="DOB" 
//                                             placeholder="Employee DOB"
//                                             tabindex="4"
//                                             required
//                                             onChange={(e)=>{
//                                                 setHours(e.target.value);
//                                             }}
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="row">
//                                     <div class="form-group col-md-6">
//                                         <label class="form-label" for="Phone">result </label>
//                                         <input 
//                                             type="text" 
//                                             class="form-control formInput" 
//                                             id="Phone" 
//                                             placeholder="Employee Contact Number"
//                                             tabindex="5"
//                                             required
//                                             value={result}
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="row mt-2 mb-3">
//                                     <div className="col py-3 text-center">
//                                         <button type="submit" className="btn btn-ok">
//                                             Add
//                                         </button>
//                                     </div>
//                                     <div className="col py-3 text-center">
//                                         <button type="reset" className="btn btn-reset">
//                                             Cancel
//                                         </button>
//                                     </div>
//                                 </div>

//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div> 

//     )
// }
                        export default AddAllocating;
  
  

