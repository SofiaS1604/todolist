import React, { Component } from 'react';
import {bindAll, debounce} from 'lodash';

import "./Task.sass";
import RemoveButton from "../../components/RemoveButton/RemoveButton";
import СheckmarkButton from "../../components/СheckmarkButton/СheckmarkButton";
import PropTypes from "prop-types";


class Task extends React.Component{
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