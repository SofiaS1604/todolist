import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {bindAll} from 'lodash';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import update from 'react-addons-update';


import "./App.scss";
import Header from "./Header/Header";
import Input from './Form/Input/Input';
import Button from './Form/Button/Button';

let valueInput = '';

class App extends React.Component{
  constructor (props) {
    super(props);

    this.state = {
      tasks: [],
      valueInput,
    };

    bindAll(this, [
      'valueForm',
      'submitForm', 
      'removeList',
    ]);

  }

  valueForm(valueInput) {
    this.setState({valueInput});
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


  submitForm () {
    const {valueInput} = this.state;
    const tasks = this.state.tasks;
  
    if (!valueInput || valueInput.length === 0) {
      return;
    }

    let newId = tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 0
    this.setState((state) => ({
      tasks:[
        ...state.tasks,
        {
          id: newId,
          message: valueInput,
          status: false
        }
      ],
      valueInput: ' ',
    })); 
  }

  render() {  
    const valueInput = this.state.valueInput;
    const tasks = this.state.tasks;
    
    return (
      <div className="todo_list">
          <Header></Header>
          <main>
              <div className="form">
                <Input onChange={this.valueForm} value={valueInput} />
                <Button onClick={this.submitForm}></Button>
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
