import React from 'react';
import Navbar from '../pages/shared/Navbar';
import { Outlet } from 'react-router-dom';

const Others = () => {
    return (
        <div className='container'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            //footer
        </div>
    );
};

export default Others;