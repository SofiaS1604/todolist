import React, { Component } from 'react';
import {bindAll} from 'lodash';

import "./App.sass";
import Header from "./components/Header/Header";
import Form from  "./compositions/Form/Form";
import RemoveButton from  './components/RemoveButton/RemoveButton';
import CheckmarkButton from  './components/СheckmarkButton/СheckmarkButton';


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
      'onEnter'
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

  onEnter(valueInput){
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
      valueInput: '',
    }));
  }


  render() {
    const valueInput = this.state.valueInput;
    const tasks = this.state.tasks;

    return (
      <div className="todo_list">
          <Header></Header>
          <main>
              <Form/>
              <div className="list">
                {tasks.map((task) => (
                    <div className="list_children" key={task.id}>
                      <div className="task element_text">{task.message}</div>
                      <RemoveButton/>
                      <CheckmarkButton/>
                      </div>
                ))}
              </div>
          </main>
      </div>
    );
  }
}

export default App;