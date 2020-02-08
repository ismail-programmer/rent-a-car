import React, { Component } from "react";
import { Link } from "react-router-dom";

let bookings = JSON.parse(localStorage.getItem("bookings"));
let admin = JSON.parse(localStorage.getItem("admin"));
let adminIndex = localStorage.getItem("adminIndex");
const carDetails = JSON.parse(localStorage.getItem("carDetails"));
let index;

class EditCar extends Component {
  CarId = () => {
    let carid = bookings[index].vechileId;
    let matchId = carDetails.find(el => el.id === carid);
    return matchId.model;
  };

  showOptions = () => {
    const fileredCars = carDetails.filter((el) => {
      if (el.bookedStatus === false) {
        return true;
      }
      return false;
    });
    return fileredCars.map((el, i) => {
      return (
        <option value={el.model} key={i}>
          {el.model}
        </option>
      );
    });
  };

  constructor(props) {
    super(props);
    index = props.match.params.bookingId;
  }

  editDone = e => {
    //   e.preventDefault()
    let from = this.refs.from.value;
    let to = this.refs.to.value;
    let date = this.refs.date.value;
    bookings[index].from = from;
    bookings[index].to = to;
    bookings[index].date = date;
    // bookings[index].vechileId = vechileId;

    // carDetails[this.refs.select.selectedIndex].bookedStatus = false;
    // carDetails[this.refs.select.selectedIndex].bookedStatus = true;

    // localStorage.setItem("carDetails", JSON.stringify(carDetails));
    localStorage.setItem("bookings", JSON.stringify(bookings));
  };
  deleteCar = () => {
    bookings.splice(index, 1);
    localStorage.setItem("bookings", JSON.stringify(bookings));
  };
  render() {
    return (
      <div className="app-container app-theme-white body-tabs-shadow">
        <div className="app-container">
          <div className="h-100">
            <div className="h-100 no-gutters row">
              <div className="h-100 d-md-flex d-sm-block bg-white justify-content-center align-items-center col-md-12 col-lg-7">
                <div className="mx-auto app-login-box col-sm-12 col-md-10 col-lg-9">
                  <Link
                    className="btn-wide btn-pill btn-shadow btn-hover-shine btn btn-primary btn-lg"
                    to="/admin/dashboard"
                  >
                    Dashboard
                  </Link>

                  <div className="app-logo-1"></div>
                  <h4>
                    <div>Welcome, {admin[adminIndex].name}</div>
                    <span>
                      It only takes a{" "}
                      <span className="text-success">few seconds</span> to make
                      changes in vechile.
                    </span>
                  </h4>
                  <div>
                    <form
                      action="/admin/bookings_details"
                      onSubmit={this.editDone}
                    >
                      <div className="form-row">
                        <div className="col-md-6">
                          <div className="position-relative form-group">
                            <label htmlFor="from" className="">
                              <span className="text-danger">*</span> From
                            </label>
                            <input
                              defaultValue={bookings[index].from}
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
                              defaultValue={bookings[index].to}
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
                              defaultValue={bookings[index].date}
                              required
                              ref="date"
                              id="date"
                              placeholder="Write the Date when you want to go..."
                              type="date"
                              className="form-control"
                            />
                          </div>
                        </div>
                        {/* <div className="col-md-6">
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
                              <option value="car">Your previous Car is {this.CarId()}</option>
                              {this.showOptions()}
                            </select>
                        </div>
                          </div> */}
                      </div>
                      <div className="mt-4 d-flex align-items-center">
                        <div className="ml-auto">
                          <button className="btn-wide btn-pill btn-shadow btn-hover-shine btn btn-primary btn-lg">
                            Edit Details
                          </button>
                        </div>
                        <Link
                          to="/admin/bookings"
                          onClick={this.deleteCar}
                          className="btn-wide btn-pill btn-shadow btn-hover-shine btn btn-primary btn-lg"
                        >
                          Delete Booking
                        </Link>
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
                              "url('resources/assets/images/originals/city.jpg')"
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

export default EditCar;
