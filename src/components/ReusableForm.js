import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='text'
          name='brand'
          placeholder='Brands' />
        <input
          type='number'
          name='price'
          min='0'
          placeholder='Price' />
        <input
          type='number'
          name='abv'
          min='0'
          max='100'
          placeholder='ABV' />
        <input
          type='number'
          name='pints'
          min='0'
          placeholder='Pints Available' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;