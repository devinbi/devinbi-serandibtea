import AddAllocating from "./components/equipmentManagement/Addallocating";
import AddEquipment from "./components/equipmentManagement/Addequipment";
import Equipmentview from "./components/equipmentManagement/viewequipment";
import Addmonitor from "./components/equipmentManagement/Addmonitor";
import Viewmonitor from "./components/equipmentManagement/viewmonitor";
import Viewallocating from "./components/equipmentManagement/viewallocating";
import Equipmentreport from "./components/equipmentManagement/equipmentreport";
import AddEmployee from "./components/EmployeeManagement/Addemployee";
import AddPerformance from "./components/EmployeeManagement/Addperformance";
import Viewemployee from "./components/EmployeeManagement/Viewemployee";
import Viewperformance from "./components/EmployeeManagement/Viewperformance";
import Viewhighperformance from "./components/EmployeeManagement/Viewhighperformance";

import AddTransferredproduct from "./components/InventoryManagement/AddTransferredproduct";
import AddSupplier from "./components/InventoryManagement/AddSupplier";
import ViewAllTransferredProduct from "./components/InventoryManagement/ViewAllTransferredProduct";





// import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/allocating/viewallocating" element= {<Viewallocating />}/>
          <Route path="/addAllocating" element={<AddAllocating />}/>
          <Route path="/addequipment" element={<AddEquipment />}/>
          <Route path="/addmonitor" element={<Addmonitor />}/>
          <Route path="/viewmonitor" element={<Viewmonitor />}/>
          <Route path="/reporte" element={<Equipmentreport />}/>
          <Route path="/equipment/viewequipment" element={<Equipmentview />}/>
          <Route path="/addemployee" element={<AddEmployee />}/>
          <Route path="/addperformance" element={<AddPerformance />}/>
          <Route path="/employee/Viewemployee" element={<Viewemployee />}/>
          <Route path="performance/Viewperformance" element={<Viewperformance />}/>
          <Route path="performance/Viewhighperformance" element={<Viewhighperformance />}/>
         
          
  
            
          <Route path="/AddSupplier" element={<AddSupplier />}/>
          <Route path="/AddTransferredproduct" element={<AddTransferredproduct />}/>
          <Route path="/ViewAllTransferredProduct" element={<ViewAllTransferredProduct />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
