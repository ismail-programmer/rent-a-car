import React, { Component } from "react";
import { Link } from "react-router-dom";

class SideBar extends Component {
  render(props) {
    return (
      <div className="app-sidebar-wrapper">
        <div className="app-sidebar sidebar-shadow">
          <div className="app-header__logo">
            <h3>Rent a Car</h3>
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
                {this.props.linksDetails.map((el, i) => {
                  return (
                    <li key={i}>
                      <Link to={el.link}>{el.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
