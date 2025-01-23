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
        <Loading/>
      </Layout>
    );
  }
  return (
    <Layout>
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="w-1/2">
        <img className="w-full" src={data.thumbnail} alt={data.title} />
        </div>
        <div className="w-[600px] flex flex-col gap-6">
        <p className="font-semibold text-5xl mt-8">{data.title}</p>
        <p className="hidden md:flex" >{data.description}</p>
        <div>
            <del>Price: {data.price} $</del>
            <p className="text-xl font-semibold">
              Discounted Price: {data.price - data.price * (data.discountPercentage / 100)} $
            </p>
          </div>
          <div className="flex">
            <p className="bg-yellow-300 rounded-md p-1">Rating: {data.rating}</p>
          </div>
          <p>Stock: {data.stock}</p>
        <p>Rating: {data.rating}</p>
        <p>Brand : {data.brand}</p>
        <p>Weight : {data.weight}</p>
        <p>Availability Status : {data.availabilityStatus}</p>
        <div className="flex flex-col sm:flex-row items-center">
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

          <div className="flex flex-col sm:flex-row items-center">
            <button onClick={() => setOneItem(null)} className="btn">
              Close
            </button>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Detail;
