import React,{useEffect,useState} from 'react';
import axios from 'axios';
import "../../NavigateBar.css";
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineBars } from 'react-icons/ai';
import Swal from 'sweetalert2'





function Addmonitor(){ 

  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const handleSidebarToggle = () => { setIsSidebarOpen(!isSidebarOpen); };

  const [monitorid, setMonitorid] = useState("");
  const [runtime, setRuntime] = useState(null);
  const [productiontime, setproductiontime] = useState(null);
  const [availability, setavailability] = useState(0);
  const [goodcount, setgoodcount] = useState(null);
  const [totalcount, settotalcount] = useState(null);
  const [quality, setquality] = useState(0);
  const [idealcycle, setidealcycle] = useState("");
  const [count, setcount] = useState("");
  const [rtime, setrtime] = useState("");
  const [performance, setperformance] = useState(0);
  const [availability1, setavailability1] = useState(null);
  const [performance1, setperformance1] = useState(null);
  const [quality1, setquality1] = useState(null);
  const [oee, setoee] = useState(0);
  const [status, setStatus] = useState("");

  

  function sendData(e){
      e.preventDefault();
    
      const newEquipment= {
         
        monitorid,
        runtime,
        productiontime,
        availability,
        goodcount,
        totalcount,
        quality,
        idealcycle,
        count,
        rtime,
        performance,
        availability1,
        performance1,
        quality1,
        oee,
        status
        
      }
      
  console.log(newEquipment)
      axios.post("http://localhost:8070/monitor/add",newEquipment).then(()=>{
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
            window.location.replace("/viewmonitor");

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
     
    
     //calculation availability
  }
  useEffect(() => {
    setavailability(((runtime ? Number(runtime) : 0) / (productiontime ? Number(productiontime) : 0)) * 100);
    console.log("availability", availability);

    //calculation quality

    setquality(((goodcount ? Number(goodcount) : 0) / (totalcount ? Number(totalcount) : 0)) * 100);
    console.log("quality", quality);

    //calculation preformance

    setperformance(((idealcycle ? Number(idealcycle) : 0) * (count? Number(count) : 0) /(rtime ? Number(rtime) : 0)) * 100);
    console.log("performance", performance);

    //calculaton oee as a percentage 

    const product = (availability1 ? Number(availability1) : 0) * (performance1 ? Number(performance1): 0) * (quality1 ? Number(quality1) : 0);
    const oeePercentage = product /10000;
    setoee(oeePercentage);
    console.log("oee", oeePercentage);
  }, [runtime, productiontime,goodcount,totalcount,idealcycle,count,rtime,availability1,performance1,quality1]);
     
  
  
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
                                <h3 className="topic text-center mt-3 mb-3 "  >Add Equipment Details</h3>
                            </div>
                        </div>
            
                        <form class="form" onSubmit={sendData}>
                            <div class="form pt-5 mb-2">
                                    <label for="expenseid">Monitor ID</label>
                                    <input type="text" class="form-control formInput" id="expenseid"  placeholder="Enter Monitor ID"
                                    onChange={(e)=>{
                                        setMonitorid(e.target.value);
                                    }}/>
                                
                            </div>

                            <div class="form mb-2">
                                <label for="totalamount"> Runt Time</label>
                                <input type="text" class="form-control formInput" id="production" placeholder="Enter Equipment Name"
                                onChange={(e)=>{
                                    setRuntime(e.target.value);
                                }}/>

                            </div>

                            <div class="form mb-2">
                                <label for="totalamount"> Planned Production Time</label>
                                <input type="text" class="form-control formInput" id="production" placeholder=""
                                onChange={(e)=>{
                                    setproductiontime(e.target.value);
                                }}/>

                            </div>
                            
                            <div class="form mb-2">
                                <label for="totalamount">Result For Availability</label>
                                <input type="text" class="form-control formInput" id="production" placeholder="" disabled
                                
                                 value={availability}/>

                            </div>


                    
                            <div class="form mb-2">
                                <label for="totalamount"> Good Count</label>
                                <input type="text" class="form-control formInput" id="production" placeholder=""
                                onChange={(e)=>{
                                    setgoodcount(e.target.value);
                                }}/>

                            </div>
                            <div class="form mb-2">
                                <label for="totalamount"> Total Count</label>
                                <input type="text" class="form-control formInput" id="production" placeholder=""
                                onChange={(e)=>{
                                    settotalcount(e.target.value);
                                }}/>

                            </div>
                            <div class="form mb-2">
                                <label for="totalamount"> Result For Quality</label>
                                <input type="text" class="form-control formInput" id="production" placeholder=""  disabled
                                
                                 value={quality}/>

                            </div>

                            <div class="form mb-2">
                             <label for="totalamount">Ideal Cycle Time:</label>
                             <input type="text" class="form-control" id="idealcycle" 
                            onChange={(e)=>{
                                setidealcycle(e.target.value);
                            }}/>

                        </div>
                        <div class="form mb-2">
                            <label for="totalamount">Total Count:</label>
                            <input type="text" class="form-control" id="setcount" 
                            onChange={(e)=>{
                                setcount(e.target.value);
                            }}/>

                        </div>
                        <div class="form mb-2">
                            <label for="totalamount">Run Time:</label>
                            <input type="text" class="form-control" id="totalamount" 
                            onChange={(e)=>{
                                setrtime(e.target.value);
                            }}/>

                        </div>
                        <div class="form mb-2">
                            <label for="totalamount">Reults For Performance:</label>
                            <input type="text" class="form-control" id="totalamount" disabled
                            value={performance}/>

                          </div>
                            <div class="form-group1">
                            <label for="totalamount">Availability result:</label>
                            <input type="text" class="form-control" id="totalamount" 
                            onChange={(e)=>{
                                setavailability1(e.target.value);
                            }}/>

                        </div>
                        <div class="form-group1">
                            <label for="totalamount">Perfromanve Result:</label>
                            <input type="text" class="form-control" id="totalamount" 
                            onChange={(e)=>{
                                setperformance1(e.target.value);
                            }}/>

                        </div>
                        <div class="form-group1">
                            <label for="totalamount">Quality Result:</label>
                            <input type="text" class="form-control" id="totalamount" 
                            onChange={(e)=>{
                                setquality1(e.target.value);
                            }}/>

                        </div>
                        <div class="form-group1">
                            <label for="totalamount">Overrall Equipment Effectivness In Percentage:</label>
                            <input type="text" class="form-control" id="totalamount" disabled 
                            value={oee}/>

                        </div>
                            <div class="form mb-2">
                                <label for="totalamount"> Status of the Equipment</label> 
                                <select type="text" class="form-control" id="totalamount"
                                onChange={(e)=>{
                                    setStatus(e.target.value);
                                }} >
                                <option id="manufacturing">Choose The Status</option>
                                <option id="manufacturing"  style={{ color: 'green' }}>Good Condition</option>
                                <option id="office use" style={{ color: 'red' }}> Bad Condition</option>
                               </select>

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

    
   
                     export default Addmonitor;
    