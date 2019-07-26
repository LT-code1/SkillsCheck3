import React from "react";
import { Switch, Route,} from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import ParentCalc from "./components/ParentCalc";
import Contact from "./components/Contact";



export default (
  <Switch>
    
    {/* <Route exact path="/" component={Main}/>
    <Route exact path="/calcs" render={ParentCalc}/>
    <Route path="/contact" component={Contact}/> */}

  </Switch>
);

