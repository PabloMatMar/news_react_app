import React, { Component } from "react";
import { Link } from "react-router-dom";
import { userContext } from '../../../context/userContext';

class Nav extends Component {
  render() {
    return <div><nav>
      <button>
      <Link to="/form"> addNew </Link>
      </button>
      <button>
      <Link to="/list"> News </Link>
      </button>
      <button>
        <Link to="/"> Home </Link>
      </button>
    </nav>
    <userContext.Consumer>
        {({ logout, user }) => user.username ?
          <span>
          <p>Hello, {user.username}!</p><br />
          <button variant="contained" size="small" onClick={logout}>Logout</button></span>
          : ""
        }
      </userContext.Consumer>
    </div>;
  }
}

export default Nav;
