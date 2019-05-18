import React, {Component} from 'react';
import './СheckmarkButton.sass';

class СheckmarkButton extends React.Component {
    render() {
        return (
            <div className={'task element_fulfilled'}>&#10003;</div>
        );
    }
}

export default СheckmarkButton;