import * as React from 'react';
import {bindAll} from 'lodash';
import Header from "./components/Header/Header";
import Form from  "./compositions/Form/Form";
import Task from  './compositions/Task/Task';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {tasksAdd} from "actions";
import "./App.sass";


class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="todo_list">
        <Header />
        <main>
          <Form />
          <div className="list">
            <Task />
          </div>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired,
  tasksAdd: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  tasks: state.tasks.list
});

export default connect(mapStateToProps, {
  tasksAdd
})(App);