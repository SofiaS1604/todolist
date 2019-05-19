import * as React from 'react';
import RemoveButton from "../../components/RemoveButton/RemoveButton";
import {bindAll} from 'lodash';
import СheckmarkButton from "../../components/СheckmarkButton/СheckmarkButton";
import PropTypes from 'prop-types';
import "./Task.sass";


class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            id: props.onRemoveClick,
            value: props.onTitle,
            status: props.onCheckmarkClick,

        };

        bindAll(this, [
            'onCheckmarkClickTask',
            'onRemoveClickTask'
        ])
    }

    onCheckmarkClickTask(){
        this.state.status = true;

        this.setState({
            status: true
        });
    }

    onRemoveClickTask(){

    }


    render() {
        const value = this.state.value;
        const status = this.state.status;
        return (
            <div className="list_children">
                <div className="task task_text">{value}</div>
                <RemoveButton onClick={this.onRemoveClickTask}/>
                <div className={status ? 'task element_fulfilled-active' : 'task element_fulfilled'}>
                    <СheckmarkButton onClick={this.onCheckmarkClickTask} />
                </div>
            </div>
        );
    }
}

Task.propTypes = {
    value: PropTypes.string.isRequired,
    onCheckmarkClickTask: PropTypes.func,
    onRemoveClickTask: PropTypes.func
};

Task.defaultProps = {
    value: '',
    onCheckmarkClickTask: () => null,
    onRemoveClickTask: () => null
};

export default Task;