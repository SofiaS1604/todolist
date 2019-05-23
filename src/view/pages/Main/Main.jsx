import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindAll} from 'lodash';
import {tasksAdd} from 'actions';

import Form from '../../widgets/Form/Form'
import Tasks from '../../widgets/Tasks/Tasks';


class  Main extends React.Component {
    render(){
        return(
            <div className="main">
                <Form/>
                <Tasks/>
            </div>
        )
    }
}

export default Main;