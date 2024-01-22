import React from 'react';
import Navbar from '../pages/shared/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>

            <div className=' relative w-full flex justify-center '>
            {/* <div className=" container  absolute  bg-opacity-20 w-full   
       bg-sky-200 h-32  lg:h-96 lg:rotate-12 py-60 lg:p-80 md:rounded-3xl  -top-52">

                </div> */}
                <div className=" container  absolute  bg-opacity-20 w-full   
       bg-sky-300 h-32  lg:h-96 lg:-rotate-12 py-60 lg:p-80 md:rounded-3xl  -top-52">

                </div>
                

                <div className="container ">
                    <Navbar></Navbar>

                </div>

            </div>
            <Outlet></Outlet>


            <div className="">
                {/* footer */}
            </div>







        </div>
    );
};

export default Main;