import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './RemoveButton.sass';

const RemoveButton = ({onClick}) => (
    <div className="task element_remove" onClick={onClick}>{'Remove'}</div>
);

RemoveButton.propTypes = {
    onClick: PropTypes.func
};

RemoveButton.defaultProps = {
    onClick: () => null
};

export default RemoveButton;