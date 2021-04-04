import React, { useState, useEffect } from "react";
import { getProducts } from "./helper/coreApiCalls";
import Base from "./Base";
import Card from "./Card";

function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
    getProducts().then(data => {
      if (data && data?.error) {
        setError(data.error);
        console.log(error);
      } else {
        console.log(data);

        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    <Base title="Home Page" description="Welcome to Tshirt store">
      <h1>Home</h1>
      <div className="row">
        {products.map((product, index) => {
          return (
            <div key={index} className="col-4 mb-4">
              <Card product={product} />
            </div>
          );
        })}
      </div>
    </Base>
  );
}

export default Home;
