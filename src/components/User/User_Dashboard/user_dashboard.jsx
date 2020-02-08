import React, { Component } from "react";
import { Link } from "react-router-dom";

//components
import Bookings from '../User_Booking/Booking_details'
import SideBar from "../../utils/SideBar";
import "./dashboard.css";
//for sideBar
const linksDetails = [{ title: "Booking", link: "/user/booking" }];
const activeUser = JSON.parse(localStorage.getItem("users"))[
  localStorage.getItem("userIndex")
];
class user_dashboard extends Component {
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
                      <h2>{activeUser.name}</h2>
                    </div>
                  </div>
                </div>
                <div
                  className="app-inner-layout app-inner-layout-page"
                  // style={{ display: "block" }}
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
                <div className="app-container app-theme-gray">
          <div className="app-main">
                <Bookings/>
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

export default user_dashboard;
