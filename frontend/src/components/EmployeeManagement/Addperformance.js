import React,{useState , useEffect} from 'react';
import axios from 'axios';


function AddPerformance (){ 

  const [employeeId, setEmployeeId] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [attendanceCount, setAttendanceCount] = useState("");
  const [otCount, setOtCount] = useState("");
  

  function sendData(e){
      e.preventDefault();
    
      const newPerformance = {
        employeeId,
        name,
        position,
        attendanceCount,
        otCount
      }
      
  console.log(newPerformance)
      axios.post("http://localhost:8070/performance/add",newPerformance).then(()=>{
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
                            <input type="text" class="form-control" id="employeeid" pattern="[E][0-9]{4}" placeholder="Enter expense id"
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
                            <label for="jobtitle">Job Title:</label>
                            <select name ="jobtitle" class="form-control" id="jobtitle" 
                            onChange={(e)=>{
                                setPosition(e.target.value);
                                
                            }}>
                             <option >Choose</option>  
                             <option value="manager">Manager</option>
                             <option value="asmanager">Assistant Manager</option>
                             <option value="qaexecutive">Quality Assurance Executive</option>
                             <option value="mtechnician">Maintenance Technician</option>
                            </select>
                         </div>

                        <div class="form-group">
                            <label for="attendancecount">Attendance Count:</label>
                            <input type="text" class="form-control" id="attendancecount" 
                            onChange={(e)=>{
                                setAttendanceCount(e.target.value);
                            }}/>

                        </div>

                        <div class="form-group">
                            <label for="otcount">OT Count:</label>
                            <input type="text" class="form-control" id="otcount" 
                            onChange={(e)=>{
                                setOtCount(e.target.value);
                            }}/>

                        </div>

                        <button type="submit" class="btn btn-info btn-lg" >Submit</button>
                        
                         </form>
                </div>

    )
}

export default AddPerformance;
  
  

