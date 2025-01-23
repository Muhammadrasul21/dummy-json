import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { companyCard } from "../static";

const company = () => {
  return (
    <div className="container max-w-[1332px] mx-auto px-4">
      <div className="flex items-center gap-4  mt-[50px] mb-4">
        <p className="opacity-35">Home</p> <FaAngleRight />{" "}
        <p>About the company</p>
      </div>
      <div className="flex flex-col items-center gap-8 sm:flex-row justify-between  p-4">
        <div className=" w-[350px] sm:w-[450px]">
          <p className="font-bold text-6xl mb-9">About the company</p>
          <div className="flex flex-col gap-5">
            {companyCard.map((card) => (
              <div
                key={card}
                className="rounded-2xl flex flex-col justify-between gap-16 p-8 bg-[#2fbad314]"
              >
                <p className="font-bold text-6xl ">{card.title} </p>
                <p className="font-medium text-2xl">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[250px] sm:w-[500px] max-w-full">
          Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников
          для освещения вашего дома или офиса. y нас вы найдете разнообразные
          модели светильников, от современных и стильных до классических и
          элегантных. Мы предлагаем качественные и надежные светильники от
          лучших производителей, которые подарят вам комфорт и уют . <br />{" "}
          <br /> Покупая светильники в нашем интернет-магазине, вы получаете
          отличное соотношение цены и качества. Мы осуществляем доставку по всей
          России, чтобы каждый клиент мог насладиться прекрасным светом и
          удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш
          дом в оазис тепла и света c NORNLIGHT!Интернет-магазин NORNLIGHT .{" "}
          <br /> <br /> предлагает широкий ассортимент светильников для
          освещения вашего дома или офиса. y нас вы найдете разнообразные модели
          светильников, от современных и стильных до классических и элегантных.
          Мы предлагаем качественные и надежные светильники от лучших
          производителей, которые подарят вам комфорт и уют. <br />
          <br /> Покупая светильники в нашем интернет-магазине, вы получаете
          отличное соотношение цены и качества. Мы осуществляем доставку по всей
          России, чтобы каждый клиент мог насладиться прекрасным светом и
          удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш
          дом в оазис тепла и света c NORNLIGHT!
        </div>
      </div>
    </div>
  );
};

export default company;
