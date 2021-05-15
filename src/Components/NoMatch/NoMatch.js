import React from 'react';
import notFount from '../../img/404.jpg';

const NoMatch = () => {
    return (
        <div style={{backgroundColor: '#F2F2F2', padding: '70px 0'}} className="notfount-area">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <img  src={notFount} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoMatch;