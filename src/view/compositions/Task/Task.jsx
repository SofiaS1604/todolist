import * as React from 'react';
import {bindAll, debounce} from 'lodash';
import RemoveButton from "../../components/RemoveButton/RemoveButton";
import СheckmarkButton from "../../components/СheckmarkButton/СheckmarkButton";
import PropTypes from 'prop-types';
import "./Task.sass";


class Task extends React.Component {
    constructor (props){
        super(props);
    }

    render () {
        return (
            <div className="list_children">
                <div className="task task_text"></div>
                <RemoveButton/>
                <СheckmarkButton/>
            </div>
        );
    }
}

export default Task;