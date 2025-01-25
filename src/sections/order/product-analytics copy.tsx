import React from "react";
import Chart from "react-apexcharts";

export default function ProductAnalytics() {
  return (
    <Chart
      options={{
        chart: {
          id: "chart-products",
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
        yaxis: {
          labels: {
            formatter: function (val) {
              return (val / 1).toFixed(0);
            },
          },
        },
      }}
      series={[
        {
          name: "products",
          data: [70, 60, 80, 60, 90, 60, 80, 91],
        },
      ]}
      type="bar"
      height={350}
    />
  );
}
