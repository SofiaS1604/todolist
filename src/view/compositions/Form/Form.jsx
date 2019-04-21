import  React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import PropTypes from 'prop-types';
import {debounce} from 'lodash';
import {bindAll} from  'lodash';

import './Form.sass';
import Input from '../../components/Input/Input';
import InputButton from '../../components/InputButton/InputButton';

let valueInput = '';


class Form extends React.Component{
    constructor (props) {
        super(props);

        this.state = {
            tasks: [],
            valueInput,
        };

        bindAll(this, [
            'valueForm',
            'submitForm',
            'onEnter'
        ]);

    }

    valueForm(valueInput) {
        this.setState({valueInput});
    }




    submitForm () {
        const {valueInput} = this.state;
        const tasks = this.state.tasks;

        if (!valueInput || valueInput.length === 0) {
            return;
        }

        let newId = tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 0
        this.setState((state) => ({
            tasks:[
                ...state.tasks,
                {
                    id: newId,
                    message: valueInput,
                    status: false
                }
            ],
            valueInput: ' ',
        }));
    }

    onEnter(valueInput){
        const tasks = this.state.tasks;

        if (!valueInput || valueInput.length === 0) {
            return;
        }

        let newId = tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 0
        this.setState((state) => ({
            tasks:[
                ...state.tasks,
                {
                    id: newId,
                    message: valueInput,
                    status: false
                }
            ],
            valueInput: '',
        }));
    }


    render() {
        const valueInput = this.state.valueInput;

        return(
            <div className="form">
                <Input onChange={this.valueForm} value={valueInput}  onEnterPress={this.onEnter} />
                <InputButton onClick={this.submitForm}/>
            </div>
        )

    }
}

export default Form;