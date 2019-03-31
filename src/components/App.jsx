import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {bindAll} from 'lodash';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import update from 'react-addons-update';


import "./App.css";
import Header from "./Header/Header";
import Input from './Form/Input/Input';
import Button from './Form/Button/Button';
// import ButtonRemove from './Form/ButtonRemove/ButtonRemove';

let text_input = '';

class App extends React.Component{
  constructor (props) {
    super(props);

    this.state = {
      tasks: [],
      text_input,
    };

    bindAll(this, [
      'input_value',
      'form_submit', 
      'removeList',
    ]);

  }

  input_value(text_input) {
    this.setState({text_input});
  }

  removeList(e, id){
    this.setState((state) => ({
      tasks: state.tasks.filter(task => (task.id !== id))
    }));
  }

  fulfilledList(e, id){
    this.state.tasks.filter(task => (task.id === id))[0].status = true;
    this.setState((state) => ({
      tasks:[
        ...state.tasks,
      ]
    }));
  }


  form_submit () {
    const {text_input} = this.state;
    const tasks = this.state.tasks;
  
    if (!text_input || text_input.length === 0) {
      return;
    }

    let newId = tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 0
    this.setState((state) => ({
      tasks:[
        ...state.tasks,
        {
          id: newId,
          message: text_input,
          status: false
        }
      ]
    }));
  }

  render() {  
    const {text_input} = this.state;
    const tasks = this.state.tasks;

    return (
      <div className="todo_list">
          <Header></Header>
          <main>
              <div className="form">
                <Input onChange={this.input_value} value={this.state.text_input} ref={this.clearInput}/>
                <Button onClick={this.form_submit}></Button>
              </div>
              <div className="list">
                {tasks.map((task) => (
                    <div className="list_children" key={task.id}>
                      <div className="element_text">{task.message}</div>
                      <div className="element_remove" onClick={(e) => this.removeList(e, task.id)}>{'Remove'}</div>
                      <div className={task.status ? 'element_fulfilled-active' : 'element_fulfilled'} onClick={(e) => this.fulfilledList(e, task.id)}>&#10003;</div>
                    </div>
                ))}
              </div>
          </main>
      </div>
    );
  }
}



export default App;
