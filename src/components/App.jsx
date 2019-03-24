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

let value = '';
let list = [];




class App extends React.Component{
  constructor (props) {
    super(props);

    this.state = {
      val: value
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
    console.log('=_');

    if (text_input === undefined || text_input.length === 0) {
      return;
    }else{
      list.push(text_input);
      this.createList(); 
    }
  }

  createList(){
    console.log('fdlgkjd');
    for(let i = 0; i < list.length; i++){
      return <Input/>
    }
  }
  
  render() {  
    const {text_input} = this.state;
    
    return (
      <div className="todo_list">
          <Header></Header>
          <main>
              <div className="form">
                <Input onChange={this.input_value} value={text_input}/>
                <Button onClick={this.form_submit}></Button>
              </div>
              <div className="list">
                    {this.createList()}
              </div>
          </main>
      </div>
    );
  }
}

// function remove_list () {
//   console.log('hi');
// }

// function List_add(){
//   let list_length = list.length;
//   document.querySelector('.list').innerHTML = ' ';
//   for(let i = 0; i < list_length; i++){
//     let list_children = document.createElement('div');
//     list_children.className = 'list_children list_children-'+i;
//     list_children.innerHTML = '<div className="list_children-text">'+list[i]+'</div><div onClick={remove_list('+i+')} className="list_children-remove">Remove</div>';
//     document.querySelector('.list').appendChild(list_children);
//   }
// }



export default App;
