import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";
class Header extends Component {
  render() {
    return (
      <div className="header-outer">
        <div className="header-inner">
          <div className="header-innder-wrapper">
            <div className="header-logo"></div>
            <ul className="header-links">
              <li className="list-item">
                <Link className="header-link" to="/">Home</Link>
              </li>
              <li className="list-item">
                <Link className="header-link" to="/user/dashboard">Dashboard</Link>
              </li>
              <li className="list-item">
                <Link className="header-link" to="/user/booking">Book a Ride</Link>
              </li>
              <li className="list-item">
                <button className="btn-wide btn-pill btn-shadow btn-hover-shine btn btn-primary btn-lg">Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
