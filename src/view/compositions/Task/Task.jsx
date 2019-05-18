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
            id: props.onCheckmarkClick.id,
            value: props.onTitle,
            status: props.onCheckmarkClick.status,
        };

        bindAll(this, [
            'onCheckmarkClickTask'
        ])
    }

    onCheckmarkClickTask(id){
        this.state.status = true;
        console.log(this.state.status)
    }


    render() {
        console.log(this.state);
        const value = this.state.value;
        return (
            <div className="list_children">
                <div className="task task_text">{value}</div>
                <RemoveButton />
                <СheckmarkButton onClick={this.onCheckmarkClickTask} onStatus={this.state.status}/>
            </div>
        );
    }
}

Task.propTypes = {
    value: PropTypes.string.isRequired,
    onCheckmarkClickTask: PropTypes.func,
};

Task.defaultProps = {
    value: '',
    onCheckmarkClickTask: () => null
};

export default Task;