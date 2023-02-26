import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return <nav>
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

  }
}

export default Nav;
