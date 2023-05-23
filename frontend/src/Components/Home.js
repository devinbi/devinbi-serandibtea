import '../Home.css';
import React from 'react';

export default function Home() {
  return (
    <div>
    <div className="card-background2"></div>
    <h1 className="dashboard-heading">Dashboard</h1>
    <div className="container1">
    <div className="card-background"></div>
    <div className="card card1">
      <div className="card-description">
        <a href='/addequipment'>
        
          <p>Equipment Management</p>
        </a>
      </div>
    </div>
    <div className="card card2">
      <div className="card-description">
        <p>Inventory Management</p>
      </div>
    </div>
    <div className="card card3">
      <div className="card-description">
      
        <p>Employee Management</p>
      </div>
    </div>
    <div className="card card4">
      <div className="card-description">
       
        <p>Transport Management</p>
      </div>
    </div>
  </div>
</div>

    
  );
}