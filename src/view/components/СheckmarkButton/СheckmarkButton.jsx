import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import PropTypes from 'prop-types';
import {debounce} from 'lodash';
import {bindAll} from 'lodash';


import './СheckmarkButton.sass';

class СheckmarkButton extends React.Component{
    render () {
        return (
            <div className={'task element_fulfilled'} >&#10003;</div>
        );
    }
}

export default СheckmarkButton;