import React from 'react';
import Search from './Search';
 
const Banner = () => {
    return (
        <div className='  flex  justify-center items-center container mx-auto'>
                <div className=" md:w-1/2">
                <img className=' w-full ' src="https://i.ibb.co/Vggpj7h/landing.png" alt="" />
                </div>
                <div className="">
                    <Search></Search>
                </div>
        </div>
    );
};

export default Banner;