import React, { useState, useEffect } from "react";
import axios from "axios";

function AddAllocating() {
  const [equipmentid, setEquipmentid] = useState("");
  const [department, setDepartment] = useState("");
  const [wattage, setWattage] = useState("");
  const [hours, setHours] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newAllocating = {
      equipmentid,
      department,
      wattage,
      hours,
    };

    console.log(newAllocating);
    axios
      .post("http://localhost:8070/allocating/add", newAllocating)
      .then(() => {
        alert("Success");
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  }
  return (
    <div className="container">
      <form onSubmit={sendData}>
        <div class="form-group">
          <label for="orderid">equipment ID :</label>
          <input
            type="text"
            class="form-control"
            id="orderid"
            placeholder="Enter ID "
            onChange={(e) => {
              setEquipmentid(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="description">department</label>
          <select
            type="text"
            class="form-control"
            id="description"
            placeholder="choose department"
            onChange={(e) => {
              setDepartment(e.target.value);
            }}
          >
            <option>CHOOSE</option>
            <option value="supplier">withering department</option>
            <option value="maintenance">rolling department</option>
            <option value="salary">oxidation and drying department</option>
          </select>
        </div>

        <div className="form-group">
          <label for="numberofunits">wattage</label>
          <input
            type="text"
            class="form-control"
            id="numberofunits"
            placeholder="Enter number of units"
            onChange={(e) => {
              setWattage(e.target.value);
            }}
          />
        </div>

        <div class="form-group">
          <label for="unitprice"> hours</label>
          <input
            type="text"
            class="form-control"
            id="unitprice"
            placeholder="Enter number of hours"
            onChange={(e) => {
              setHours(e.target.value);
            }}
          />
        </div>

        <button type="submit" class="btn btn-info btn-lg">
          Submit
        </button>
      </form>
    </div>
  );
}
export default AddAllocating;
