import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


class Dashboard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            houses: [],
            error: ""
        };
    }
    componentDidMount() {
        axios
            .get("/api/houses")
            .then(res => {
                this.setState({ houses: res.data })
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    error: "ERROR"
                });
            });
    }
    deleteProduct = (id) => {
        // id.preventDefault(); // do i need this?? just on forms submit button
         axios
             .delete(`/api/houses/${id}`)    //app.delete('/api/houses/:id', controller.delete);
             .then(res => {
                 //console.log(res.data)
                 this.setState({ houses: res.data })
             })
             .catch(error => {
                 console.log(error);
                 this.setState({
                     error: "ERROR"
                 });
             });
       }
       
    render() {
        return (
            <div className="Dashboard">
                <header className="Dashboard-Header">
                    <h1>Dashboard</h1>
                    <Link to={`/wizard`}>
                    <button >Add New Property</button> 
                    </Link>
                </header>

                <ul>
                    {this.state.houses.map(prod => (
                        <li className="List1" key={prod.id} >
                            <img src={prod.url} alt="" height="200" width="200"/>
                            <h2>{prod.name} 
                            <br/> {prod.address}
                            <br/> {prod.city}
                            <br/> {prod.state}
                            <br/> {prod.zipcode}
                            <br/> {prod.mortgage}
                            <br/> {prod.rent} 
                            </h2>
                    
                            <button onClick={() => {this.deleteProduct(prod.id)}}>Delete</button>
                    
                        </li>
                ))}
                </ul>
            </div>
        );
        }
}
export default Dashboard;





