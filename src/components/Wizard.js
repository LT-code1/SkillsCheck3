import React, { Component } from "react";
import axios from "axios";
import { Link, Switch, Route, Redirect} from "react-router-dom";



class Wizard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //id: 0,  dont need for add post
            url: "",                
            name: "",
            address: "",
            city: "",
            state: "",
            zipcode: 0,
            mortgage: 0.0,
            rent: 0.0 
        };
        this.cancel = this.cancel.bind(this);
    }
    componentDidMount() {
     
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        }
    addProduct =() => {
        console.log(this.state);
        if(this.state.url && this.state.name && this.state.address && this.state.city && this.state.state && this.state.zipcode && this.state.mortgage && this.state.rent){    //if they exist add
        axios
            .post('/api/houses',{
                url: this.state.url,
                name: this.state.name, 
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                zipcode: this.state.zipcode,
                mortgage: this.state.mortgage,
                rent: this.state.rent  
            })
            .then(this.props.history.push('/'))                ///should link to / page ITS MAGIC PHOOOSHHHHHHH!!!!!!!
            //.then(console.log(this.state)) 
            .catch(error => {
                console.log(error);
                this.setState({
                    error: "ERROR"
                });
            }); 
        }
    }
    cancel = () => {                        //clears state and input fields
        //console.log(this.state);
        
        this.setState({
                        url : "",
                        name : "",
                        address : "",
                        city : "",
                        state : "",
                        zipcode : 0,
                        mortgage : 0.0,
                        rent : 0.0
                    });
                    //console.log(this.state);
                }
              
   
    render() {
        return (
            <>
            <div className="Wizard">
                <header className="Wizard-Header">
                <h1>Add New listing</h1>
                <button onClick={this.cancel}>Cancel</button> 
                </header>

                <form className="form" >
                <input
                  name="url"
                  placeholder={"Enter new URL"}
                  onChange={this.handleChange}
                />
                <input
                  name="name"
                  placeholder={"Enter Name"}
                  onChange={this.handleChange}
                />
                <input
                  name="address"
                  placeholder={"Enter address"}
                  onChange={this.handleChange}
                />
                <input
                  name="city"
                  placeholder={"Enter City"}
                  onChange={this.handleChange}
                />
                <input
                  name="state"
                  placeholder={"Enter State"}
                  onChange={this.handleChange}
                />
                <input
                  name="zipcode"
                  placeholder={"Enter Zipcode"}
                  onChange={this.handleChange}
                />
                <input
                  name="mortgage"
                  placeholder={"Enter Mortgage"}
                  onChange={this.handleChange}
                />
                <input
                  name="rent"
                  placeholder={"Enter Rent"}
                  onChange={this.handleChange}
                />
                </form>
                <button onClick={this.addProduct}>Complete</button> 
            </div>





            
          
        <Link to="/wizard/form2">
        <button>Next Form</button>
        </Link>
         
          </>
        )
    }
}

export default Wizard;

              

