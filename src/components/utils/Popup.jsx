import React, { Component } from 'react';

class Popup extends Component {
    render(props) {
        return (
            <div>
              <p>
                   {props.details}
                  </p> 
            </div>
        );
    }
}

export default Popup;