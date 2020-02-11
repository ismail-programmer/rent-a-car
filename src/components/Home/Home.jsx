import React, { Component } from "react";
import Card from "./card";

class Home extends Component {
  showCards = () => {
    const cars = JSON.parse(localStorage.getItem("carDetails")) || [];
    return cars.map((el, i) => ( 
      <Card key={i} title={el.model} price={el.price} number={el.num} />
    ));
  };
  render() {
    return (
      <div>
        <div className="row">
          <h1 className="col-4">Cars</h1>
        </div>
        <div className="row">{this.showCards()}</div>
      </div>
    );
  }
}

export default Home;
