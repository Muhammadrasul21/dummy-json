import React from "react";
import { FaAngleRight } from "react-icons/fa";
import Layout from "../../components/Layout";

const Delivery = () => {
  return (
    <>
      <Layout>
        <div className="container max-w-[1332px] mx-auto px-4">
          <div className="flex items-center gap-4 mt-[50px] mb-4">
            <p className="opacity-35">Главная</p> <FaAngleRight />{" "}
            <p>Доставка и оплата</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between ">
            <div className="w-[350px] sm:w-[450px]">
              <p className="font-bold text-4xl w-[300px] sm:text-6xl mb-9">
                Доставка и оплата
              </p>
            </div>
            <div className="w-[350px] sm:w-[500px] max-w-full">
              <p className="font-semibold text-2xl mb-7">Доставка</p>
              <p className="mb-[60px] text-xl w-full">
                Мы осуществляем доставку co склада по Москве и Московской
                области собственной курьерской службой. Транспортными компаниями
                нашу продукцию мы доставляем по всей территории РФ, так же по
                всем странам СНГ.{" "}
                <a href="#" className="text-[#2F4DA3]">
                  Сроки доставки: 4—6 недель
                </a>
              </p>
              <p className="font-semibold text-2xl mb-7">Курьерская доставка</p>
              <p className="mb-[60px] text-xl">
                БЕСПЛАТНО доставим в пределах МКАД любой заказ{" "}
                <a href="#" className="text-[#2F4DA3]">
                  от 5 000 ₽
                </a>
                . Заказы свыше{" "}
                <a href="#" className="text-[#2F4DA3]">
                  30 000 ₽{" "}
                </a>{" "}
                имеют бесплатную доставку, включительно 15 км от МКАД.
              </p>
              <p className="font-semibold text-2xl mb-7">Самовывоз</p>
              <p className="mb-[60px] text-xl">
                Любой заказ можно забрать самостоятельно по адресу: Г. Москва,
                Дмитровское шоссе д.100c2
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mt-28">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.475092439265!2d69.24147597550873!3d41.31136721416811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4e295ad738b%3A0x9df9e9ecfb2715ef!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            className="w-full h-[672px]"
            allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </Layout>
    </>
  );
};

export default Delivery;
