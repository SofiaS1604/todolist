import  React, {Component} from 'react';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindAll} from  'lodash';
import {Tasks}  from 'actions';

import './Form.sass';
import Input from '../../components/Input/Input';
import InputButton from '../../components/InputButton/InputButton';

let valueInput = '';

class Form extends Component{
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

        // let newId = tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 0
        // this.setState((state) => ({
        //     tasks:[
        //         ...state.tasks,
        //         {
        //             id: newId,
        //             message: valueInput,
        //             status: false
        //         }
        //     ],
        //     valueInput: ' ',
        // }));
        this.props.addTask({
            valueInput,
            status: 'false'
        });

    }

    onEnter(valueInput){
        const tasks = this.state.tasks;

        if (!valueInput || valueInput.length === 0) {
            return;
        }

        // let newId = tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 0
        // this.setState((state) => ({
        //     tasks:[
        //         ...state.tasks,
        //         {
        //             id: newId,
        //             message: valueInput,
        //             status: false
        //         }
        //     ],
        //     valueInput: '',
        // }));
        this.props.addTask({
            valueInput,
            status: 'false'
        });

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

Form.propsTypes = {
   addTask: PropTypes.func.isRequired,
};

const stateProps = (state) => ({});

export default connect(stateProps,{
    addTask: Tasks.actions.add,
})(Form);