import React from "react";
import { Link } from "react-router-dom";
import "./card.css";
const Card = props => {
  return (
    <div className="col-4">
      <div className="myCard transition">
        <h2 className="transition"> {props.title}</h2>
        <p>Car Number: {props.number}<br/>
        Price Per Hour: {props.price}</p>
        <div className="cta-container transition">
          <Link to="/user/booking" className="cta">
            Book a Ride
          </Link>
        </div>
        <div className="card_circle transition"></div>
      </div>
    </div>
  );
};

export default Card;
