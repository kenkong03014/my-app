import React from 'react'
import "./ProductAnalysis.css";

function ProductAnalysis({
    analysis
}) {
  return (
    <div className="ProdAlysis__Container">
      <div className="ProdAlysis__Chart">
        <label>Retail Sales</label>
        <div> graph</div>
      </div>
      <div className="ProdAlysis__Table">
        Retail table
      </div>
      </div>
  )
}

export default ProductAnalysis