import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Wizard() {
  return (
    <div className="Wizard">
        <header className="Wizard-Header">
        <h1>Add New listing</h1>
        <button >Cancel</button> 
        </header>

        <Link to={`/`}>
        <button >Complete</button> 
        </Link>
  
    </div>
  );
}

export default Wizard;
