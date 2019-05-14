import React, { Component } from 'react';
import {bindAll, debounce} from 'lodash';

import "./Task.sass";
import RemoveButton from "../../components/RemoveButton/RemoveButton";
import СheckmarkButton from "../../components/СheckmarkButton/СheckmarkButton";
import PropTypes from "prop-types";



import {Tasks} from 'actions';
import {connect} from "react-redux/src";
import {ThunkAction as getState} from "redux-thunk";


class Task extends React.Component{
    constructor (props){
        super(props);

    }


    render () {
        console.log(Task.propTypes);

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