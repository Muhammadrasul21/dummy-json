import React from 'react';
import logo from "../../assets/JSON-2.svg";
import { navIcons, navItems } from '../../static';

const Header = () => {
  return (
    <div className='container'>
      <div className='border border-red-500 p-4 flex items-center'>
        <div className='flex items-center gap-2'>
          <img className='w-16 h-16' src={logo} alt="Logo" />
          <p className='font-bold text-2xl'>Dummy Json</p>
        </div>
        <ul className='flex items-center'>
          {navItems?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className='flex items-center gap-4'>
          <div>
            {navIcons?.map((iconItem) => {
              return (
              <div key={iconItem.id} className='flex flex-col items-center'>
               <iconItem.icon className='text-2xl'/>
                <p className='text-lg'>{iconItem.title}</p>
              </div>
              )
            })}          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
