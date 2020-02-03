import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
//components
import Signup from './components/SignupSystem/Signup'
import Login from "./components/LoginSystem/Login";



//css
import './App.css'

function App() {
  return (
    <div className="App">
   <BrowserRouter>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={App} />
    </BrowserRouter>
    </div>
  );
}

export default App;
