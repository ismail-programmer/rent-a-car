import React, { Component } from "react";
import { Link } from "react-router-dom";


//components
import SideBar from "../../utils/SideBar";

//for sideBar
const linksDetails = [
  { title: "Dashboard", link: "/admin/dashboard" },
  { title: "Booking Details", link: "/admin/bookings_details" },
  { title: "Add Vechile", link: "/admin/adding_car" },
  { title: "All Vechiles", link: "/admin/cars_details" }
];



class carsDetails extends Component {
  state={
    cars: []
  }
  componentDidMount(){
    this.setState({cars: JSON.parse(localStorage.getItem("carDetails")) || []})
  }
  showTable = () =>{
    return this.state.cars.map((el, i) => (
      <tr key={i}>
        <th>{i + 1}</th>
        <td>{el.id}</td>
        <td>{el.owner}</td>
        <td>{el.model}</td>
        <td>{el.num}</td>
        <td>{el.price}</td>
        <td>
          <Link className="btn-wide btn-pill btn-shadow btn-hover-shine btn btn-primary btn-lg" to={`/admin/edit_car/${i}`}>Edit Details</Link>
        </td>
      </tr>
    ));}
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
                      <h2>Cars Details</h2>
                      <div className="page-title-subheading">
                        Here You find all the Cars of our Website.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="app-inner-layout app-inner-layout-page"
                  // style={{ display: "block" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">
                      <b>Cars</b>
                    </h5>
                    <table className="mb-0 table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Vechile id</th>
                          <th>Owner Name</th>
                          <th>Model Name</th>
                          <th>Vechile Num</th>
                          <th>Price Per Hour</th>
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

export default carsDetails;
