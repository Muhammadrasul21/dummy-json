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

      <div className="p-4 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white w-[60%] min-h-[80%] grid sm:grid-cols-2 grid-cols-1 z-20">
        <div>
          <img
            src={oneItem.thumbnail}
            alt={oneItem.title}
            className="w-full transition duration-300 ease-in-out hover:scale-110"
          />
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-semibold">{oneItem.title}</h2>
          <p className="hidden md:flex">{oneItem.description}</p>
          <div>
            <del>Price: {oneItem.price} $</del>
            <p className="text-xl font-semibold">
              Discounted Price: {oneItem.price - oneItem.price * (oneItem.discountPercentage / 100)} $
            </p>
          </div>

          <div className="flex">
            <p className="bg-yellow-300 rounded-md p-1">Rating: {oneItem.rating}</p>
          </div>
          <p>Stock: {oneItem.stock}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="btn flex items-center justify-center gap-2 mb-2 outline-none">
              <button
                onClick={() => setCount((prev) => Math.max(prev - 1, 1))}
                disabled={count === 1}
              >
                -
              </button>
              <span style={{ margin: "0 10px" }}>{count}</span>
              <button onClick={() => setCount((prev) => prev + 1)}>+</button>
            </div>
            <button className="btn">Buy</button>
          </div>

          <div className="flex gap-4">
            <button onClick={() => setOneItem(null)} className="btn">
              Close
            </button>
            <button
              onClick={() => navigate(`/product/${oneItem.id}`)}
              className="btn"
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
