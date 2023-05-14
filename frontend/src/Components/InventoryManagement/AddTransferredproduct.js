// import React,{useState , useEffect} from 'react';
// import axios from 'axios';
// import "../../NavigateBar.css";
// import { FiLogOut } from 'react-icons/fi';
// import { AiOutlineBars } from 'react-icons/ai';


// function AddTransferredproduct() {

//     // important to slide navigatebar
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
//     const handleSidebarToggle = () => { setIsSidebarOpen(!isSidebarOpen); };


//     const [productId, setProductId] = useState("");
//     const [productName, setProductName] = useState("");
//     const [type, setType] = useState("");
//     const [quantity, setQuantity] = useState("");
//     const [weight, setWeight] = useState("");
//     const [status, setStatus] = useState("");
//     const [date, setDate] = useState("");


//     function sendData(e){
//         e.preventDefault();
      
//         const newAddTransferredproduct = {
//             productId,
//             productName,
//             type,
//             quantity,
//             weight,
//             status,
//             date
//         }

//         console.log(newAddTransferredproduct)

//         axios.post("http://localhost:8070/product/add",newAddTransferredproduct).then(()=>{
//             alert("Success");
//             window.location.reload()
      
//         }).catch((err)=>{
//             alert(err);
//         })
     
//     }


//     // useEffect(() => {

//     //     setNet_weight((weight ? Number(weight) : 0) - ((moisture_content? Number(moisture_content) : 0) + (ripe_tea_leaves ? Number(ripe_tea_leaves) : 0)));
//     //     console.log("performance", weight);

//     // }, [weight, moisture_content, ripe_tea_leaves]);
      


//     return(

//     <div class="wrapper">
        
//         <nav id="sidebar" className={isSidebarOpen ? "active" : ""}>
//             <div class="sidebar-header">
//                 <h3></h3>
//                 <div class="logo">
                
//                     <img src="/images/logo1.png" alt="logo"/>
                
//                 </div>
//             </div>

//             <ul class="list-unstyled components">
//                 {/* <p>SIDE NAVIGATE BAR</p> */}
//                 <li >
//                     <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Inventory Management</a>
//                     <ul class="collapse list-unstyled" id="homeSubmenu">
//                         <li>
//                             <a href="/AddSupplier">Add Tea Leaves Quantity</a>
//                         </li>
//                         <li>
//                             <a href="/ViewAllReceivedTeaLeaves">View All Received Tea Leaves</a>
//                         </li>
//                         <li>
//                             <a href="/AddTransferredproduct">Add Transferred product</a>
//                         </li>
//                         <li>
//                             <a href="#">View Total product</a>
//                         </li>
//                         <li>
//                             <a href="#">View Rejected Product</a>
//                         </li>
//                     </ul>
//                 </li>
                
//                 <li>
//                     <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Equipment Management</a>
//                     <ul class="collapse list-unstyled" id="pageSubmenu">
//                         <li>
//                             <a href="/addequipment">Add Equipment Details</a>
//                         </li>
//                         <li>
//                             <a href="#">View Equipment Details</a>
//                         </li>
//                         <li>
//                             <a href="#">Allocate Equipment</a>
//                         </li>
//                         <li>
//                             <a href="/allocating/viewallocating">View Allocate Details</a>
//                         </li>
//                         <li>
//                             <a href="#">Monitoring Equipment</a>
//                         </li>
//                         <li>
//                             <a href="#">View Performance Details</a>
//                         </li>

//                     </ul>
//                 </li>
//                 <li>
//                     <a href="#pageSubmenu1" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Employee Management</a>
//                     <ul class="collapse list-unstyled" id="pageSubmenu1">
//                         <li>
//                             <a href="#">Add Employees</a>
//                         </li>
//                         <li>
//                             <a href="#">View Employees</a>
//                         </li>
//                         <li>
//                             <a href="#">Add Performance</a>
//                         </li>
//                         <li>
//                             <a href="#">View Performance</a>
//                         </li>
//                         <li>
//                             <a href="#">High Performance list</a>
//                         </li>
//                         <li>
//                             <a href="#">Resigned Employees</a>
//                         </li>

//                     </ul>
//                 </li>
//                 <li>
//                     <a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Equipment Management</a>
//                     <ul class="collapse list-unstyled" id="pageSubmenu2">
//                         <li>
//                             <a href="#">Add Equipment Details</a>
//                         </li>
//                         <li>
//                             <a href="#">View Equipment Details</a>
//                         </li>
//                         <li>
//                             <a href="#">Allocate Equipment</a>
//                         </li>
//                         <li>
//                             <a href="#">View Allocate Details</a>
//                         </li>
//                         <li>
//                             <a href="#">Monitoring Equipment</a>
//                         </li>
//                         <li>
//                             <a href="#">View Performance Details</a>
//                         </li>

//                     </ul>
//                 </li>
//             </ul>
            
//             <div class="btn-logout" >
//             <button class="logout-button"><FiLogOut size="30px" color="black"/>Logout</button>
//             </div>

//         </nav>

        
       
        
//         <div id="content">

        
        
//                 <div class="see-more-icon">
//                         <span onClick={handleSidebarToggle}> <AiOutlineBars /></span> 
//                 </div>
        
//             {/* Our Form Start */}
//             <div class="page-component-body p-5" style={{backgroundColor: "#cce7bb"}}  >
//                 <div class="container input-main-form-emp pt-3 border border-success" style={{backgroundColor: "white"}}>
//                     <div class="container border-top " >
//                         <div class="row">
//                             <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-uppercase headerNameFont " style={{backgroundColor: "#658A4E", color: 'white', }}>
//                                 <h3 className="topic text-center mt-3 mb-3 ">Transferred Product Details Per Day</h3>
//                             </div>
//                         </div>
            
//                         <form class="form" onSubmit={sendData}>
//                             <div class="form pt-5 mb-3">
//                                     <label for="expenseid">Product ID :</label>
//                                     <input type="text" class="form-control formInput" id="expenseid" pattern="[P][0-9]{4}" placeholder="Enter Product ID"
//                                     onChange={(e)=>{
//                                         setProductId(e.target.value);
//                                     }}/>
                                
//                             </div>


//                             <div class="form mb-3">
//                                 <label for="totalamount">Product Name :</label>
//                                 <input type="text" class="form-control formInput" id="runtime" placeholder="Enter Product Name"
//                                 onChange={(e)=>{
//                                     setProductName(e.target.value);
//                                 }}/>

//                             </div>
//                             <div class="form mb-3">
//                                 <label for="totalamount">Type :</label>
//                                 <input type="text" class="form-control formInput" id="production" placeholder="Enter Type"
//                                 onChange={(e)=>{
//                                     setType(e.target.value);
//                                 }}/>

//                             </div>
                            
//                             <div class="form mb-3">
//                                 <label for="totalamount">Quantity of the Product :</label>
//                                 <input type="text" class="form-control formInput" id="totalamount" placeholder="Enter Quantity of the Product"
//                                 onChange={(e)=>{
//                                     setQuantity(e.target.value);
//                                 }}/>

//                             </div>
//                             <div class="form mb-3">
//                                 <label for="totalamount">Weight : ( In Gram )</label>
//                                 <input type="text" class="form-control formInput" id="totalamount" placeholder="Enter Weight"
//                                 onChange={(e)=>{
//                                     setWeight(e.target.value);
//                                 }}/>

//                             </div>
//                             {/* <div class="form mb-3">
//                                 <label for="totalamount">Status</label>
//                                 <input type="text" class="form-control formInput" id="totalamount" placeholder="Enter Status"
//                                 onChange={(e)=>{
//                                     setStatus(e.target.value);
//                                 }}/>

//                             </div> */}



//                             <div class="form mb-3">
//                                 <label for="totalamount">Status :</label>
//                                 <select type="text" class="form-control" id="totalamount" placeholder="Enter Status"
//                                 onChange={(e)=>{
//                                     setStatus(e.target.value);
//                                 }}>

//                                     <option>Choose</option>
//                                     <option value="Pending">Pending</option>
//                                     <option value="Approved">Approved</option>
//                                     <option value="Rejected">Rejected</option>
//                                 </select>
//                             </div>





//                             <div class="form mb-3">
//                                 <label for="totalamount">Date :</label>
//                                 <input type="text" class="form-control formInput" id="totalamount" placeholder="Enter Date"
//                                 onChange={(e)=>{
//                                     setDate(e.target.value);
//                                 }}/>

//                             </div>


                            
                            
//                             <div className="col py-3 text-center">
//                             <button  type="submit" class="btn-ok1" >Submit</button>
//                             </div>
                        
//                         </form>
//                     </div>
//                 </div>
//             </div>

//         </div>


            

      
//     </div>
       
        
              
//     )

// }



// export default AddTransferredproduct;





        