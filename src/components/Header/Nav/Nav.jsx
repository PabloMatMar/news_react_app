import React, { Component } from "react";
import { Link } from "react-router-dom";
import { userContext } from '../../../context/userContext';

class Nav extends Component {
  render() {
    return <nav className="nav">
      <button>
      <Link to="/form"> addNew </Link>
      </button>
      <button>
      <Link to="/list"> News </Link>
      </button>
      <button>
        <Link to="/"> Home </Link>
      </button>
      <br />
    <userContext.Consumer>
        {({ logout, user }) => user.username ?
          <span className="flexBoxButton">
          Hello, {user.username}!
          <button variant="contained" size="small" onClick={logout}>Logout</button></span>
          : ""
        }
      </userContext.Consumer>

      </nav>

  }
}

export default Nav;
