import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {FaShoppingCart ,FaUser , FaHeart, FaSearch ,FaBars} from 'react-icons/fa'
import logo from "../assets/women/women2.jpg";


function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isimageactive, setisimageactive] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleimgaeMenuToggle = () => {
    setisimageactive(!isimageactive);
  };

  return (
    <div className='w-full'>
      <nav className="bg-gray-800">
        <div className="mx-auto w-[90%] px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={handleMobileMenuToggle}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>

                <FaBars className="block h-6 w-6" />
                

                <FaBars className={`hidden h-6 w-6 ${isMobileMenuOpen ? 'block' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"/>
                
              </button>
            </div>
            {/* Your existing code goes here */}
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                {/* <img className="h-8  w-8 rounded-full" src={logo} alt="Your Company"  /> */}
                <h1 className='text-yellow-500 text-2xl font-extrabold'>Stoty </h1>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLink to={'/'} className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</NavLink>
                  <NavLink to={'/ef'} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</NavLink>
                  <NavLink to={'/ef'} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</NavLink>
                  <NavLink to={'/ef'} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</NavLink>
                
                </div>
              </div>
            </div>
            {/* Your existing code goes here */}
            <div className="absolute inset-y-0 right-0 flex justify-center gap-3 w-[25%] items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className=" items-center justify-between w-[250px] hidden  md:flex rounded-md border border-gray-700 px-2 ">
              <input type="search" placeholder='search' className='w-[90%] hidden p-3 md:block border-none bg-transparent text-xs placeholder:text-sm  text-white border border-gray-600 outline-none rounded-md h-[32px]' />
              <FaSearch size={20} color='white'/>

                </div>
              <FaShoppingCart size={24} className='text-gray-200'/>
              <FaHeart size={24} className='text-gray-200'/>
              {/* Profile dropdown */}
              <div  onClick={handleimgaeMenuToggle} className="relative ml-3">
                <div>
                  <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only"></span>
                    <FaUser size={24} color='white'/>
                  </button>
                </div>
                {/* Dropdown menu, show/hide based on menu state. */}
                {isimageactive ? (<> <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" >
                  <Link to={'jh'} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" >Your Profile</Link>
                  <Link to={'/ef'} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" >Settings</Link>
                  <Link to={'/ef'} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" >Sign out</Link>

                </div></>):null}

               
              </div>
            </div>
          </div>
        </div>







        {/* Mobile menu, show/hide based on menu state. */}
        <div className={`sm:hidden ${isMobileMenuOpen ? '' : 'hidden'}`} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col items-center justify-center gap-1">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <NavLink to={'/ef'} className="bg-gray-900 text-white  rounded-md px-3 py-2 text-base font-medium w-full h-[50px] flex items-center" aria-current="page">Dashboard</NavLink>
            <NavLink to={'/ef'} className="text-gray-300 hover:bg-gray-700 w-full  flex items-center h-[50px] hover:text-white  rounded-md px-3 py-2 text-base font-medium">Team</NavLink>
            <NavLink to={'/ef'} className="text-gray-300 hover:bg-gray-700 w-full  flex items-center h-[50px] hover:text-white  rounded-md px-3 py-2 text-base font-medium">Projects</NavLink>
            <NavLink to={'/ef'} className="text-gray-300 hover:bg-gray-700 w-full  flex items-center h-[50px] hover:text-white  rounded-md px-3 py-2 text-base font-medium">Calendar</NavLink>
            <input type="search" placeholder='search' className='  w-[99%]  h-[50px] p-3  border-t-none bg-transparent text-lg placeholder:text-sm  text-white border border-gray-600 outline-none rounded-md ' />
          
          </div>
        </div>
      </nav>
      <div className="w-full">
        
      </div>
    </div>
  );
}

export default NavBar;
