import React from "react";
import { Link } from "react-router-dom";
const users = JSON.parse(localStorage.getItem("users"));
const Users = () => {
 const  showTable = () => {
    return users.map((el, i) => (
      <tr key={i}>
        <th>{i + 1}</th>
        <td>{el.id}</td>
        <td>{el.name}</td>
        <td>{el.email}</td>
      </tr>
    ));
  };

  return (
      <div className="app-container app-theme-gray">
        <div className="app-main">
          <div className="app-sidebar-overlay d-none animated fadeIn"></div>
          <div className="app-main__outer">
            <div className="app-main__inner">
              <div className="header-mobile-wrapper">
                <div className="app-header__logo">
                  <Link
                    to="/"
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
                    <h2>User Details</h2>
                    <div className="page-title-subheading">
                      Here You find all the Users.
                    </div>
                  </div>
                </div>
              </div>
              <div className="app-inner-layout app-inner-layout-page">
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Users</b>
                  </h5>
                  <table className="mb-0 table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>User id</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>{showTable()}</tbody>
                  </table>
                </div>
              </div>
            </div>
              </div>
              </div>
            </div>
        

  );
};

export default Users;
