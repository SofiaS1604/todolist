import * as React from 'react';
import RemoveButton from "../../components/RemoveButton/RemoveButton";
import СheckmarkButton from "../../components/СheckmarkButton/СheckmarkButton";
import PropTypes from 'prop-types';
import "./Task.sass";


class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.onTitle
        };

    }


    render() {
        const value = this.state.value;
        return (
            <div className="list_children">
                <div className="task task_text">{value}</div>
                <RemoveButton/>
                <СheckmarkButton/>
            </div>
        );
    }
}

Task.propTypes = {
    value: PropTypes.string.isRequired
};

Task.defaultProps = {
    value: ''
};

export default Task;