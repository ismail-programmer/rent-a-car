import React, { Component } from "react";


//components
// import SideBar from "../../utils/SideBar";
import AdminBooking from "../Booking_System/Admin_Booking";
import AllUsers from "./AllUsers";

//for sideBar
// const linksDetails = [
//   { title: "Cars Details", link: "/admin/cars_details" },
//   { title: "Booking Details", link: "/admin/bookings_details" },
//   { title: "Add Vechile", link: "/admin/adding_car" },
//   { title: "All Vechiles", link: "/admin/cars_details" }
// ];

const activeUser = (JSON.parse(localStorage.getItem("admin")) || [])[
  localStorage.getItem("adminIndex")
];

class Home extends Component {
  state={
    activeUser: {}
  }
  componentDidMount(){
    this.setState({activeUser})
  }
  render() {
    return (
      <div className="app-container app-theme-gray">
        <div className="app-main">
          <div className="app-header">
            <div
              className="app-header-right"
            >
              <div className="page-title-heading">
                <h2> Welcome Admin, {activeUser ? activeUser.name : ""}</h2>
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
              <br/> 
              <h5 className="card-title">
                <b>{activeUser ? activeUser.email : ""}</b>
              </h5>
            </div>
          </div>
        </div>
        <AdminBooking/>
       <AllUsers/>
      </div>
    );
  }
}

export default Home;
