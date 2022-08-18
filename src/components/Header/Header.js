import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className='header-container'>
            <Link to="/">Home</Link>
            <Link to="/orderreview">Order Review</Link>
            <Link to="/grandpa">Grandpa</Link>
        </div>
    );
};

export default Header;