import * as React from 'react';
// import RemoveButton from "../../components/RemoveButton/RemoveButton";
import {bindAll} from 'lodash';
// import СheckmarkButton from "../../components/СheckmarkButton/СheckmarkButton";
import PropTypes from 'prop-types';
import "./Task.sass";
import Button from "../../components/Button/Button.jsx";


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
        // console.log(this.state);
    }


    render() {
        // console.log(this.state);
        const value = this.state.value;
        const status = this.state.status;
        return (
            <div className="list_children">
                <div className="task task_text">{value}</div>
                <div className={'element_remove'}>
                    <Button onClick={this.onRemoveClickTask} text={'Remove'}/>
                </div>
                <div className={status ? 'task element_fulfilled-active' : 'task element_fulfilled'}>
                    <Button onClick={this.onCheckmarkClickTask} text={'✓'}/>
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