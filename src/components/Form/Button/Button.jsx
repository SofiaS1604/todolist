import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import "./Button.scss";

const Button = ({onClick}) =>(
  <button className="form_button" onClick={onClick}>Add</button>
)

Button.propTypes = {
  onClick: PropTypes.func
};

Button.defaultProps = {
  onClick: () => null
};


export default Button;
