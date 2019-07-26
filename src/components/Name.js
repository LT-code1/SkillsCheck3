import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { UPDATE_NAME,} from "./../store";


class Name extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      name: reduxState.name
    };
  }
  componentDidMount() {
  console.log(this.props);
    const previousID = this.props.match.params.id;
    console.log(previousID);
    this.setState({name:previousID});
    //  if (this.props.match.params.id) {
       
    // }
     }
 

  handleNameChange(nameVal) {
    this.setState({
      name: nameVal
    });
  }

  
  saveChanges() {
    store.dispatch({
      type: UPDATE_NAME,
      payload: this.state.name
    });
  }
 
  render() {
    return (
      <div className="Name forms">
        <div className="input_container">
          <h2>Name Form:</h2>
          <input
            value={this.state.name}
            onChange={e => this.handleNameChange(e.target.value)}
          />
        </div>
        <h2>{this.state.name} is from this.props.match.params.id</h2>
       
        <Link to="/">
          <button onClick={() => this.saveChanges()} className="right_button">
            Update Name Form
          </button>
        </Link>
      </div>
    );
}
}

export default Name;

//{console.log (this.props.match.params.id)}
//<h2>This special guy {previousID}is from match params</h2>