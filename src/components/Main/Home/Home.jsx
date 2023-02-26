import React, { Component } from "react";
import { userContext } from '../../../context/userContext';

class Home extends Component {

  static contextType = userContext; 

  constructor(props) {
    super(props)
    this.username = React.createRef();

    this.state = {
      user: {
        username: ""
      }
    }
  }

  sendName = () => {
    // Consume contexto desde JS
    const { login } = this.context;
    // enviar objeto por contexto
    login(this.state.user);

    alert("The user has logged into the system.");

    //Vaciar inputs + state
    this.username.current.value = "";
    this.setState({ user: { username: "" } });
  }

  handleChange = () => {
    //Leer campos por referencias
    const username = this.username.current.value;
    this.setState({ user: { username: username} });
  }



  render() {
    return <div>
      <form>
        <label htmlFor="name">Name:</label><br />
        <input type="text" ref={this.username} placeholder="Name user" onChange={this.handleChange} /><br />

        {this.state.user.username ? <button type="submit" onClick={this.sendName}>Login</button> : ""}
      </form>
    </div>;
  }
}

export default Home;
