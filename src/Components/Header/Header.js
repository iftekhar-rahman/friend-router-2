import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{textAlign: 'center', padding: '15px', borderBottom: '1px solid #ccc'}} className="header-area">
            <Link to="/home"><h1>Logo</h1></Link>
        </div>
    );
};

export default Header;