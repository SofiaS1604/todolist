import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./Button.sass";

const InputButton = ({text, onClick}) => (
    <div onClick={onClick}>{text}</div>
);

InputButton.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired
};

InputButton.defaultProps = {
    onClick: () => null
};

export default InputButton;
