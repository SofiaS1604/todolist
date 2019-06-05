import * as React from 'react';
import {bindAll} from 'lodash';
import PropTypes from 'prop-types';
import styles from "./Task.sass";
import Button from "../../atoms/Button/Button.jsx";


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

    onCheckmarkClickTask() {
        this.state.status = true;

        this.setState({
            status: true
        });
    }

    onRemoveClickTask() {
        // console.log(this.state);
    }

    render() {
        // console.log(this.state);
        console.log(styles.task_text);
        const value = this.state.value;
        const status = this.state.status;
        return (
            <div className={"list_children"}>
                <div className={styles.task_text}>{value}</div>
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
    onCheckmarkClickTask: PropTypes.func.isRequired,
    onRemoveClickTask: PropTypes.func.isRequired
};

Task.defaultProps = {
    value: '',
    onCheckmarkClickTask: () => null,
    onRemoveClickTask: () => null
};

export default Task;