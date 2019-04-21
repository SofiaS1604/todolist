import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import PropTypes from 'prop-types';
import {debounce} from 'lodash';
import {bindAll} from 'lodash';


import './RemoveButton.sass';

class RemoveButton extends React.Component{
    render () {
        return (
            <div className="task element_remove">{'Remove'}</div>
        );
    }
}

export default RemoveButton;