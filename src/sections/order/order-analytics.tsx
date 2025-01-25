import React from "react";
import Chart from "react-apexcharts";

export default function OrderAnalytics() {
  return (
    <Chart
      options={{
        chart: {
          id: "chart-orders",
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 8,
          hover: {
            size: 10,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.8,
            opacityTo: 0.7,
            stops: [20, 100],
          },
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
          name: "orders",
          data: [70, 65, 80, 64, 85, 60, 80, 91],
        },
      ]}
      type="area"
      width={"100%"}
      height={350}
    />
  );
}
