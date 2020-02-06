import React, { Component } from "react";
import { Link } from "react-router-dom";

//css
import "./header.css";

// const users = JSON.parse(localStorage.getItem("users"));
// const userIndex = JSON.parse(localStorage.getItem("userIndex"));

class Header extends Component {
  render() {
    return (
      <div>
        <header className="top-bar">
          <div className="grid-container full">
            <div className="grid-x align-middle">
              <div className="cell small-11">
                <Link to="/home">
                  {" "}
                  <h3>Rent A Car</h3>
                </Link>
              </div>
              <div className="cell small-2">
                <Link to="/user/booking">
                  {" "}
                  <h4>Book A Car</h4>
                </Link>
              </div>
              <div className="cell small-2">
                <Link
                  to="/"
                  onClick={() => {
                    localStorage.removeItem("userIndex");
                  }}
                >
                  {" "}
                  <h4>Logout</h4>
                </Link>
              </div>

              <div className="cell small-1 nav-menu">
                <button
                  onClick={() => {
                    this.refs.navigation.classList.toggle("is-open");
                    this.refs.hamburger.classList.toggle("is-open");
                  }}
                  ref="hamburger"
                  className="hamburger"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                <nav ref="navigation" className="navigation">
                  <ul>
                    <li key="1">
                      <Link to="/home">Home</Link>
                    </li>
                    <li key="2">
                      <Link to="/user/booking">Book A Car</Link>
                    </li>
                    <li key="3">
                      <Link
                        to="/"
                        onClick={() => {
                          localStorage.removeItem("userIndex");
                        }}
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
