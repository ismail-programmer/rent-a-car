import React, { Component } from "react";
import { Link } from "react-router-dom";

const users = JSON.parse(localStorage.getItem("users")) || [];

class User {
  constructor(name, email, password) {
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
      return false;
    }
    return true;
  };

  submitted = () => {
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
      let user = new User(name, email, password);
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      return true;
    }
    return false;
  };
  componentDidMount() {
    document.forms[0].onsubmit = this.submitted;
  }
  render() {
    return (
      <div>
        {/* // <div className="container">
        
      // <div className="row">
      //   <div className="col s6">
      //     <Link to="/home">
      //       <button className="btn white-text grey">Back to Home Page</button>
      //     </Link>
      //     <h2>Signup</h2>
      //     <form action="/login">
      //       <input type="text" ref="name" id="name" />
      //       <label htmlhtmlFor="name">Name</label>

      //       <input type="email" ref="email" id="email" />
      //       <label htmlhtmlFor="email">Email</label>
      //       <p ref="chkEmail"></p>

      //       <input type="password" ref="password" id="password" />
      //       <label htmlhtmlFor="password">Password</label>
      //       <p ref="chkPass"></p>

      //       <input type="password" ref="confirmPassword" id="confirmPassword" />
      //       <label htmlhtmlFor="confirmPassword">Confirm Password</label>
      //       <p ref="chkConfirmPass"></p>

      //       <button className="btn white-text grey">Register</button>
      //     </form>
      //   </div>
      // </div> 
       */}

        <div className="app-container app-theme-white body-tabs-shadow">
          <div className="app-container">
            <div className="h-100">
              <div className="h-100 no-gutters row">
                <div className="h-100 d-md-flex d-sm-block bg-white justify-content-center align-items-center col-md-12 col-lg-7">
                  <div className="mx-auto app-login-box col-sm-12 col-md-10 col-lg-9">
                    <div className="app-logo"></div>
                    <h4>
                      <div>Welcome,</div>
                      <span>
                        It only takes a{" "}
                        <span className="text-success">few seconds</span> to
                        create your account
                      </span>
                    </h4>

                    <div>
                      <form className="">
                        <div className="form-row">
                          <div className="col-md-6">
                            <div className="position-relative form-group">
                              <label htmlFor="exampleEmail" className="">
                                <span className="text-danger">*</span> Email
                              </label>
                              <input
                                name="email"
                                id="exampleEmail"
                                placeholder="Email here..."
                                type="email"
                                className="form-control"
                                ref="email"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="position-relative form-group">
                              <label htmlFor="exampleName" className="">
                                Name
                              </label>
                              <input
                                ref="name"
                                name="text"
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
                                name="password"
                                id="examplePassword"
                                placeholder="Password here..."
                                type="password"
                                className="form-control"
                              />
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
                                name="passwordrep"
                                id="examplePasswordRep"
                                placeholder="Repeat Password here..."
                                type="password"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 d-flex align-items-center">
                          <h5 className="mb-0">
                            Already have an account?{" "}
                            <Link to="/login" className="text-primary">
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
                <div class="d-lg-flex d-xs-none col-lg-5">
                  <div class="slider-light">
                    <div class="slick-slider slick-initialized">
                      <div>
                        <div
                          class="h-100 d-flex justify-content-center align-items-center bg-premium-dark"
                          tabindex="-1"
                        >
                          <div
                            class="slide-img-bg"
                            style={{
                              backgroundImage:
                                "url('resources/assets/images/originals/citynights.jpg');"
                            }}
                          ></div>
                          <div class="slider-content">
                            <h3>Scalable, Modular, Consistent</h3>
                            <p>
                              Easily exclude the components you don't require.
                              Lightweight, consistent Bootstrap based styles
                              across all elements and components
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
      </div>
    );
  }
}

export default Signup;
