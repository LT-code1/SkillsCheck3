import React, { Component } from "react";
import './App.css';
import Dashboard from "./components/Dashboard";
import routes from "./routes";
import { HashRouter as Router } from "react-router-dom";
import Header from "./components/Header";


function App() {
  return (
    <>
    <Header />
    <Router>
    <div className="App">
      {/* //<h1>stuff goes here</h1> */}
      
    
    </div>


    {routes}
    </Router>
    </>
  );
}

export default App;



//<Dashboard />

