import * as React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";

import Header from "../Header/Header.jsx"

import "./Page.sass";


class Page extends React.Component {
    render(){
        return(
            <Header/>
        )
    }
}

export default Page;