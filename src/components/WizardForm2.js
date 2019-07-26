import React, { Component } from "react";
import axios from "axios";
import { Link, Switch, Route, Redirect} from "react-router-dom";
import store from "./../store";




class WizardForm2 extends Component {
    constructor(props) {
        super(props);
        const reduxState = store.getState();
        this.state = {
          name: reduxState.name
        };
    }

    // componentDidMount() {
    // }
     
    render() {
        return (
            <>
            <h2>WizardForm2</h2>
            <h1>{this.state.name} is the cool person from the redux store</h1>


        <Link to="/name">
        <button>Name Change Form</button>
        </Link>
           
             </>
        );
    }
}

export default WizardForm2;