import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import PropTypes from 'prop-types';
import {debounce} from 'lodash';
import {bindAll} from 'lodash';


import './Input.css';

class Input extends React.Component{
    constructor (props) {
        super(props);
    
        this.state = {value: props.value};

        this.onChangeDebounced = debounce(this.props.onChange);
        this.onChange = this.onChange.bind(this);
      }
    
      onChange (e) {
        this.setState({value: e.target.value});
        this.onChangeDebounced(e.target.value);
      }
    
      
      render () {
        const {value} = this.state;
    
        return (
          <div>
            <input onChange={this.onChange} type="text" value={value} className="form_input-input" placeholder="Enter"/>
          </div>
        );
      }
    }
    
    Input.propTypes = {
      onChange: PropTypes.func,
      value: PropTypes.string
    };
    
    Input.defaultProps = {
      onChange: () => null,
      value: ''
    };
    
export default Input; 