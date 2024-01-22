import React from 'react';
import Banner from '../Banner/Banner';
import Search from '../Banner/Search';

const Home = () => {
    return (
        <div>
            <div className="relative">
                <Banner></Banner>

            </div>
            <div className="container mx-auto  "  >
                <div className="relative">
                <Search></Search>
                </div>
            </div>
            
        </div>
    );
};

export default Home;