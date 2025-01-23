import React from 'react'
import Layout from '../../components/Layout'
import { FaAngleRight } from 'react-icons/fa';


const Contacts = () => {
  return (
    <div>
        <Layout>
              <div className="container max-w-[1332px] mx-auto px-4">
                   <div className="flex items-center gap-4 mt-[50px] mb-4">
                     <p className="opacity-35">Главная</p> <FaAngleRight /> <p>Контакты</p>
                   </div>
                   <div className="flex flex-col sm:flex-row justify-between ">
                     <div className="w-[350px] sm:w-[450px]">
                       <p className="font-bold text-4xl w-[300px] sm:text-6xl mb-9">Контакты</p>
                     </div>
                     <div className="w-[350px] sm:w-[500px] max-w-full">
                       <p className="font-semibold text-2xl mb-7">8 (800) 890-46-56</p>
                       <p className="mb-[60px] text-xl w-full">
                       Пн-Пт: 10:00 до 19:00C6-Bc: заказ через корзину Телефоны:</p>
                     </div>
                   </div>
                 </div>
                 <div className="w-full mt-28 relative mb-40 sm:mb-24">
                   <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.475092439265!2d69.24147597550873!3d41.31136721416811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4e295ad738b%3A0x9df9e9ecfb2715ef!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                     className="w-full h-[672px] flex"
                     allowFullScreen=""
                     loading="lazy"
                     style={{ border: 0}}
                   ></iframe>
                   <div className="absolute sm:bottom-0 top-80 left-0 sm: pb-10  w-full flex justify-center items-end">
                    <div className='flex flex-col gap-8 sm:gap-32 md:flex-row  bg-white text-black p-14 rounded-2xl'>
                      <div className='flex flex-col gap-3'>
                        <p className='font-semibold text-2xl'>Адрес магазина</p>
                        <p> Москва, Дмитровское шоссе д.100c2</p>
                      </div>
                      <div className='flex flex-col gap-3'>
                        <p className='font-semibold text-2xl'>Почта</p>
                        <p> NORNLIGHT@mail.ru</p>
                      </div>
                      <div className='flex flex-col gap-3'>
                        <p className='font-semibold text-2xl'>Телефон </p>
                        <p>8 (800) 890-46-56</p>
                      </div>
                      <button className='bg-black text-white py-2 px-10 rounded-[100px] hover:bg-white hover:text-black border border-black transition duraiton-300 ease-in-out'>Оставить заявку</button>
                    </div>
                       </div>
                 </div>
        </Layout>
    </div>
  )
}

export default Contacts