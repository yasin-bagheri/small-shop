import React, { useCallback, useEffect, useState } from "react";
import { UseHeader } from "../../../context/header-provider.tsx";
import agent from "../../../api/agent.ts";
import { Radio } from "antd";
import Chart from "react-apexcharts";

export default function OrderChartView() {
  const { setHeader } = UseHeader();

  useEffect(() => {
    setHeader({
      content: (
        <React.Fragment>
          <div className="text-2xl font-bold flex items-center justify-between w-full">
            <span>Orders</span>
          </div>

          <div className="text-[#475467] h-[40px] flex items-center">
            View the charts of orders here
          </div>
        </React.Fragment>
      ),
      breadCrumbs: [
        {
          href: "",
          title: <span className="text-primary">Order</span>,
        },
      ],
    });
  }, [setHeader]);

  const [radio, setRadio] = useState<"products" | "orders">("products");

  // const [categories, setCategories] = useState<any[]>([
  //   { id: 1, title: "test" },
  //   { id: 2, title: "test1" },
  //   { id: 3, title: "test2" },
  //   { id: 4, title: "test3" },
  //   { id: 5, title: "test4" },
  //   { id: 6, title: "test5" },
  //   { id: 7, title: "test7" },
  // ]);

  const getData = useCallback(async () => {
    var response = await agent.Order.chart();
    console.log(response);
    // setCategories(response || []);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  // useEffect(()=>{},[])

  // var options = {
  //   series: [
  //     {
  //       name: "XYZ MOTORS",
  //       data: [],
  //     },
  //   ],
  //   chart: {
  //     type: "area",
  //     stacked: false,
  //     height: 350,
  //     zoom: {
  //       type: "x",
  //       enabled: true,
  //       autoScaleYaxis: true,
  //     },
  //     toolbar: {
  //       autoSelected: "zoom",
  //     },
  //   },
  //   title: {
  //     text: "Stock Price Movement",
  //     align: "left",
  //   },
  //   yaxis: {
  //     labels: {
  //       formatter: function (val) {
  //         return (val / 1000000).toFixed(0);
  //       },
  //     },
  //     title: {
  //       text: "Price",
  //     },
  //   },
  //   xaxis: {
  //     type: "datetime",
  //   },
  //   tooltip: {
  //     shared: false,
  //     y: {
  //       formatter: function (val) {
  //         return (val / 1000000).toFixed(0);
  //       },
  //     },
  //   },
  // };

  return (
    <div className="flex w-full pb-10">
      <div className="p-5 w-full border rounded-xl bg-white">
        {/* Header */}
        <div className="flex items-center border-b pb-5">
          <div className="p-1.5 bg-white border rounded-lg">
            <img src="/icons/chart.svg" width={20} alt="" />
          </div>
          <span className="mx-2 font-[600] text-lg">Orders</span>

          <Radio.Group
            value={radio}
            onChange={(e) => setRadio(e.target.value)}
            className="ml-auto"
          >
            <Radio.Button value="products">Number Of Products</Radio.Button>
            <Radio.Button value="orders">Price Of Orders</Radio.Button>
          </Radio.Group>
        </div>

        {/* chart */}
        <div className="pt-5 flex items-center">
          <span
            style={{
              writingMode: "sideways-lr",
              textOrientation: "sideways",
            }}
          >
            {radio === "orders" ? "Price Of Orders" : "Number Of Products"}
          </span>

          <div className="w-full">
            <Chart
              options={{
                chart: {
                  id: "chart",
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
              }}
              series={[
                {
                  name: "series-1",
                  data: [30, 40, 45, 50, 49, 60, 70, 91],
                },
              ]}
              type="area"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
