import React, { useState, useEffect } from "react";
import ProductDescription from "./ProductDescription";
import ProductAnalysis from "./ProductAnalysis";
import { ReactComponent as StacklineIcon } from "../assets/stackline_logo.svg";
import { fetchProductData } from "../action/productPage";
import "./ProductPage.css";

function ProductPage() {
  const [productData, setProductData] = useState(null);

  const handleFetchData = () => {
    fetchProductData()
      .then((data) => {
        setProductData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleFetchData();
  }, []); // eslint-disable-line

  return (
    <div className="ProductPageContainer">
      <div className='banner'>
        <StacklineIcon width={100} />
      </div>
      {productData !== null && <div className="ProdcutPage__Content">
        <ProductDescription description={productData === null ? null : productData[0]}/>
        <ProductAnalysis analysis={productData === null ? null : productData[0]}/>
      </div>}
      {productData === null && <div className="ProductPage__Loading">
        <h2>Loading...</h2>
      </div>}      
    </div>
  )
}

export default ProductPage;