import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";
class Header extends Component {
  render() {
    return (
      <div className="header-outer">
        <div className="header-inner">
          <div className="header-innder-wrapper">
            <Link to="/user/dashboard">
              {" "}
              <div className="header-logo"></div>
            </Link>
           <Link to="/admin/dashboard">
           
            <div className="header-link">Admin</div>
           </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
