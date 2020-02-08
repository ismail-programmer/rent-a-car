import React, { Component } from 'react';


//components
import SideBar from "../../utils/SideBar";
import UserBookings from "../../User/User_Booking/Booking_details";


//for sideBar
const linksDetails = [
    { title: "Dashboard", link: "/user/dashboard" },
    
  ];


class WrapperBooking extends Component {
    render() {
        return (
           <div className="app-container app-theme-gray">
          <div className="app-main">
                <SideBar linksDetails={linksDetails}/>
                <UserBookings/>
            </div>
            </div>
        );
    }
}

export default WrapperBooking;