import React from 'react';
import Navbar from './pages/shared/Navbar';
import Banner from './pages/Banner/Banner';
import "./App.css"
import Search from './pages/Banner/Search';
const App = () => {
  return (
    <div className=''>
      <div className=' relative w-full flex justify-center '>
      
        <div className=" container  absolute  bg-opacity-10 w-full   
       bg-cyan-500 h-32  lg:h-96 lg:-rotate-12 p-80 md:rounded-3xl  -top-52">
         
        </div>
        
        <div className="container ">
      <Navbar></Navbar>

      </div>
      
      </div>
      <div className="relative">
      <Banner></Banner>

      </div>
      <div className="flex justify-center">
      <Search></Search>
      </div>



      



    </div>

  );
};

export default App;