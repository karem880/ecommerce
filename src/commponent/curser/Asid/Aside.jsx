import React from 'react';
import { FaOutdent, FaSchool, FaVideo, FaThList, FaComments, FaUsers, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div dir='rtl' className='flex flex-col h-screen w-[250px] items-center justify-center rounded-tr-2xl bg-white shadow'>
      <div className='flex items-center justify-center gap-5 mt-5 h-20 '>
        <h1 className='text-2xl'>HESSA</h1>
        <FaSchool className='text-2xl text-gray-700 font-extrabold' />
      </div>
      <div className='flex flex-col items-center gap-2 w-[90%] mt-10 flex-grow' dir='rtl'>
        <NavItem icon={<FaVideo size={20} />} link={"/PaidVedio"} label='الفيديوهات المدفوعه' />
        <NavItem icon={<FaThList size={20} />} link={"products"} label='الكويزات المدفوعه' />
        <NavItem icon={<FaVideo size={20} />} link={"free"} label='الفيديوهات المجانيه ' />
        <NavItem icon={<FaThList size={20} />} link={"products"} label='الكويزات المجانيه' />
        <NavItem icon={<FaComments size={20} />} link={"Comments"} label='التعليقات' />
        <NavItem icon={<FaUsers size={20} />} link={"/admins"} label=' المسؤولون ' />
        <NavItem icon={<FaUser size={20} />} link={"Profile"} label='الطلاب' />
        <NavLink to={"/login"} onClick={() => {
          localStorage.removeItem('token');
        }} className='flex w-full items-center justify-between p-4 rounded-lg hover:bg-blue-700 hover:text-white cursor-pointer duration-1000'>
          <span className='text-lg mt-2 w-[80%]'>تسجيل الخروج</span>
          <p className='w-[30%]'> <FaOutdent /></p>
        </NavLink>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, link }) => {
  return (
    <NavLink to={link} className='flex w-full items-center justify-between p-4 rounded-lg hover:bg-blue-700 hover:text-white cursor-pointer duration-1000'>
      <span className='text-lg mt-2 w-[80%]'>{label}</span>
      <p className='w-[30%]'>{icon}</p>
    </NavLink>
  );
};

export default Sidebar;
