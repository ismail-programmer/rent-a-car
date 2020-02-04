import React, { Component } from "react";
import { Link } from "react-router-dom";
const cars = JSON.parse(localStorage.getItem("carDetails"));
class carsDetails extends Component {
  showTable = () =>
    cars.map((el, i) => (
      <tr key={i}>
        <th>{i + 1}</th>
        <td>{el.id}</td>
        <td>{el.owner}</td>
        <td>{el.model}</td>
        <td>{el.num}</td>
        <td>
          <Link className="btn-wide btn-pill btn-shadow btn-hover-shine btn btn-primary btn-lg" to={`/admin/edit_car/${i}`}>Edit Details</Link>
        </td>
      </tr>
    ));
  render() {
    return (
      <div>
        <div className="app-container app-theme-gray">
          <div className="app-main">
            <div className="app-sidebar-wrapper">
              <div className="app-sidebar sidebar-shadow">
                <div className="app-header__logo">
                  <Link
                    to="/home"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="KeroUI Admin Template"
                    className="logo-src"
                  ></Link>
                  <button
                    type="button"
                    className="hamburger hamburger--elastic mobile-toggle-nav"
                  >
                    <span className="hamburger-box">
                      <span className="hamburger-inner"></span>
                    </span>
                  </button>
                </div>
                <div className="scrollbar-sidebar scrollbar-container">
                  <div className="app-sidebar__inner">
                    <ul className="vertical-nav-menu">
                      <li>
                        <Link to="/admin/dashboard">Dashboard</Link>
                        <Link to="/admin/adding_car">Add Car</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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
