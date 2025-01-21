import React from 'react';
import logo from "../../assets/JSON-2.svg";
import { navIcons, navItems } from '../../static';

const Header = ({ productCount }) => {
  return (
    <div className='cotainer'>
      <div className='rounded-xl bg-[#2fbad314] p-4 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <img className='w-16 h-16' src={logo} alt="Logo" />
          <p className='font-bold text-2xl'>Dummy Json</p>
        </div>
        <ul className='navbar flex items-center gap-20 text-xl'>
          {navItems?.map((item, index) => (
            <li className='hover:text-[#2fbbd3] cursor-pointer transition duration-300 ease-in-out' key={index}>{item}</li>
          ))}
        </ul>   
          <div className='icon flex gap-8'>
            {navIcons?.map((iconItem) => (
              <div key={iconItem.id} className='flex flex-col items-center cursor-pointer hover:text-[#2fbbd3] teansition duration-300 ease-in-out'>
                <iconItem.icon className='text-2xl' />
                <p className='text-lg'>{iconItem.title}</p>
              </div>
            ))}
          </div>
          <div className='flex sm:hidden flex-col gap-0.5'>
            <div className='w-8 h-1 bg-[#07B7D5]'></div>
            <div className='w-8 h-1 bg-[#07B7D5]'></div>
            <div className='w-8 h-1 bg-[#07B7D5]'></div>
            <div className='w-8 h-1 bg-[#07B7D5]'></div>
          </div>
        </div>
      </div>
  );
};

export default Header;
