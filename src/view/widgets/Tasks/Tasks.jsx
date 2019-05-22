import * as React from 'react';
import {bindAll} from 'lodash';
import Task from '../../templates/Task/Task';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {tasksAdd} from "actions";

import './Tasks.sass';

class Tasks extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const tasks = this.props.tasks;
        return(
            <div className="list">
                {tasks.map((task) => {
                    return (
                        <Task key={task.id} onTitle={task.valueInput} onCheckmarkClick={task.status} onRemoveClick={task.id}/>
                    )
                })}
            </div>
        )
    }
}


Tasks.propTypes = {
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
})(Tasks);
