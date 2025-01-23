import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProdactModal = ({ oneItem, setOneItem }) => {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => setOneItem(null)}
        className="fixed top-0 left-0 w-full h-screen bg-[#0005] z-10"
      ></div>

<div className="p-6 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-gradient-to-r from-white to-gray-100 shadow-lg w-[60%] min-h-[80%] grid sm:grid-cols-2 grid-cols-1 z-20">
  <div className="relative overflow-hidden rounded-xl shadow-md">
    <img
      src={oneItem.thumbnail}
      alt={oneItem.title}
      className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110"
    />
  </div>

  <div className="flex flex-col gap-6 p-4">
    <h2 className="text-4xl font-bold text-gray-800">{oneItem.title}</h2>
    
    <p className="hidden md:flex text-gray-600 text-lg">
      {oneItem.description}
    </p>

    <div>
      <del className="text-red-500 text-lg">Price: {oneItem.price} $</del>
      <p className="text-2xl font-semibold text-green-600 mt-2">
        Discounted Price: {(oneItem.price - oneItem.price * (oneItem.discountPercentage / 100)).toFixed(2)} $
      </p>
    </div>

    <div className="flex items-center gap-2">
      <span className="bg-yellow-300 text-yellow-800 rounded-md px-3 py-1 font-medium">
        Rating: {oneItem.rating}
      </span>
    </div>

    <p className="text-gray-700 text-lg">Stock: {oneItem.stock}</p>

     <div className="flex flex-col sm:flex-row gap-4 items-center">
      <div className="flex rounded-md px-4 py-2 btn">
        <button
          onClick={() => setCount((prev) => Math.max(prev - 1, 1))}
          disabled={count === 1}
          className="text-xl font-bold text-gray-800 disabled:opacity-50"
        >
          -
        </button>
        <span className="text-xl font-semibold px-3">{count}</span>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="text-xl font-bold text-gray-800"
        >
          +
        </button>
      </div>
      <button className="btn bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition">
        Buy
      </button>
    </div>

    {/* Action Buttons */}
    <div className="flex gap-4 mt-4">
      <button
        onClick={() => setOneItem(null)}
        className="btn bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-500 transition"
      >
        Close
      </button>
      <button
        onClick={() => navigate(`/product/${oneItem.id}`)}
        className="btn bg-indigo-500 text-white rounded-md px-4 py-2 hover:bg-indigo-600 transition"
      >
        More Detail
      </button>
    </div>
  </div>
</div>

    </>
  );
};

export default ProdactModal;
