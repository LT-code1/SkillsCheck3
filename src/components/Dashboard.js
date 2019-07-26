import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Dashboard() {
  return (
    <div className="Dashboard">
        <header className="Dashboard-Header">
            <h1>Dashboard</h1>
            <Link to={`/wizard`}>
            <button >Add New Property</button> 
            </Link>
        </header>

  
    </div>
  );
}

export default Dashboard;
