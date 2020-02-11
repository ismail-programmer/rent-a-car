import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
//components
// ! for admin only
import Admin_Signup from "./components/Admin/SignupSystem/Signup";
import Admin_Login from "./components/Admin/LoginSystem/Login";
import Adding_Car from "./components/Admin/Cars_Managment/Adding_cars";
import Car_Details from "./components/Admin/Cars_Managment/carsDetails";
import Edit_Cars from "./components/Admin/Cars_Managment/Edit_cars";
import Edit_Bookings from "./components/Admin/Booking_System/Edit_Bookings";
import Admin_Dashboard from "./components/Admin/AdminDashboard/AdminDashboard";
import Admin_Booking from "./components/Admin/Booking_System/Admin_Booking";

import Home from "./components/Home/Home";
// import Sidebar from "./components/utils/SideBar";
import Header from "./components/Layout/Header/Header";

//? for user only
import User_Signup from "./components/User/User_Signup/Signup";
import User_Login from "./components/User/User_Login/Login";
import User_Dashboard from "./components/User/User_Dashboard/user_dashboard";
import User_Booking from "./components/User/User_Booking/User_Booking";
import Booking_DetailsWrapper from "./components/User/User_Booking/Wrapper";

//css
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {
          //? Route for User */
        }
        <Route exact path="/admin/dashboard" component={Admin_Dashboard} />
        <Route exact path="/admin/signup" component={Admin_Signup} />
        <Route exact path="/admin/login" component={Admin_Login} />
        <Route exact path="/admin/adding_car" component={Adding_Car} />
        <Route exact path="/admin/cars_details" component={Car_Details} />
        <Route exact path="/admin/edit_car/:carId" component={Edit_Cars} />
        <Route
          exact
          path="/admin/edit_booking/:bookingId"
          component={Edit_Bookings}
        />
        <Route exact path="/admin/bookings_details" component={Admin_Booking} />

        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/header" component={Header} /> */}
        {/* <Route exact path="/sidebar" component={SideBar} /> */}

        {
          //? Route for User */
        }
        <Route exact path="/signup" component={User_Signup} />
        <Route exact path="/login" component={User_Login} />
        <Route exact path="/user/dashboard" component={User_Dashboard} />
        <Route exact path="/user/booking" component={User_Booking} />
        <Route
          exact
          path="/user/bookings_details"
          component={Booking_DetailsWrapper}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
