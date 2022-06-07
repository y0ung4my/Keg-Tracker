import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingDecrementPints } = props;
  const stockedMessage = keg.pints === 0 ? "Sold Out!" : keg.pints;
  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.name} - {keg.brand} - {keg.abv}% - ${keg.price}</h3>
      <p><em>Pints Available: {stockedMessage}</em></p>
      <button onClick={props.onClickingEdit}>Update Keg</button> 
      <button onClick={() => onClickingDelete(keg.id)}>Remove Keg</button>
      <button onClick={() => onClickingDecrementPints(keg.id)}>Sell A Pint</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingDecrementPints: PropTypes.func
};

export default KegDetail;