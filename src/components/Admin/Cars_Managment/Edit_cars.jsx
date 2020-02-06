import React, { Component } from 'react';
import { Link } from "react-router-dom";


let cars = JSON.parse(localStorage.getItem('carDetails'));
let admin = JSON.parse(localStorage.getItem('admin'));
let adminIndex = localStorage.getItem('adminIndex');
let index;
class EditCar extends Component {
  constructor(props){
    super(props)
    index = props.match.params.carId;
  }
  editDone = (e)=>{
    
    let num = this.refs.num.value;
    let model = this.refs.model.value;
    let owner = this.refs.owner.value;
    let price = this.refs.price.value;
    cars[index].num = num
    cars[index].model = model
    cars[index].owner= owner
    cars[index].price= price
    localStorage.setItem('carDetails', JSON.stringify(cars))
  }
  deleteCar = ()=>{
    cars.splice(index,1)
    localStorage.setItem('carDetails', JSON.stringify(cars))
    
  }
  render () {
    return (
      <div className="app-container app-theme-white body-tabs-shadow">
        <div className="app-container">
          <div className="h-100">
            <div className="h-100 no-gutters row">
              <div className="h-100 d-md-flex d-sm-block bg-white justify-content-center align-items-center col-md-12 col-lg-7">
                <div className="mx-auto app-login-box col-sm-12 col-md-10 col-lg-9">
             
                <Link className="btn-wide btn-pill btn-shadow btn-hover-shine btn btn-primary btn-lg" to="/admin/dashboard">Dashboard</Link>
             
             
                  <div className="app-logo-1"></div>
                  <h4>
                    <div>Welcome, {admin[adminIndex].name}</div>
                    <span>
                      It only takes a{" "}
                      <span className="text-success">few seconds</span> to make changes in
                      vechile.
                    </span>
                  </h4>
                  <div>
                    <form action="/admin/cars_details" onSubmit={this.editDone}>
                      <div className="form-row">
                        <div className="col-md-6">
                          <div className="position-relative form-group">
                            <label htmlFor="CarNum" className="">
                              <span className="text-danger">*</span> Number
                            </label>
                             <input required
                             defaultValue={cars[index].num}
                              id="CarNum"
                              placeholder="Write the Car Number here..."
                              type="text"
                              className="form-control"
                              ref="num"
                            />
                            <p className="red" ref="chkNum"></p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="position-relative form-group">
                            <label htmlFor="ModelName" className="">
                            <span className="text-danger">*</span>      Model Name
                            </label>
                             <input required
                              ref="model"
                              defaultValue={cars[index].model}
                              id="ModelName"
                              placeholder="Write the Car Model here..."
                              type="text"
                              className="form-control"
                            />
                            
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="position-relative form-group">
                            <label htmlFor="Owner" className="">
                              <span className="text-danger">*</span> Owner
                            </label>
                             <input required
                             defaultValue={cars[index].owner}
                              ref="owner"
                              id="Owner"
                              placeholder="Write the Owner Name of Car here..."
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="position-relative form-group">
                            <label htmlFor="price" className="">
                              <span className="text-danger">*</span> Price 
                            </label>
                             <input required
                              ref="price"
                              id="Price"
                              placeholder="Write the price of Car for renting per hour"
                              type="number"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 d-flex align-items-center">
                        <div className="ml-auto">
                          <button className="btn-wide btn-pill btn-shadow btn-hover-shine btn btn-primary btn-lg">
                            Edit Vechile
                          </button>
                    <Link to="/admin/cars_details" onClick={this.deleteCar} className="btn-wide btn-pill btn-shadow btn-hover-shine btn btn-primary btn-lg">Delete Car</Link>
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
    )
  }
}

export default EditCar