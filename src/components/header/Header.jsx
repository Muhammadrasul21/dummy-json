import React from 'react';
import logo from "../../assets/JSON-2.svg";
import { navIcons } from '../../static';
import { navItems } from '../../static';
import { Link, NavLink } from 'react-router-dom';

// console.log()

const Header = () => {

  return (
    <div className="container">
      <div className="rounded-xl bg-[#2fbad314] p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img className="w-16 h-16" src={logo} alt="Logo" />
          <p className="font-bold text-2xl">Dummy Json</p>
        </div>
        <div className="navbar flex items-center gap-20 text-xl">
          {navItems.map((navItems, i) =>{
            return (
              <NavLink
                key={navItems.id}
                to={navItems.path}
                className="hover:text-[#2fbbd3] cursor-pointer transition duration-300 ease-in-out"
              >
                {navItems.title}
              </NavLink>
            );
          })}
        </div>
        <div className="icon flex gap-8">
          {navIcons?.map((iconItem) => {
            return (
              <div
                key={iconItem.id}
                className="flex flex-col items-center cursor-pointer hover:text-[#2fbbd3] transition duration-300 ease-in-out"
              >
                <iconItem.icon className="text-2xl" />
                <p className="text-lg">{iconItem.title}</p>
              </div>
            );
          })} 
        </div>
        <div className="flex sm:hidden flex-col gap-0.5">
          <div className="w-8 h-1 bg-[#07B7D5]"></div>
          <div className="w-8 h-1 bg-[#07B7D5]"></div>
          <div className="w-8 h-1 bg-[#07B7D5]"></div>
          <div className="w-8 h-1 bg-[#07B7D5]"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
