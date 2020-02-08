import React, { Component } from "react";
import { Link } from "react-router-dom";

//components
import SideBar from "../../utils/SideBar";

//for sideBar
const linksDetails = [
  { title: "Cars Details", link: "/admin/cars_details" },
  { title: "Dashboard", link: "/admin/dashboard" },
  { title: "Add Vechile", link: "/admin/adding_car" },
  { title: "All Vechiles", link: "/admin/cars_details" }
];

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
        <td>{el.userId}</td>
        <td>{el.from}</td>
        <td>{el.to}</td>
        <td>{el.date}</td>

        {/* <td>{el.vechileId}</td> */}
        <td>
          <div role="group" className="btn-group-sm btn-group">
            {el.approved === true ? (
              ``
            ) : (
              <button
                onClick={() => {
                  let bookings = [...this.state.bookings];
                  bookings[i].approved = true;
                  this.setState({
                    bookings
                  });
                  localStorage.setItem(
                    "bookings",
                    JSON.stringify(this.state.bookings)
                  );
                }}
                className="btn-shadow btn btn-primary"
              >
                Approve
              </button>
            )}
            <Link
              to={`/admin/edit_car/${i}`}
              className="btn-shadow btn btn-primary"
            >
              Edit
            </Link>
          </div>
        </td>
      </tr>
    ));
  };
  render() {
    return (
      <div>
        <div className="app-container app-theme-gray">
          <div className="app-main">
            <SideBar linksDetails={linksDetails} />
            <div className="app-sidebar-overlay d-none animated fadeIn"></div>
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
                          <th>User id</th>
                          <th>From Route</th>
                          <th>To Route</th>
                          <th>Date of Booking</th>
                          {/* <th>vechile id</th> */}
                          <th>Tools</th>
                        </tr>
                      </thead>
                      <tbody>{this.showTable()}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="app-drawer-overlay d-none animated fadeIn"></div>
      </div>
    );
  }
}

export default Admin_Booking;
