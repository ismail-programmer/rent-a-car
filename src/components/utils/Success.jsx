import React from 'react';
import './success.css'
const Success = (props) => {
  return (
    <div id={`success-${props.i}`} className="success-outer" style={{backgroundColor: props.color}}>
      <div className="success-inner">
        {props.name} has {props.condition} successfully {props.color === "gold" ? <span className="badge badge-pill badge-danger">Approval Needed</span>: ``}
      </div>
    </div>
  );
};

export default Success;