import React from "react";
import { Switch, Route,} from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";

import Wizard from "./components/Wizard";
import Dashboard from "./components/Dashboard";
import Wizard2 from "./components/WizardForm2";
import name from "./components/Name";



export default (
  <Switch>
    <Route exact path="/" component={Dashboard}/>
    <Route exact path="/wizard" component={Wizard}/> 
    <Route exact path="/wizard/form2" component={Wizard2}/>
    <Route  exact path="/name" component={name}/>
    <Route  path="/name/:id" component={name}/>
    


    
    {/* <Route exact path="/" component={Main}/>
    <Route exact path="/calcs" render={ParentCalc}/>
    <Route path="/contact" component={Contact}/> */}

  </Switch>
);

