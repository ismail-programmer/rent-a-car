import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";
class Header extends Component {
  render() {
    return (
      <div className="header-outer">
        <div className="header-inner">
          <div className="header-innder-wrapper">
            <Link to="/home">
              {" "}
              <div className="header-logo"></div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
