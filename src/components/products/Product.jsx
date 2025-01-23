import React, { useEffect, useState } from "react";
import { request } from "../../api";
import Loading from "../loading/Loading";
import ProdactModal from "./prodact-modal";

const Products = () => {
  const limit = 5;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [count, setCount] = useState(0);
  const [oneItem, setOneItem] = useState(null);

  const handleCategory = (selectedCategory) => {
    setCategory(selectedCategory);
    setCount(0);
    if (selectedCategory === "All") {
      setFilteredProducts(products.slice(0, limit));
    } else {
      const filtered = products.filter(
        (item) => item.category === selectedCategory
      );
      setFilteredProducts(filtered.slice(0, limit));
    }
  };

  useEffect(() => {
    request.get("/products/category-list").then((res) => {
      setCategories(["All", ...res.data]);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    request
      .get("/products", { params: { limit: 100 } })
      .then((res) => {
        setProducts(res.data.products);
        setFilteredProducts(res.data.products.slice(0, limit));
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const handleSeeMore = () => {
    setCount(count + 1);
    const startIndex = (count + 1) * limit;
    const endIndex = startIndex + limit;
    const additionalProducts = category === "All"
      ? products.slice(startIndex, endIndex)
      : products.filter((item) => item.category === category).slice(startIndex, endIndex);

    setFilteredProducts((prev) => [...prev, ...additionalProducts]);
  };

  return (
    <div className="container">
      <div className="category flex py-5 gap-4 overflow-y-hidden w-full">
        {categories?.map((item) => (
          <button
            type="button"
            onClick={() => handleCategory(item)}
            className="whitespace-nowrap block mx-auto py-3 px-6 rounded-xl mb-4 text-white bg-gradient-to-r btn"
            key={item}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="card flex flex-col items-center justify-center">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="p-4 flex flex-col items-center font-semibold text-lg shadow-md relative max-w-xs overflow-hidden bg-cover bg-no-repeat hover:shadow-2xl hover:transition duration-300 ease-out"
          >
            <img
              src={product.thumbnail}
              className="h-[250px] max-w-xs transition duration-300 ease-in-out hover:scale-110"
              alt={product.title}
              onClick={() => setOneItem(product)}
            />
            <h2>{product.title}</h2>
          </div>
        ))}
      </div>

      {loading && <Loading />}

      {filteredProducts.length < (category === "All" ? products.length : products.filter((item) => item.category === category).length) && (
        <button
        className="btn"
          onClick={handleSeeMore}
        >
          See more
        </button>
      )}

      {oneItem && <ProdactModal oneItem={oneItem} setOneItem={setOneItem} />}
    </div>
  );
};

export default Products;
