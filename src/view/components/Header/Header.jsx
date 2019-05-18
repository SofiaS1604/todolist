import React, { Component } from 'react';
import "./Header.sass";

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