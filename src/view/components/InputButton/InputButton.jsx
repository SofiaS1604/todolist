import React, {Component} from 'react';;
import PropTypes from 'prop-types';
import "./InputButton.sass";

const InputButton = ({onClick}) => (
    <button className="form_button" onClick={onClick}>Add</button>
);

InputButton.propTypes = {
    onClick: PropTypes.func
};

InputButton.defaultProps = {
    onClick: () => null
};


export default InputButton;
