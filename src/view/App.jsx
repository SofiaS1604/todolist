import React, { Component } from 'react';
import {bindAll} from 'lodash';

import "./App.sass";
import Header from "./components/Header/Header";
import Form from  "./compositions/Form/Form";
import Task from  './compositions/Task/Task';
import PropTypes from "prop-types";
import {connect} from "react-redux/src";
import {Tasks} from "actions/index";



class App extends React.Component{
    constructor(props){
        super(props);
        this.props.addTasks();
    }
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

Task.propTypes = {
    addTasks: PropTypes.func.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.shape())
};


const stareProps = (state) => ({
    tasks: state.tasks.tasks
});

export default connect(stareProps, {
    addTasks : Tasks.actions.add,
}(App));