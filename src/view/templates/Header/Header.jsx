import React, { Component } from 'react';
import styles from "./Header.sass";

class Header extends React.Component{
    render(){
        return(
            <header>
                <div className={styles.logo_title}>To-do list</div>
            </header>
        )
    }
}

export default Header;