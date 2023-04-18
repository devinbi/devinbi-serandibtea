import React,{useState , useEffect} from 'react';
import axios from 'axios';


function AddEmployee (){ 


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
   

  function sendData(e){
      e.preventDefault();
    
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
          alert("Success");
          window.location.reload()
    
      }).catch((err)=>{
          alert(err);
      })
   
  }

   return(
       
        <div className="container">
                  <title Add employee />
                    <form onSubmit={sendData}>
                    <div class="form-group">
                            <label for="employeeid">Employee ID :</label>
                            <input type="text" class="form-control" id="employeeid" pattern="[E][0-9]{4}" placeholder="Enter employee id"
                            onChange={(e)=>{
                                setEmployeeId(e.target.value);
                            }}/>
                        
                        </div>

                        <div class="form-group">
                            <label for="fullname">Full Name:</label>
                            <input type="text" class="form-control" id="fullname" 
                            onChange={(e)=>{
                                setName(e.target.value);
                            }}/>

                        </div>

                        <div class="form-group">
                            <label for="nic">NIC:</label>
                            <input type="text" class="form-control" id="nic" 
                            onChange={(e)=>{
                                setNic(e.target.value);
                            }}/>

                        </div>

                        <div class="form-group">
                            <label for="birthdate">Birthdate:</label>
                            <input type="date" class="form-control" id="birthdate" 
                            onChange={(e)=>{
                                setBirthdate(e.target.value);
                            }}/>

                        </div>

                        <div class="form-group">
                            <label for="gender">Gender:</label>
                            <select name ="gender" class="form-control" id="gender" 
                            onChange={(e)=>{
                                setGender(e.target.value);
                                
                            }}>
                             <option >Choose</option>  
                             <option value="male">Male</option>
                             <option value="female">Female</option>
                            </select>
                         </div>

                         <div class="form-group">
                            <label for="maritalstatus">Marital Status:</label>
                            <select name ="maritalstatus" class="form-control" id="maritalstatus" 
                            onChange={(e)=>{
                                setMaritalStatus(e.target.value);
                                
                            }}>
                             <option >Choose</option>  
                             <option value="single">Single</option>
                             <option value="married">Married</option>
                            </select>
                         </div>

                         
                        <div class="form-group">
                            <label for="noofchildren">No of Children:</label>
                            <input type="text" class="form-control" id="noofchildren" 
                            onChange={(e)=>{
                                setnoOfChildren(e.target.value);
                            }}/>

                        </div>

                         <div class="form-group">
                            <label for="jobtitle">Job Title:</label>
                            <select name ="jobtitle" class="form-control" id="jobtitle" 
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

                         
                        <div class="form-group">
                            <label for="joiningdate">Joining Date:</label>
                            <input type="date" class="form-control" id="joiningdate" 
                            onChange={(e)=>{
                                setJoiningDate(e.target.value);
                            }}/>

                        </div>

                        
                        <div class="form-group">
                            <label for="telno">Contact Number:</label>
                            <input type="text" class="form-control" id="telno" 
                            onChange={(e)=>{
                                setTelNo(e.target.value);
                            }}/>

                        </div>

                        <button type="submit" class="btn btn-info btn-lg" >Submit</button>

                         

                        </form>
                </div>

    )
}

export default AddEmployee;
  
  

