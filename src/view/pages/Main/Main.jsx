import React, {Component} from 'react';

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