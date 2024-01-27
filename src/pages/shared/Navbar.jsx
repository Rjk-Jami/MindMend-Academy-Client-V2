import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const { user, } = useContext(AuthContext)
  const route = <>
    <li><Link to={"/"}>Home</Link></li>
    <li><Link to={"/colleges"}>Collages</Link></li>
    <li><Link to={"/admission"}>Admission</Link></li>
    <li><Link to={`/myCollege/${user?.email}`}>My Collage</Link></li>
  </>
  return (

    // 
    // 
    <div className=' mb-5 relative z-10 ' >
      <div className="navbar ">
        <div className="navbar-start ">
          <div className="flex items-center gap-3">
            <div className="drawer lg:hidden w-2/4">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="btn btn-ghost  drawer-button"><svg xmlns="http://www.w3.org/2000/svg" className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay">

                </label>
                <div className="p-4 w-80 min-h-full bg-base-200 text-base-content">
                  <div className="">
                    <label htmlFor="my-drawer" className=" btn btn-ghost  drawer-button"><IoMdClose className='text-2xl  '></IoMdClose></label>
                  </div>
                  <ul className=" text-xl mt-3 space-y-1">
                    {/* Sidebar content here */}

                    {route}

                  </ul>
                </div>
              </div>
            </div>
            <a className="opacity-95  text-2xl  w-8-"><span className='opacity-100 font-semibold text-2xl'>M</span>ind<span className='opacity-90 font-semibold text-2xl'>M</span>eld<span className='md:hidden'>&nbsp; </span><span className=''>&nbsp;</span><span className='font-semibold text-2xl opacity-90'>A</span>cademy</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex gap-5 px-1">
            {route}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <Link to={`/myProfile/${user.email}`} ></Link> : <Link to="/login">
              <BsPersonCircle className='text-2xl'></BsPersonCircle></Link>
          }
          {user && <><Link to={`/myProfile/${user.email}`}><div className=" flex gap-4 items-center"><div className=""><p className='text-md font-semibold'>{user.displayName}  </p></div><div className="avatar">
            <div className="w-10 rounded-full">
              <img src={user.photoURL} />
            </div>
          </div></div> </Link></>}

        </div>
      </div>
    </div>

  );
};

export default Navbar;