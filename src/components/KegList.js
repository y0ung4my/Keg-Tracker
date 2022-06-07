import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) { 
  
  return (
    <React.Fragment>
      <hr />
      {props.kegList.map((keg) => // Loop through the list passed down from KegControl.
        <Keg
          whenKegClicked={ props.onKegSelection }
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          abv={keg.abv}
          pints={keg.pints === 0 ? "Out of stock!" : keg.pints}
          id={keg.id}
          key={keg.id} />
      )}
    </React.Fragment>
  );
}

// Add propTypes for kegList
KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;
  
