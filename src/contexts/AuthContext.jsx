import React, { Component } from "react";
import {Link} from 'react-router-dom';

const userIndex = localStorage.setItem("userIndex", JSON.stringify("userIndex"));

export default class AuthContext extends Component {
  state = {
    isLogged: false
  };

  loggedIn = userIndex => {
    if (userIndex !== null) {
      this.setState({ isLogged: true });
    } else {
   return   <div>
        You are not logged in.
        <Link to="/login">Plase go and login</Link>
      </div>;
    }
  };

  loggedOut = () => {
  this.setState({
      isLogged: false
  })
    //   <div>
    //     You are not logged in.
    //     <Link to="/login">Plase go and login</Link>
    //   </div>;
    }
  


  



  render() {
    return (
      <div>
        <AuthContext.Provider
          value={{
            ...this.state,
           loggedIn:this.loggedIn,
           loggedOut:this.loggedOut
          }}
        >
          {this.props.children}
        </AuthContext.Provider>
      </div>
    );
  }
}


