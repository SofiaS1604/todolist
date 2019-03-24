import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import "./Header.css";

class Header extends React.Component{
    render(){
        return(
            <header>
                <div className="logo_title">To-do list</div>
            </header>
        )
    }
}

export default Header;