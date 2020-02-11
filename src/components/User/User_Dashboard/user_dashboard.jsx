import React, { Component } from "react";
import { Link } from "react-router-dom";
//components
import Bookings from "../User_Booking/Booking_details";
import SideBar from "../../utils/SideBar";
import "./dashboard.css";
import Card from "../../Home/card";
//for sideBar
const linksDetails = [{ title: "Booking", link: "/user/booking" }];
const activeUser = (JSON.parse(localStorage.getItem("users")) || [])[
  localStorage.getItem("userIndex")
];
class user_dashboard extends Component {
  state={
    activeUser: {},
    bookings: []
  }
  componentDidMount(){
    this.setState({ bookings: JSON.parse(localStorage.getItem("bookings")) || [] });
    this.setState({activeUser})
  }
  showCards = () => {
    
    let cars = JSON.parse(localStorage.getItem("carDetails")) || [];
    return cars.map((el, i) => (
      <Card key={i} title={el.model} price={el.price} number={el.num} />
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
                      <h2>{this.state.activeUser.name ? this.state.activeUser.name : "user" }
                      
                      </h2>
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
                      <b>{this.state.activeUser.email}</b>
                    </h5>
                  </div>
                </div>
                <div className="app-container app-theme-gray">
                  <div className="app-main">
                    {this.state.bookings.length > 0 ? <Bookings style={{paddingLeft: `0px`}}/> : <h1>You have not Booked any car stil now</h1>}
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