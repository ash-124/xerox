import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Home = () => {
    const {vida} =useContext(AuthContext);
    return (
        <div>
            this is home 
            <p>
                {vida}
            </p>
            <p className='font-futura-normal'>this futura normal </p>
            <p className='font-futura-semi-bold'> this is futura semibold</p>
            <p className='font-galano-bold'> this is galano bold</p>
        </div>
    );
};

export default Home;