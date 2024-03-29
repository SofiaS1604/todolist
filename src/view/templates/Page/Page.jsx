import * as React from 'react';
import PropTypes from "prop-types";

import Header from "../Header/Header.jsx"

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