import React, {Component} from 'react';
import PropTypes from 'prop-types';

const InputButton = ({text, onClick}) => (
    <div onClick={onClick}>{text}</div>
);

InputButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

InputButton.defaultProps = {
    onClick: () => null
};

export default InputButton;
