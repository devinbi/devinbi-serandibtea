import AddAllocating from "./components/equipmentManagement/Addallocating";
import AddEquipment from "./components/equipmentManagement/Addequipment";
import Equipmentview from "./components/equipmentManagement/viewequipment";
import Updateequipment from "./components/equipmentManagement/updateequipment";
import Addmonitor from "./components/equipmentManagement/Addmonitor";
import Viewmonitor from "./components/equipmentManagement/viewmonitor";
import Viewallocating from "./components/equipmentManagement/viewallocating";
import Equipmentreport from "./components/equipmentManagement/equipmentreport";

import AddVehicle from "./components/TransportManagement/addingVehicle";
import ViewAllVehicle from "./components/TransportManagement/ViewAllVehicle";
import UpdateVehicle from "./components/TransportManagement/updateVehicle";

// import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/allocating/viewallocating" element= {<Viewallocating />}/>
          <Route path="/addequipment" element={<AddEquipment />}/>
          <Route path="/addallocating" element={<AddAllocating />}/>
          <Route path="/addmonitor" element={<Addmonitor />}/>
          <Route path="/viewmonitor" element={<Viewmonitor />}/>
          <Route path="/reporte" element={<Equipmentreport />}/>
          <Route path="/equipment/viewequipment" element={<Equipmentview />}/>

          <Route path="/addvehicle" element={<AddVehicle />}/>
          <Route path="/Vehicle/viewVehicle" element={<ViewAllVehicle />}/>
          <Route path="/updatevehicle" element={<UpdateVehicle />}/>
            

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
