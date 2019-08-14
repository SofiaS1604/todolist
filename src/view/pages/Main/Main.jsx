import React from 'react';

import Tasks from '../../widgets/Tasks/Tasks';

class  Main extends React.Component {
    render(){
        return(
            <div className="main">
                <Tasks/>
            </div>
        )
    }
}

export default Main;