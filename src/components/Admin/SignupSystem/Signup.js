import React, { Component } from "react";
import { Link } from "react-router-dom";
import Success from "../../utils/Success";

const users = JSON.parse(localStorage.getItem("admins")) || [];

class User {
  constructor(name, email, password) {
    this.id = Math.random().toString(36).substr (2, 9)
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

class Signup extends Component {
  chkPass = password => {
    if (password.length < 8) {
      this.refs.chkPass.innerHTML = "password contain at least 8 characters";
      return false;
    } else {
      return true;
    }
  };

  chkConfirmPass = (password, confirmPassword) => {
    if (password === confirmPassword) {
      return true;
    } else {
      this.refs.chkConfirmPass.innerHTML = "Confirm password not match";
      return false;
    }
  };

  chkEmail = email => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    } else {
      this.refs.chkEmail.innerHTML = "invalid email";
      return false;
    }
  };

  chkExsis = email => {
    const index = users.findIndex(el => {
      return el.email === email;
    });
    if (index !== -1) {
      this.refs.chkExsis.innerHTML = "User already exsist";
      return false;
    }
    return true;
  };
  popup = (i,path)=>{
    document.querySelector(`#success-${i}`).classList.add(`slide-in`)
    setTimeout(() =>{
      document.querySelector(`#success-${i}`).classList.remove("slide-in")
      setTimeout(()=>this.props.history.push(path), 800)
    }, 2500);
  }
  submitted = (e) => {
    e.preventDefault()
    let name = this.refs.name.value;
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let confirmPassword = this.refs.confirmPassword.value;
    // 12345678
    if (
      this.chkEmail(email) &&
      this.chkPass(password) &&
      this.chkConfirmPass(password, confirmPassword) &&
      this.chkExsis(email)
    ) {
      this.popup(1,"/admin/login")
      let user = new User(name, email, password);
      users.push(user);
      localStorage.setItem("admin", JSON.stringify(users));
      return true;
    }
    return false;
  };
  render() {
    return (
      <div className="app-container app-theme-white body-tabs-shadow">
        <Success color="green" name="User" condition="Added" i={1} />
        <div className="app-container">
          <div className="h-100">
            <div className="h-100 no-gutters row">
              <div className="h-100 d-md-flex d-sm-block bg-white justify-content-center align-items-center col-md-12 col-lg-7">
                <div className="mx-auto app-login-box col-sm-12 col-md-10 col-lg-9">
                  <div className="app-logo" ></div>
                  <h4>
                    <div>Welcome back Admin,</div>
                    <span>
                      It only takes a{" "}
                      <span className="text-success">few seconds</span> to
                      create your account as a Admin.
                    </span>
                  </h4>

                  <div>
                    <form action="/admin/login" onSubmit={this.submitted} >
                      <div className="form-row">
                        <div className="col-md-6">
                          <div className="position-relative form-group">
                            <label htmlFor="exampleEmail" className="">
                              <span className="text-danger">*</span> Email
                            </label>
                            <input
                              // name="email"
                              id="exampleEmail"
                              placeholder="Email here..."
                              type="email"
                              className="form-control"
                              ref="email"
                            />
                            <p ref="chkEmail"></p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="position-relative form-group">
                            <label htmlFor="exampleName" className="">
                              Name
                            </label>
                            <input
                              ref="name"
                              // name="text"
                              id="exampleName"
                              placeholder="Name here..."
                              type="text"
                              className="form-control"
                            />
                            >
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="position-relative form-group">
                            <label htmlFor="examplePassword" className="">
                              <span className="text-danger">*</span> Password
                            </label>
                            <input
                              ref="password"
                              // name="password"
                              id="examplePassword"
                              placeholder="Password here..."
                              type="password"
                              className="form-control"
                            />
                            <p ref="chkPass"></p>``
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="position-relative form-group">
                            <label htmlFor="examplePasswordRep" className="">
                              <span className="text-danger">*</span>{" "}
                              Confirm-Password
                            </label>
                            <input
                              ref="confirmPassword"
                              // name="passwordrep"
                              id="examplePasswordRep"
                              placeholder="Repeat Password here..."
                              type="password"
                              className="form-control"
                            />
                            <p ref="chkConfirmPass"></p>
                          </div>
                        </div>
                        <p ref="chkExsis"></p>
                      </div>
                      {/*! 12345678 */}
                      <div className="mt-4 d-flex align-items-center">
                        <h5 className="mb-0">
                          Already have an account?{" "}
                          <Link to="/admin/login" className="text-primary">
                            Sign in
                          </Link>
                        </h5>
                        <div className="ml-auto">
                          <button className="btn-wide btn-pill btn-shadow btn-hover-shine btn btn-primary btn-lg">
                            Create Account
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="d-lg-flex d-xs-none col-lg-5">
                <div className="slider-light">
                  <div className="slick-slider slick-initialized">
                    <div>
                      <div
                        className="h-100 d-flex justify-content-center align-items-center bg-premium-dark"
                        tabIndex="-1"
                      >
                        <div
                          className="slide-img-bg"
                          style={{
                            backgroundImage:
                              "url('resources/assets/images/originals/citynights.jpg')"
                          }}
                        ></div>
                        <div className="slider-content">
                          <h3>Rent a Car</h3>
                          <p>
                           You can avail our service 24/7 for rent a car.It is a good service at all.
                           If you are willing you can contact Us.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
