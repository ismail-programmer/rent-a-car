import React, { Component } from "react";

import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className=" ">
        <div className="row ">
          <div className="col s12">
            <div className="App">
              <h1>Rent a Car</h1>
              <h4>Welcome to Our Website!</h4>
              <div className="col s6">
                <Link to="/signup" className="nav-link">
                  Please Signup
                </Link>
              </div>
              <div className="col s6">
                <Link to="/login" className="nav-link">
                  Please Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
