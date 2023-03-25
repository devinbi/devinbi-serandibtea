import React,{useEffect,useState} from 'react';
import axios from 'axios';




export  default function Addequipment(){

  const [equipmentid, setEquipmentid] = useState("");
  const [equipmentname, setEquipmentname] = useState("");
  const [equipmenttype, setEquipmenttype] = useState("");
  const [date, setDate] = useState("");
  const [department, setDepartment] = useState("");
  const [intertek, setIntertek] = useState("");
  const [status, setStatus] = useState("");

  

  function sendData(e){
      e.preventDefault();
    
      const newEquipment= {
        equipmentid,
        equipmentname, 
        equipmenttype,
        date,
        department,
        intertek,
        status
        
      }
      
  console.log(newEquipment)
      axios.post("http://localhost:8070/equipment/add",newEquipment).then(()=>{
          alert("Success");
          window.location.reload()
         
      

      }).catch((err)=>{
          alert(err);
      })
   
  }
   return(
       
       <div className="container">
                  <title Add expense />
                    <form onSubmit={sendData}>
                    <div class="form-group">
                            <label for="expenseid">equipment ID :</label>
                            <input type="text" class="form-control" id="expenseid" pattern="[E][0-9]{4}" placeholder="Enter equipment ID"
                            onChange={(e)=>{
                                setEquipmentid(e.target.value);
                            }}/>
                        
                        </div>


                        <div class="form-group">
                            <label for="totalamount">equipment name :</label>
                            <input type="text" class="form-control" id="totalamount" 
                            onChange={(e)=>{
                                setEquipmentname(e.target.value);
                            }}/>

                        </div>



                        <div class="form-group">
                            <label for="expensetype">equipment type:</label>
                            <select name ="expensetype" class="form-control" id="expensetype" 
                            onChange={(e)=>{
                                setEquipmenttype(e.target.value);
                                
                            }}>
                             <option >CHOOSE</option>  
                             <option value="supplier">office equipment</option>
                             <option value="maintenance">factory equipment</option>
                             
                            </select>
                         </div>
                         
                         
                         <div className="form-group">
                            <label for="date">Date</label>
                            <input type="date" class="form-control" id="date" onChange={(e)=>{
                                setDate(e.target.value);
                            }}/>
                        </div>
                        
                        <div className="form-group">
                            <label for="description">department</label>
                            <select type="text" class="form-control" id="description" placeholder="choose department" onChange={(e)=>{
                                setDepartment(e.target.value);
                            }}>
                                <option >CHOOSE</option>  
                             <option value="supplier">withering department</option>
                             <option value="maintenance">rolling department</option>
                             <option value="salary">oxidation and drying department</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label for="description">intertek</label>
                            <input type="text" class="form-control" id="description" placeholder="Enter number" onChange={(e)=>{
                                setIntertek(e.target.value);
                            }}/>
                        </div>

                        <div className="form-group">
                            <label for="description">status</label>
                            <select type="text" class="form-control" id="description" placeholder="Enter description" onChange={(e)=>{
                                setStatus(e.target.value);
                            }}>
                                <option >CHOOSE</option>  
                             <option value="supplier">idle</option>
                             <option value="maintenance">active</option>
                             <option value="salary">replace</option>
                             <option value="salary">repair</option>
                            </select>
                        </div>
            
                    <button type="submit" class="btn btn-info btn-lg" >Submit</button>

                    
                    </form>
                </div>
            
   )
    }
