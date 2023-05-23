import React,{useState , useEffect} from 'react';
import axios from 'axios';
import "../../NavigateBar.css";
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineBars } from 'react-icons/ai';


function AddEmployee() {

    // important to slide navigatebar
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
    const handleSidebarToggle = () => { setIsSidebarOpen(!isSidebarOpen); };


  const [employeeId, setEmployeeId] = useState("");
  const [name, setName] = useState("");
  const [nic, setNic] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [noOfChildren, setnoOfChildren] = useState("");
  const [title, setTitle] = useState("");
  const [joiningDate,setJoiningDate] = useState("");
  const [telNo, setTelNo] = useState("");

  const [RegNoErr, setRegNoErr] = useState("");
  const [namNoErr, setnamErr] = useState("");



    function sendData(e){
        e.preventDefault();

        const isValid = formValidation();
        const nValid = nValidation();

        if (isValid && nValid ) {
      
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
        
    console.log(newEmployee)
        axios.post("http://localhost:8070/employee/add",newEmployee).then(()=>{
           
            window.location.reload()
      
        }).catch((err)=>{
            
        })

    }
     
    }

    const formValidation = () => {//validate function

        const RegNoErr = {}; //State
        let isValid = true;
        setRegNoErr(RegNoErr);//update error objects
        return isValid;
    
    }
    
    const nValidation = () => {//validate function
    
        const namNoErr = {}; //State
        let nValid = true;
        setnamErr(namNoErr);//update error objects
        return nValid;
    
    }
    
    const [isRegValid, setRegIsValid] = useState(false);
    const [Regmessage, setRegMessage] = useState('');
    
    const VehRegex1 = /^[E][M][0-9][0-9][0-9]$/;
    const VehRegex2 = /^[E][M][0-9][0-9][0-9]$/;
    
    const validateRegNo = (event) => {
    
        const RegNo = event.target.value;
        if (VehRegex1.test(RegNo)) {
            setRegIsValid(true);
            setRegMessage('Employee Registation Number looks good!');
        } else if (VehRegex2.test(RegNo)) {
            setRegIsValid(true);
            setRegMessage('Employee Registation Number looks good!');
    
        }
        else {
            setRegIsValid(false);
            setRegMessage('Please enter a valid Employee Registation Number !');
        }
    };
    
    const [isnValid, setnIsValid] = useState(false);
    const [nmessage, setnMessage] = useState('');
    
    // const nRegex1 = /^[0-9][0-9][0-9][0-9]$/;
    const nRegex1 = /^[0-9]{9}[V]$/;
    // const Regex2 = /^ [A-Z]$/;
    
    const validaten = (event) => {
    
        const RegN = event.target.value;
        if (nRegex1.test(RegN)) {
            setnIsValid(true);
            setnMessage('Employee Registation Number looks good!');
       
        }
        else {
            setnIsValid(false);
            setnMessage('Enter valid NIC number');
        }
    }
    

    
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
                            <a href="/AddSupplier">View All Received Tea Leaves</a>
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

            
                <div class="container-fluid">
                    <span onClick={handleSidebarToggle}> <AiOutlineBars /></span> 
                    
                </div>
            


            {/* Our Form Start */}
            <div class="page-component-body p-5 " style={{backgroundColor: "#cce7bb"}}>
                <div class="container input-main-form-emp pt-3 border border-success" style={{backgroundColor: "white"}}>
                    <div class="container border-top " >
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-uppercase  " style={{backgroundColor: "#658A4E", color: 'white', }}>
                                <h3 className="topic text-center mt-3 mb-3 "  >Employee Details</h3>
                            </div>
                        </div>
            
                        <form class="form" onSubmit={sendData}>
                            <div class="form pt-5 mb-2">
                                    <label for="expenseid">Employee ID :</label>
                                    <input type="text" class="form-control formInput" id="expenseid" placeholder="Enter employee id" required
                                    onChange={(e)=>{
                                        setEmployeeId(e.target.value);
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
                                <label for="totalamount">Name</label>
                                <input type="text" class="form-control formInput" id="runtime" required
                                onChange={(e)=>{
                                    setName(e.target.value);
                                }}/>

                            </div>
                            <div class="form mb-2">
                                <label for="totalamount">NIC</label>
                                <input type="text" class="form-control formInput" id="production" required
                                onChange={(e)=>{
                                    setNic(e.target.value);
                                    validaten(e);
                                }}/>

                            <div className={`message ${isnValid ? 'success' : 'error'}`}>
                                                        {nmessage}
                                                    </div>

                                                    {Object.keys(namNoErr).map((key) => {
                                                        // return<div style={{color :"red"}}>{RegNoErr[key]}</div>
                                                    })}
                                               
                               
                                            </div>

                            
                            <div class="form mb-2">
                                <label for="totalamount">Birthdate</label>
                                <input type="date" class="form-control" id="totalamount" required
                                onChange={(e)=>{
                                    setBirthdate(e.target.value);
                                }}/>

                            </div>
                            <div class="form mb-2">
                                <label for="totalamount">Gender</label>
                                <select type="text" class="form-control" id="totalamount" required
                                 onChange={(e)=>{
                                    setGender(e.target.value);
                                }}>

                             <option >Choose</option>  
                             <option value="male">Male</option>
                             <option value="female">Female</option>
                            </select>

                            </div>

                            <div class="form mb-2">
                                <label for="totalamount">Marital Status</label>
                                <select type="text" class="form-control" id="totalamount" required
                                 onChange={(e)=>{
                                    setMaritalStatus(e.target.value);
                                }}>

                             <option >Choose</option>  
                             <option value="single">Single</option>
                             <option value="married">Married</option>
                            </select>

                            </div>

                            <div class="form mb-2">
                                <label for="totalamount">No of Children:</label> 
                                <input type="text" class="form-control" id="totalamount" pattern="[0-9]" required
                                onChange={(e)=>{
                                    setnoOfChildren(e.target.value);
                                }}/>

                            </div>

                            <div class="form mb-2">
                                <label for="totalamount">Job Title:</label>
                                <select type="text" class="form-control" id="totalamount" required
                                 onChange={(e)=>{
                                    setTitle(e.target.value);
                                }}>

                             <option >Choose</option>  
                             <option value="manager">Manager</option>
                             <option value="asmanager">Assistant Manager</option>
                             <option value="qaexecutive">Quality Assurance Executive</option>
                             <option value="mtechnician">Maintenance Technician</option>
                            </select>

                            </div>

                            <div class="form mb-2">
                                <label for="totalamount">Joining Date:</label>
                                <input type="date" class="form-control" id="totalamount" required
                                onChange={(e)=>{
                                    setJoiningDate(e.target.value);
                                }}/>

                            </div>

                            <div class="form mb-2">
                                <label for="totalamount">Contact Number:</label>
                                <input type="text" class="form-control" id="totalamount" pattern="[0-9]{10}" required
                                onChange={(e)=>{
                                    setTelNo(e.target.value);
                                }}/>

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



export default AddEmployee;





        