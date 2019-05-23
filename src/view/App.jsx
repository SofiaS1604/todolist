import * as React from 'react';
import {bindAll} from 'lodash';
import Header from "./templates/Header/Header";
import Form from "./widgets/Form/Form";
import Task from './templates/Task/Task';
import Tasks from './widgets/Tasks/Tasks';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {tasksAdd} from "actions";
import Main from "./pages/Main/Main.jsx";
import Page from "./templates/Page/Page.jsx";
import "./App.sass";


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log( this.props.tasks ) ;
        // const valueInput = this.state.valueInput;
        const tasks = this.props.tasks;

        return (
            <div className="todo_list">
                <Page>
                    <Main/>
                </Page>
            </div>
        );
    }
}

App.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({})
    ).isRequired,
    tasksAdd: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    tasks: state.tasks.list
});

export default connect(mapStateToProps, {
    tasksAdd
})(App);