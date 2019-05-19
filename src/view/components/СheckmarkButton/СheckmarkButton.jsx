import React, {Component} from 'react';
import './СheckmarkButton.sass';
import PropTypes from "prop-types";


const СheckmarkButton = ({onClick}) => (
    <div className="checkMark" onClick={onClick}>&#10003;</div>
);

СheckmarkButton.propTypes = {
    onClick: PropTypes.func
};

СheckmarkButton.defaultProps = {
    onClick: () => null
};


export default СheckmarkButton;