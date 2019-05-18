import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindAll} from 'lodash';
import {tasksAdd} from 'actions';

import './Form.sass';
import Input from '../../components/Input/Input';
import InputButton from '../../components/InputButton/InputButton';

let valueInput = '';
let newId = 0;

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            valueInput,
            newId,
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

    submitForm() {
        const {valueInput} = this.state;
        let id = this.state.newId + 1;

        if (!valueInput || valueInput.length === 0) {
            return;
        }

        this.setState({
            newId: id
        });

        this.props.tasksAdd({
            id,
            valueInput,
            status: 'false'
        });
    }

    onEnter(valueInput) {
        if (!valueInput || valueInput.length === 0) {
            return;
        }

        let id = this.state.newId + 1;

        this.setState({
            newId: id
        });

        this.props.tasksAdd({
            id,
            valueInput,
            status: 'false'
        });
    }

    render() {
        const valueInput = this.state.valueInput;
        return (
            <div className="form">
                <Input onChange={this.valueForm} value={valueInput} onEnterPress={this.onEnter}/>
                <InputButton onClick={this.submitForm}/>
            </div>
        )
    }
}

Form.propsTypes = {
    tasksAdd: PropTypes.func.isRequired,
};

const stateProps = (state) => ({});

export default connect(stateProps, {
    tasksAdd,
})(Form);
