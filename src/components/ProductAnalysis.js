import React, { useState, useEffect } from "react";
import "./ProductAnalysis.css";
import { Chart } from "react-google-charts";
function ProductAnalysis({
  analysis
}) {
  const [chartData, setChartData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const chartOptions = {
    chart: {
      title: "Retail Sales"
    },
    width: 900,
    height: 300,
  };
  const tableOptions = {
    width: 900,
    height: 300,
  };
  const formatters = [
    {
      type: "NumberFormat",
      column: [1, 2, 4],
      options: {
        prefix: "$",
      },
    },
  ];
  useEffect(() => {
    const c_data = [];
    const t_data = [];
    analysis?.sales?.forEach(
      (item, idx) => {
        if (idx === 0) {
          c_data.push([
            { type: "date" },
            "Retail Sales",
          ]);
          t_data.push([
            "WEEK ENDING",
            "RETAIL SALES",
            "WHLESALE SALES",
            "UNITS SOLD",
            "RETAILER MARGIN",
          ])
        }

        const {
          weekEnding,
          retailSales,
          wholesaleSales,
          unitsSold,
          retailerMargin,
        } = item;
        const dateInfo = weekEnding.split("-");
        const year = dateInfo[0];
        const month = dateInfo[1];
        const date = dateInfo[2];
        c_data.push([
          new Date(year, month - 1, date),
          retailSales,
        ]);
        t_data.push([
          `${month}-${date}-${year}`,
          retailSales,
          wholesaleSales,
          unitsSold,
          retailerMargin,
        ])
      },
    );
    setChartData(c_data);
    setTableData(t_data);
  }, [analysis]); // eslint-disable-line

  return (
    <div className="ProdAlysis__Container">
      <div className="ProdAlysis__Chart">
        <Chart
          chartType="Line"
          width="100%"
          data={chartData}
          options={chartOptions}
        />
      </div>
      <div className="ProdAlysis__Table">
        <Chart
          chartType="Table"
          width="100%"
          data={tableData}
          options={tableOptions}
          formatters={formatters}
        />
      </div>
    </div>
  )
}

export default ProductAnalysis