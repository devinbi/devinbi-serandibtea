import React, { useState } from 'react';
import axios from 'axios';
import "../../NavigateBar.css";
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineBars } from 'react-icons/ai';

function AddPerformance() {
  // important to slide navigatebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [employeeId, setEmployeeId] = useState('');
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [attendanceCount, setAttendanceCount] = useState('');
  const [otCount, setOtCount] = useState('');

  function sendData(e) {
    e.preventDefault();

    // Frontend validation
    if (attendanceCount > 300) {
      
      return;
    }

    if (otCount > 900) {
    
      return;
    }

    const newPerformance = {
      employeeId,
      name,
      position,
      attendanceCount,
      otCount
    };

    console.log(newPerformance);
    axios
      .post('http://localhost:8070/performance/add', newPerformance)
      .then(() => {
        
        window.location.reload();
      })
      .catch((err) => {
        
      });
  }

  return (
    <div className="wrapper">
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
                            <a href="/AddSupplier">View All Received Tea Leaves</a>
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
                            <a href="#">View Equipment Details</a>
                        </li>
                        <li>
                            <a href="#">Allocate Equipment</a>
                        </li>
                        <li>
                            <a href="/allocating/viewallocating">View Allocate Details</a>
                        </li>
                        <li>
                            <a href="#">Monitoring Equipment</a>
                        </li>
                        <li>
                            <a href="#">View Performance Details</a>
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
        <div className="container-fluid">
          <span onClick={handleSidebarToggle}>
            {' '}
            <AiOutlineBars />
          </span>
        </div>

        {/* Our Form Start */}
        <div className="page-component-body p-5" style={{ backgroundColor: '#cce7bb' }}>
          <div className="container input-main-form-emp pt-3 border border-success" style={{ backgroundColor: 'white' }}>
            <div className="container border-top ">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-uppercase " style={{ backgroundColor: '#658A4E', color: 'white' }}>
                  <h3 className="topic text-center mt-3 mb-3">Employee Performance Details</h3>
                </div>
              </div>

              <form className="form" onSubmit={sendData}>
                <div className="form pt-5 mb-2">
                  <label htmlFor="expenseid">Employee ID:</label>
                  <input
                    type="text"
                    className="form-control formInput"
                    id="expenseid"
                    pattern="[E][M][0-9]{3}"
                    placeholder="Enter employee id"
                    onChange={(e) => {
                      setEmployeeId(e.target.value);
                    }}
                  />
                </div>

                <div className="form mb-2">
                  <label htmlFor="totalamount">Name</label>
                  <input
                    type="text"
                    className="form-control formInput"
                    id="runtime"
                   
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>

                <div className="form mb-2">
                  <label htmlFor="totalamount">Job Title:</label>
                  <select
                    type="text"
                    className="form-control"
                    id="totalamount"
                   
                    onChange={(e) => {
                      setPosition(e.target.value);
                    }}
                  >
                    <option>Choose</option>
                    <option value="manager">Manager</option>
                    <option value="asmanager">Assistant Manager</option>
                    <option value="qaexecutive">Quality Assurance Executive</option>
                    <option value="mtechnician">Maintenance Technician</option>
                  </select>
                </div>

                <div className="form mb-2">
                  <label htmlFor="totalamount">Attendance Count:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="totalamount"
                    max="300"
                    onChange={(e) => {
                      setAttendanceCount(e.target.value);
                    }}
                  />
                </div>

                <div className="form mb-2">
                  <label htmlFor="totalamount">OT Count:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="totalamount"
                    max="900"
                    onChange={(e) => {
                      setOtCount(e.target.value);
                    }}
                  />
                </div>

                <div className="col py-3 text-center">
                  <button type="submit" className="btn-ok1">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPerformance;