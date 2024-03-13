import React from "react";
import "./ProductDescription.css";

function ProductDescription({
  description
}) {
  return (
    <div className="ProdDesc__Container">
      <div className="ProdDesc__Basic">
        <img
          src={description?.image}
          alt="Product Description"
          width="100px"
        />
        <label>{description?.title}</label>
        <span>{description?.subtitle}</span>
      </div>
      
      <div className="ProdDesc__Tags">
        {description?.tags?.map((tag, index) => (
          <div className="ProdDesc__TagBox" key={index}>{tag}</div>
        ))}
      </div>
    
      {description?.details && <div className="ProdDesc__Detail">
        <label>Detail</label>
        {description?.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </div>}
    </div>
  )
}

export default ProductDescription