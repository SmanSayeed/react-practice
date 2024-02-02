import React, { useEffect, useState } from "react";
import "./Store.css";
export default function Store() {
  const [products, setProducts] = useState([]);
  const fetchPrdocuts = async () => {
    const res = await fetch(import.meta.env.VITE_FAKE_API + "/products");
    const data = await res.json();
    if (data) setProducts(data);
    // console.log(products);
    return data;
  }
  useEffect(() => {
    fetchPrdocuts();
  }, []);

  return (
    <>
      Store
      <div className="store">
        {products.length>0 ? products.map((prod, i) => (
          <React.Fragment key={i}>
            {/* {console.log(prod)} */}
            <div className="productcard">
                
              <img className="img" src={prod.image} />
              <p className="prod_title">{prod.title}</p>
              <p className="prod_price">Price:100</p>
            </div>
          </React.Fragment>
        )) : "Loading.."}
      </div>
    </>
  );
}
