import React from 'react';
import Banner from '../Banner/Banner';
import Search from '../Banner/Search';
import MainFeature from './MainFeature';

const Home = () => {
    return (
        <>
        
        <div className='container mx-auto'>
            <div className="relative">
                <Banner></Banner>

            </div>
            <div className="   "  >
                <div className="relative">
                <Search></Search>
                </div>
                <div className="flex justify-center mt-10 ">
                <MainFeature></MainFeature>
            </div>
            </div>
            
            
        </div>
        </>
    );
};

export default Home;