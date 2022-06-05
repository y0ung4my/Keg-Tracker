import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>{props.name} - {props.brand} - {props.abv}% - ${props.price}</h3>
        <p><em>Pints Available: {props.pints}</em></p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number,
  pints: PropTypes.number,
  whenKegClicked: PropTypes.func
};

export default Keg;