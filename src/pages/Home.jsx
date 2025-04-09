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
        </div>
    );
};

export default Home;