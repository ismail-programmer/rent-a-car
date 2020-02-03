import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
//components
import Signup from './components/SignupSystem/Signup'
import Login from "./components/LoginSystem/Login";
// import AdminDashboard from "./components/AdminDashboard/AdminDashboard";



//css
import './App.css'

function App() {
  return (
    <div className="App">
   <BrowserRouter>
      <Route exact path="/admin/signup" component={Signup} />
      <Route exact path="/admin/login" component={Login} />
      {/* <Route exact path="/admin/dashboard" component={AdminDashboard} /> */}
      <Route exact path="/" component={App} />
    </BrowserRouter>
    </div>
  );
}

export default App;
