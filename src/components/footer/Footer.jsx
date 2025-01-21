import React from "react";
import visa from "../../assets/visa.png";
import icon from "../../assets/JSON-2.svg"
import { navItems, socialMedia, footerInfo, ulInfo } from "../../static/index";

const Footer = () => {
  return (
    <footer className="bg-[#2fbad31a] p-20">
      <div className="cotainer">
        <div className="flex flex-wrap sm:justify-between sm:flex gap-10">
          <div className="flex flex-col gap-9">
            <div className="flex gap-[15px]">
              <img src={icon} className="w-10 h-10" alt="" />
              <p className="text-2xl font-semibold leading-9">Dummy Json</p>
            </div>
            <p>8 (800) 890-46-56</p>
            <img src={visa} alt="#" className="w-[222px] h-10" />
            <a href="#" className="opacity-40 decoration-auto underline block">
            Privacy
            </a>
            <a href="#" className="opacity-40 decoration-auto underline">
            User Agreement
            </a>
            <div className="flex gap-3">
              {socialMedia.map((item, index) => (
                <div
                  key={index}
                  className="w-9 h-9 border border-black rounded-full flex items-center justify-center"
                >
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <ul className="flex flex-col gap-7">
            <p>Покупателям</p>
            {footerInfo.map((item, index) => (
              <li className="opacity-50" key={index}>
                {item}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-7">
            <p>Товары</p>
            {navItems.map((item, index) => (
              <li className="opacity-50" key={index}>
                {item}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-7">
            {ulInfo.map((item, index) => (
              <li className="opacity-50" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
