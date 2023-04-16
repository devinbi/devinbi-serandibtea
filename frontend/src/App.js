
import AddEquipment from "./Components/equipmentManagement/Addequipment";
import Equipmentview from "./Components/equipmentManagement/viewequipment";
import Addmonitor from "./Components/equipmentManagement/Addmonitor";
import Viewmonitor from "./Components/equipmentManagement/viewmonitor";
import Viewallocating from "./Components/equipmentManagement/viewallocating";
import Equipmentreport from "./Components/equipmentManagement/equipmentreport"

import AddSupplier from "./Components/InventoryManagement/AddSupplier";
// import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/allocating/viewallocating" element= {<Viewallocating />}/>
          <Route path="/addequipment" element={<AddEquipment />}/>
          
          <Route path="/addmonitor" element={<Addmonitor />}/>
          <Route path="/viewmonitor" element={<Viewmonitor />}/>
          <Route path="/reporte" element={<Equipmentreport />}/>
          <Route path="/equipment/viewequipment" element={<Equipmentview />}/>
  
            
          <Route path="/AddSupplier" element={<AddSupplier />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
