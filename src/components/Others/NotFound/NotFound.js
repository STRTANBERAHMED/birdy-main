import React from 'react';
import { NavLink } from 'react-router-dom';
import notfound from '../../../Images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={notfound} alt="" />
            <NavLink to="/"><button className="bg-info text-white my-5 font-bold py-2 px-4 rounded">Go Back</button></NavLink>
        </div>
    );
};

export default NotFound;