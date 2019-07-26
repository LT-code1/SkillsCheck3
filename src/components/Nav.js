import React, { Component } from 'react';
import { Link } from "react-router-dom";


function Nav() {
  return (
    <nav>
      <h2>Logo</h2>
        <ul className="nav-Links">
        {/* <Link to={`/`}>  <li>Main</li></Link>
        <Link to={`/calcs`}>   <li>Calcs</li></Link>
        <Link to={`/contact`}>   <li>Contact</li></Link> */}
        </ul>
   </nav>
   
  );
}
export default Nav;
