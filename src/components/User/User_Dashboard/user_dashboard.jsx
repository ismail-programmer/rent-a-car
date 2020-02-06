import React, { Component } from "react";
import { Link } from "react-router-dom";
class user_dashboard extends Component {
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
                        <Link to="/user/booking">Book a Ride</Link>
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
                      <h2>Heading</h2>
                      <div className="page-title-subheading">Heading div</div>
                    </div>
                  </div>
                </div>
                <div
                  className="app-inner-layout app-inner-layout-page"
                  // style={{ display: "block" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">
                      <b>Heading 2</b>
                    </h5>
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
