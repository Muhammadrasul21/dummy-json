import React, { useState } from 'react'; 


const ProdactModal = ({ oneItem, setOneItem }) => {
  const [count, setCount] = useState(1);
  return (
<>
<div onClick={()=> setOneItem(null)} className="fixed top-0 left-0 w-full h-screen bg-[#0005]"></div>
           <div className="p-4 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white w-[60%] min-h-[80%] grid sm:grid-cols-2 grid-cols-1 ">
             <div>
              <img src={oneItem.thumbnail} alt="" className='w-full transition duration-300 ease-in-out hover:scale-110' />
             </div>

             <div className='flex flex-col gap-6 '>
              <h2 className='text-3xl font-semibold'>{oneItem.title}</h2>
              <p className='hidden md:flex'>{oneItem.description}</p>
               <div>
                 <del>Price : {oneItem.price} $</del>
                 <p className='text-xl font-semibold'>Discount percentage : {oneItem.discountPercentage} $</p>
               </div>   
              
                <div className='flex'>
              <p className="bg-yellow-300 rounded-md p-1">Rating : {oneItem.rating}</p>
                  </div>       
              <p>Stock : {oneItem.stock}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                 <div className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-6 py-3 text-center me-2 flex items-center justify-center gap-2 mb-2 ountline-none">
                  <button onClick={() => setCount(count - 1)} disabled={count === 1}>-</button>
                  <span style={{ margin: "0 10px" }}>{count}</span>
                  <button onClick={() => setCount(count + 1)}>+</button>
                 </div>
                 <button className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-8 py-3 text-center me-2 mb-2 ountline-none'>Buy</button>
              </div>
              <div>
              <button onClick={()=> setOneItem(null)} className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-8 py-3 text-center me-2 mb-2 ountline-none'>close</button>
              </div>
             </div>
           </div>
</> 
 )
}

export default ProdactModal