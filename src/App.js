import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
//components
// ! for admin only
import Admin_Signup from "./components/Admin/SignupSystem/Signup";
import Admin_Login from "./components/Admin/LoginSystem/Login";
import AddingCar from "./components/Admin/Cars_Managment/Adding_cars";
import CarDetails from "./components/Admin/Cars_Managment/carsDetails";
import EditCars from "./components/Admin/Cars_Managment/Edit_cars";
import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";

import Home from "./components/Home/Home";

//? for user only
import User_Signup from "./components/User_Signup/Signup";
import User_Login from "./components/User_Login/Login";

//css
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/*! route for admin */}

        <Route exact path="/admin/dashboard" component={AdminDashboard} />
        <Route exact path="/admin/signup" component={Admin_Signup} />
        <Route exact path="/admin/login" component={Admin_Login} />
        <Route exact path="/admin/adding_car" component={AddingCar} />
        <Route exact path="/admin/cars_details" component={CarDetails} />
        <Route exact path="/admin/edit_car/:carId" component={EditCars} />

        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />

        {/* Route for User */}
        <Route exact path="/signup" component={User_Signup} />
        <Route exact path="/login" component={User_Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
