import React, { Component } from "react";
// import { Link } from "react-router-dom";

const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

const users = JSON.parse(localStorage.getItem("users"));
const userIndex = JSON.parse(localStorage.getItem("userIndex"));
let activeUser = users[userIndex];

const carDetails = JSON.parse(localStorage.getItem("carDetails"));

class Booking {
  constructor(from, to, date, vechileId) {
    this.id = Math.random()
      .toString(36)
      .substr(2, 6);
    this.userId = activeUser.id;
    this.from = from;
    this.to = to;
    this.date = date;
    this.vechileId = vechileId;
    // this.status = 'Free'
  }
}

class User_Booking extends Component {
  showOptions = () => {
    const fileredCars = carDetails.filter((el, i) => {
      if (el.bookedStatus === false) {
        console.log(el);
        return true;
      }
    });
    console.log(fileredCars.map(el=>{
      console.log(el)
    }))
    return fileredCars.map((el, i) => {
      return (
        <option value={el.model} key={i}>
          {el.model}
        </option>
      );
    });
  };
  render() {
    return (
      <div className="app-container app-theme-white body-tabs-shadow">
        <div className="app-container">
          <div className="h-100">
            <div className="h-100 no-gutters row">
              <div className="h-100 d-md-flex d-sm-block bg-white justify-content-center align-items-center col-md-12 col-lg-7">
                <div className="mx-auto app-login-box col-sm-12 col-md-10 col-lg-9">
                  <div className="app-logo"></div>
                  <h4>
                    <div>Welcome,{users[userIndex].name}</div>
                    <span>
                      It only takes a{" "}
                      <span className="text-success">few seconds</span> to book
                      a ride.
                    </span>
                  </h4>

                  <div>
                    <form
                      action="/user/dashboard"
                      onSubmit={() => {
                        if (this.refs.select.selectedIndex !== 0) {
                          let bookedCarDetails = new Booking(
                            this.refs.from.value,
                            this.refs.to.value,
                            this.refs.date.value,
                            carDetails[this.refs.select.selectedIndex - 1].id
                          );
                          carDetails[
                            this.refs.select.selectedIndex - 1
                          ].bookedStatus = true;
                          bookings.push(bookedCarDetails);
                          localStorage.setItem(
                            "carDetails",
                            JSON.stringify(carDetails)
                          );
                          localStorage.setItem(
                            "bookings",
                            JSON.stringify(bookings)
                          );
                        }
                      }}
                    >
                      <div className="form-row">
                        <div className="col-md-6">
                          <div className="position-relative form-group">
                            <label htmlFor="from" className="">
                              <span className="text-danger">*</span> From
                            </label>
                            <input
                              required
                              id="from"
                              placeholder="From Where You Want to go..."
                              type="text"
                              className="form-control"
                              ref="from"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="position-relative form-group">
                            <label htmlFor="to" className="">
                              <span className="text-danger">*</span> To
                            </label>
                            <input
                              required
                              ref="to"
                              id="to"
                              placeholder="Where you Want to go..."
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="position-relative form-group">
                            <label htmlFor="date" className="">
                              <span className="text-danger">*</span> Date
                            </label>
                            <input
                              required
                              ref="date"
                              id="date"
                              placeholder="Write the Date when you want to go..."
                              type="date"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="position-relative form-group">
                            <label htmlFor="date" className="">
                              <span className="text-danger">*</span> Selecting
                              Cars
                            </label>
                            <select
                              ref="select"
                              className="form-control"
                              id="cars"
                            >
                              <option value="car">Select Your Car</option>
                              {/* {showOptions()} */}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 d-flex align-items-center">
                        <div className="ml-auto">
                          <button className="btn-wide btn-pill btn-shadow btn-hover-shine btn btn-primary btn-lg">
                            Book Vechile
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
                            You can avail our service 24/7 for rent a car.It is
                            a good service at all. If you are willing you can
                            contact Us.
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

export default User_Booking;
