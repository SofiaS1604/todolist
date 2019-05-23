import * as React from 'react';
import PropTypes from "prop-types";

import Header from "../Header/Header.jsx"
import "./Page.sass";

const Page = ({children}) => (
    <div>
        <Header/>
        {children}
    </div>
);

Page.propTypes = {
    children: PropTypes.any.isRequired
};

export default Page;