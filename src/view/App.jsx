import React, { Component } from 'react';
import {bindAll} from 'lodash';

import "./App.sass";
import Header from "./components/Header/Header";
import Form from  "./compositions/Form/Form";
import Task from  './compositions/Task/Task';



class App extends React.Component{
  render() {
    return (
      <div className="todo_list">
          <Header></Header>
          <main>
              <Form/>
              <div className="list">
                <Task/>
              </div>
          </main>
      </div>
    );
  }
}

export default App;