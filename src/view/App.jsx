import * as React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {tasksChange} from "actions";

import Main from "./pages/Main/Main.jsx";
import Page from "./templates/Page/Page.jsx";


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
    tasksChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    tasks: state.tasks.list
});

export default connect(mapStateToProps, {
    tasksChange
})(App);