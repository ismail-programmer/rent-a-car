import React, { Component } from "react";

// import { Link } from "react-router-dom";

//components
import SideBar from "../../utils/SideBar";

//for sideBar
const linksDetails = [
  { title: "Cars Details", link: "/admin/cars_details" },
  { title: "Booking Details", link: "/admin/bookings_details" },
  { title: "Add Vechile", link: "/admin/adding_car" },
  { title: "All Vechiles", link: "/admin/cars_details" }
];

const activeUser = JSON.parse(localStorage.getItem("admin"))[
  localStorage.getItem("adminIndex")
];

class Home extends Component {
  render() {
    return (
      <div className="app-container app-theme-gray">
        <div className="app-main">
          <SideBar linksDetails={linksDetails} />
          <div className="app-header">
            <div
              className="app-header-right"
              //  style={{ margin: "0 auto", textAlign: "center" }}
            >
              <div className="page-title-heading">
                <h2> Welcome Admin, {activeUser.name}</h2>
              </div>
            </div>
          </div>
          <div
            className="app-inner-layout app-inner-layout-page"
          >
            <div
              className="card-body"
              style={{ margin: `0 auto`, textAlign: `center` }}
            >
              <h5 className="card-title">
                <b>{activeUser.email}</b>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
