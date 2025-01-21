import React, { useEffect, useState } from "react";
import { request } from "../../api";
import Loading from "../loading/Loading";
import ProdactModal from "./prodact-modal";

const Products = () => {
  const limit = 5
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0)
  const [total, setTotal ] = useState(0)
  const [categories, setCategories] = useState(null)
  const [oneItem, setOneItem] = useState(null)

  useEffect(()=>{
request
.get("/products/category-list")
.then(res =>{
  setCategories(["All", ...res.data]);
})
  },[])

  useEffect(() => {
    setLoading(true);
    request
      .get("/products",{
        params: {
          limit,
          skip: count * limit
        }
      })
      .then((res) =>{
         setProducts([...products, ...res.data.products])
        setTotal(res.data.total)
        })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [count]);
  return (
    <div className="contianer">
      <h2 className="w-28 h-6 bg-red-500 flex items-center justify-center">Products {total}</h2>
      <div className="category flex py-5 gap-4 overflow-y-hidden w-full">
        {
          categories?.map((item) =>( 
             <div
              className=" whitespace-nowrap block mx-auto mt-4 py-3 px-6 rounded-xl mb-4 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm text-center ountline-none cursor-pointer"
               key={item}>{item}</div>
          ))
          
        }
      </div>
      <div className="card">
        {products?.map((product) => (
          <div key={product.id} className="p-4 flex flex-col items-center font-semibold text-lg shadow-md relative max-w-xs overflow-hidden bg-cover bg-no-repeat hover:shadow-2xl hover:transition duration-300 ease-out ">
            <img
              src={product.thumbnail}
              className="h-[250px] max-w-xs transition duration-300 ease-in-out hover:scale-110"
              alt={product.title}
              onClick={()=>setOneItem(product)}
            />
            <h2>{product.title}</h2>
          </div>
        ))}
      </div>

      {loading && <Loading count={limit} />}

      {
        total > limit * (count + 1 ) &&
       <button className="block mx-auto mt-4 py-3 px-6 rounded-xl mb-4 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm text-center ountline-none " onClick={()=> setCount(count+1)}>See more</button>
      }

      {
        oneItem &&
      <ProdactModal oneItem={oneItem} setOneItem={setOneItem}/>
      }
    </div>
  );
};

export default Products;
