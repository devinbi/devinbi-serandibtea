import AddAllocating from "./components/equipmentManagement/Addallocating";
import AddEquipment from "./components/equipmentManagement/Addequipment";
import Equipmentview from "./components/equipmentManagement/viewequipment";
import Addmonitor from "./components/equipmentManagement/Addmonitor";
import Viewmonitor from "./components/equipmentManagement/viewmonitor";
import Viewallocating from "./components/equipmentManagement/viewallocating";
import Equipmentreport from "./components/equipmentManagement/equipmentreport";

import AddVehicle from "./components/TransportManagement/addingVehicle";
import ViewAllVehicle from "./components/TransportManagement/ViewAllVehicle";
import UpdateVehicle from "./components/TransportManagement/updateVehicle";
import AddAllocation from "./components/TransportManagement/addAllocation";
import UpdateAllocation from "./components/TransportManagement/updateAllocation";
import ViewAllAllocation from  "./components/TransportManagement/ViewAllAllocation";
import AddMaintenance from  "./components/TransportManagement/addMaintenance";
import ViewAllMaintenance from "./components/TransportManagement/ViewAllMaintenance";
import UpdateMaintenance from "./components/TransportManagement/updateMaintenance";
import ViewHighMaintenenace from "./components/TransportManagement/ViewHighMaintenance";
import EcoTestExpireVehicles from "./components/TransportManagement/EcoTestExpireVehicles"

import AddTransferredproduct from "./components/InventoryManagement/AddTransferredproduct";
import AddSupplier from "./components/InventoryManagement/AddSupplier";
import ViewAllReceivedTeaLeaves from "./components/InventoryManagement/ViewAllReceivedTeaLeaves";





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

          <Route path="/addvehicle" element={<AddVehicle />}/>
          <Route path="/Vehicle/viewVehicle" element={<ViewAllVehicle />}/>
          <Route path="/updatevehicle" element={<UpdateVehicle />}/>
          <Route path="/addallocation" element={<AddAllocation />}/>
          <Route path="/updateallocation" element={<UpdateAllocation />}/>
          <Route path="/allocation/viewAllocation" element={<ViewAllAllocation/>}/>
          <Route path="/addmaintenance" element={<AddMaintenance />}/>
          <Route path="/maintenance/viewMaintenance" element={<ViewAllMaintenance/>}/>
          <Route path="/updatemaintenance" element={<UpdateMaintenance />}/>
          <Route path="/filter" element={<ViewHighMaintenenace/>}/>
          <Route path="/getExpire" element={<EcoTestExpireVehicles/>}/>
          
            
          <Route path="/AddSupplier" element={<AddSupplier />}/>
          <Route path="/AddTransferredproduct" element={<AddTransferredproduct />}/>
          <Route path="/ViewAllReceivedTeaLeaves" element={<ViewAllReceivedTeaLeaves />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
