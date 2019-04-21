import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import PropTypes from 'prop-types';
import {debounce} from 'lodash';
import {bindAll} from 'lodash';


import './Input.sass';

class Input extends React.Component{
    constructor (props) {
        super(props);
    
        this.state = {
          value: props.value,
        };

        this.onChangeDebounced = debounce(this.props.onChange);

        this.onChange = this.onChange.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
      }

      static getDerivedStateFromProps(prevState, nextProps) {
        if(nextProps.value !== prevState.value){
            nextProps.value = prevState.value;
         }
        return null;
      }

      onKeyPress(e){
          if(e.key === 'Enter'){
              this.props.onEnterPress(this.state.value);
          }
      }
    
      onChange (e) {
        this.setState({value: e.target.value});
        this.onChangeDebounced(e.target.value);    
      }
    
      render () {
        const {value} = this.state;
        
        return (
          <div>
            <input onChange={this.onChange} onKeyPress={this.onKeyPress} type="text" value={value} className="form_input-input" placeholder="Enter" />
          </div>
        );
      }
    }
    
    Input.propTypes = {
      onChange: PropTypes.func,
      value: PropTypes.string,
      onEnterPress: PropTypes.func
    };
    
    Input.defaultProps = {
      onChange: () => null,
      onEnterPress: () => null,
      value: ''
    };
    
export default Input; 