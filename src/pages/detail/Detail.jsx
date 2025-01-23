import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { request } from "../../api";
import Layout from "../../components/Layout";
import Loading from "../../components/loading/Loading";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setLoading(true);
    request
      .get(`/product/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Xatolik yuz berdi:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }
  return (
    <Layout>
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="w-1/2">
          <img className="w-full" src={data.thumbnail} alt={data.title} />
        </div>
        <div className="w-full max-w-[600px] flex flex-col gap-6 bg-white shadow-lg rounded-xl p-6 mx-auto mt-12">
          <p className="font-bold text-5xl text-gray-800">{data.title}</p>

          <p className="hidden md:flex text-gray-600 text-lg">
            {data.description}
          </p>

          <div>
            <del className="text-red-500 text-lg">Price: {data.price} $</del>
            <p className="text-xl font-semibold text-green-600 mt-2">
              Discounted Price:{" "}
              {(
                data.price -
                data.price * (data.discountPercentage / 100)
              ).toFixed(2)}{" "}
              $
            </p>
          </div>

          <div className="flex items-center gap-2">
            <p className="bg-yellow-300 text-yellow-800 rounded-md px-3 py-1 font-medium">
              Rating: {data.rating}
            </p>
          </div>

          <p className="text-gray-700 text-lg">Stock: {data.stock}</p>
          <p className="text-gray-700 text-lg">Brand: {data.brand}</p>
          <p className="text-gray-700 text-lg">Weight: {data.weight} kg</p>
          <p className="text-gray-700 text-lg">
            Availability Status: {data.availabilityStatus}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2 border rounded-md px-4 py-2 shadow-sm btn">
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

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setOneItem(null)}
              className="btn bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-500 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
