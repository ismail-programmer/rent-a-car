import React, { Component } from "react";
import { Link } from "react-router-dom";

class Admin_Booking extends Component {
  state = {
    bookings: []
  };

  componentDidMount() {
    this.setState({ bookings: JSON.parse(localStorage.getItem("bookings")) });
  }

  showTable = () => {
    return this.state.bookings.map((el, i) => (
      <tr key={i}>
        <th>{i + 1}</th>
        <td>{el.id}</td>
        <td>{el.from}</td>
        <td>{el.to}</td>
        <td>{el.date}</td>
        {console.log(el.approved)}
        <td>{el.vechileId}</td>
        <td>{el.approved ? "Approved" : "Pending"}</td>
      </tr>
    ));
  };
  render() {
    return (
      <div className="app-main__outer">
        <div className="app-main__inner">
          <div className="header-mobile-wrapper">
            <div className="app-header__logo">
              <Link
                to="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="KeroUI Admin Template"
                className="logo-src"
              ></Link>
              <button
                type="button"
                className="hamburger hamburger--elastic mobile-toggle-sidebar-nav"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <div className="app-header__menu">
                <span>
                  <button
                    type="button"
                    className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
                  >
                    <span className="btn-icon-wrapper">
                      <i className="fa fa-ellipsis-v fa-w-6"></i>
                    </span>
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="app-header">
            <div
              className="app-header-right"
              style={{ margin: "0 auto", textAlign: "center" }}
            >
              <div className="page-title-heading">
                <h2>Booking Details</h2>
                <div className="page-title-subheading">
                  Here You find all the Bookings from the users.
                </div>
              </div>
            </div>
          </div>
          <div className="app-inner-layout app-inner-layout-page">
            <div className="card-body">
              <h5 className="card-title">
                <b>Bookings</b>
              </h5>
              <table className="mb-0 table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Booking id</th>
                    <th>From Route</th>
                    <th>To Route</th>
                    <th>Date of Booking</th>
                    <th>vechile id</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>{this.showTable()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin_Booking;
