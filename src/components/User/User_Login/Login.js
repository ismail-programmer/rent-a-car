import React, { Component } from "react";
import { Link } from "react-router-dom";
import Success from '../../utils/Success'
class Login extends Component {
  isCorrect = e => {
    e.preventDefault();
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const index = users.findIndex(el => email === el.email);
    if (users[index].password === password) {
      if (index !== -1) {
        this.refs.chkEmail.style.display = `none`;
        document.querySelector(".success-outer").classList.add("slide-in")
        localStorage.setItem("userIndex", JSON.stringify(index));
        setTimeout(() =>{
          document.querySelector(".success-outer").classList.remove("slide-in")
          setTimeout(()=>this.props.history.push("/user/dashboard"), 800)
        }, 2500);
        return true;
      }
      this.refs.chkPass.innerHTML = "password is incorrect";
      return false;
    } else {
      this.refs.chkEmail.innerHTML = "user is not registered";
      return false;
    }
  };
  render() {
    return (
      <div className="app-container app-theme-white body-tabs-shadow">
        <Success color="green" name="User" condition="Logged IN" elClass="" />
        <div className="app-container">
          <div className="h-100">
            <div className="h-100 no-gutters row">
              <div className="d-none d-lg-block col-lg-4">
                <div className="slider-light">
                  <div className="slick-slider">
                    <div>
                      <div
                        className="h-100 d-flex justify-content-center align-items-center bg-plum-plate"
                        tabIndex="-1"
                      >
                        <div
                          className="slide-img-bg"
                          style={{
                            backgroundImage:
                              "url('../../resources/assets/images/originals/city.jpg')"
                          }}
                        ></div>
                        <div className="slider-content">
                          <h3>Rent A Car</h3>
                          <p>
                            You can avail our service 24/7 for rent a car.It is
                            a good service at all. If you are willing you can
                            contact Us.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* 
                    <div>
                      <div
                        className="h-100 d-flex justify-content-center align-items-center bg-premium-dark"
                        tabIndex="-1"
                      >
                        <div
                          className="slide-img-bg"
                          style={{
                            backgroundImage:
                              "url('../../resources/assets/images/originals/citynights.jpg')"
                          }}
                        ></div>
                        <div className="slider-content">
                          <h3>Scalable, Modular, Consistent</h3>
                          <p>
                            Easily exclude the components you don't require.
                            Lightweight, consistent Bootstrap based styles
                            across all elements and components
                          </p>
                        </div>
                      </div>
                    </div> 
                    <div>
                      <div
                        className="h-100 d-flex justify-content-center align-items-center bg-sunny-morning"
                        tabIndex="-1"
                      >
                        <div
                          className="slide-img-bg"
                          style={{
                            backgroundImage:
                              "url('../../resources/assets/images/originals/citydark.jpg')"
                          }}
                        ></div>
                        <div className="slider-content">
                          <h3>Complex, but lightweight</h3>
                          <p>
                            We've included a lot of components that cover almost
                            all use cases for any type of application.
                          </p>
                        </div>
                      </div>
                    </div>*/}
                  </div>
                </div>
              </div>
              <div className="h-100 d-flex bg-white justify-content-center align-items-center col-md-12 col-lg-8">
                <div className="mx-auto app-login-box col-sm-12 col-md-10 col-lg-9">
                  <div className="app-logo"></div>
                  <h4 className="mb-0">
                    <span className="d-block">Welcome back,</span>
                    <span>Please sign in to your account.</span>
                  </h4>
                  <h6 className="mt-3">
                    No account?{" "}
                    <Link to="/admin/signup" className="text-primary">
                      Sign up now
                    </Link>
                  </h6>
                  <div className="divider row"></div>
                  <div>
                    <form onSubmit={this.isCorrect} className="" action="/user/dashboard">
                      <div className="form-row">
                        <div className="col-md-6">
                          <div className="position-relative form-group">
                            <label htmlFor="exampleEmail" className="">
                              Email
                            </label>
                            <input
                              // name="email"
                              id="exampleEmail"
                              placeholder="Email here..."
                              type="email"
                              className="form-control"
                              ref="email"
                            />
                            <p className="red" ref="chkEmail"></p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="position-relative form-group">
                            <label htmlFor="examplePassword" className="">
                              Password
                            </label>
                            <input
                              // name="password"
                              id="examplePassword"
                              placeholder="Password here..."
                              type="password"
                              className="form-control"
                              ref="password"
                            />
                            <p className="red" ref="chkPass"></p>
                          </div>
                        </div>
                      </div>
                      <div className="divider row"></div>
                      <div className="d-flex align-items-center">
                        <div className="ml-auto">
                          <button className="btn btn-primary btn-lg">
                            Login to Dashboard
                          </button>
                        </div>
                      </div>
                    </form>
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

export default Login;
