import * as React from 'react';
import {bindAll} from 'lodash';
import Task from '../../templates/Task/Task';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {tasksChange} from "actions";
import styles from "./Tasks.sass"
import Input from "view/atoms/Input/Input";
import Button from "view/atoms/Button/Button";

class Tasks extends React.Component {
    constructor(props) {
        super(props);

        bindAll(this, [
            'valueForm',
            'submitForm',
            'onRemove',
            'onCheckmark'
        ]);

        this.state = {
            valueInput: '',
        };
    }

    valueForm(valueInput) {
        this.setState({valueInput});
    }

    submitForm () {
        const {valueInput} = this.state;
        const {tasks} = this.props;

        if (!valueInput || valueInput.length === 0) {
            return;
        }

        const newId = tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 0;

        this.props.tasksChange([...tasks, {
            id: newId,
            message: valueInput,
            status: false
        }]);
    }

    onRemove (id) {
        const {tasks} = this.props;
        const newTasks = tasks.filter((task) => task.id !== id);

        this.props.tasksChange(newTasks);
    }

    onCheckmark (id) {
        const {tasks} = this.props;
        const  newTasks = tasks.map((task) => {
            if (task.id === id) {
                task.status = !task.status;
            }
            return task;
        });

        this.props.tasksChange(newTasks);
    }

    render(){
        const tasks = this.props.tasks;
        const {valueInput} = this.state;

        return(
            <div className={styles.tasks}>
                <div className={styles.tasks_addForm}>
                    <Input onChange={this.valueForm} value={valueInput} onEnterPress={this.submitForm}/>
                    <button className={styles.form_button}>
                        <Button onClick={this.submitForm}  text={'Add'}/>
                    </button>
                </div>
                <div className={styles.tasks_list}>
                    {tasks.map((task) => (
                        <Task
                            message={task.message}
                            status={task.status}
                            key={task.id}
                            onCheckmarkClick={() => this.onCheckmark(task.id)}
                            onRemoveClick={() => this.onRemove(task.id)}
                        />
                    ))}
                </div>
            </div>
        )
    }
}


Tasks.propTypes = {
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
})(Tasks);
