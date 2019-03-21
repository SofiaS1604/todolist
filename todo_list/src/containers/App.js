import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { createStore, renderDevTools } from '../utils/devTools.js';

import FriendListApp from './FriendListApp';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

// import React, { Component} from "react";
import "./App.css";

// class App extends Component{
//   render(){
//     return(
//       <div className="App">
//         <h1> Hi, World! </h1>
//       </div>
//     );
//   }
// }

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() => <FriendListApp /> }
        </Provider>

        {renderDevTools(store)}
      </div>
    );
  }
}

export default App;