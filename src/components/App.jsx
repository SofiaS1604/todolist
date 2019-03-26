import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import {bindAll} from 'lodash';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import "./App.css";
import Header from "./Header/Header";
import Input from './Form/Input/Input';
import Button from './Form/Button/Button';

let text_input = '';
let list = [];
let id = 0;
let number = 0;


function   List_children(props) {
  return(
    <div className="list_children">
      <div className="list_text">{props.message}</div>
      <div className="list_remove">Remove</div>
    </div>
     
  )
}


class App extends React.Component{
  constructor (props) {
    super(props);

    this.state = {
      text_input: text_input,
      id: 0
    };

    bindAll(this, [
      'input_value',
      'form_submit'
    ]);


    
  }

  input_value(text_input) {
    this.setState({text_input});
  }

  form_submit () {
    const {text_input} = this.state;

    if (text_input === undefined || text_input.length < 1) {
      return;
    }else{
      id += 1;  
      list.push(this.state);
      list[number].id = id;
      number += 1;

    }
  }

  render() {  
    const {text_input} = this.state;

    let list_text = [];
    
    for(let i = 0; i < list.length; i++){
      list_text.push(list[i]);
    }

    return (
      <div className="todo_list">
          <Header></Header>
          <main>
              <div className="form">
                <Input onChange={this.input_value} value={text_input}/>
                <Button onClick={this.form_submit}></Button>
              </div>
              <div className="list">
                {list_text.map((message) => <List_children message={message.text_input} key={message.id} />)}
              </div>
          </main>
      </div>
    );
  }
}



export default App;
