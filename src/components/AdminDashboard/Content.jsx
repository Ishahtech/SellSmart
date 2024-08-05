import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

function Content() {
  const data = [
    {
      name: "Monday",
      Purchase_Order: 4000,
      Sales_Order: 2400,
      amt: 2400,
    },
    {
      name: "Tuesday",
      Purchase_Order: 3000,
      Sales_Order: 1398,
      amt: 2210,
    },
    {
      name: "Wednesday",
      Purchase_Order: 2000,
      Sales_Order: 5800,
      amt: 2290,
    },
    {
      name: "Thursday",
      Purchase_Order: 2780,
      Sales_Order: 3908,
      amt: 2000,
    },
    {
      name: "Friday",
      Purchase_Order: 1890,
      Sales_Order: 4800,
      amt: 2181,
    },
    {
      name: "Saturday",
      Purchase_Order: 2390,
      Sales_Order: 3800,
      amt: 2500,
    },
    {
      name: "Sunday",
      Purchase_Order: 3490,
      Sales_Order: 4300,
      amt: 2100,
    },
  ];

  return (
    <>
      <div className="p-4 w-full">
        <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="p-8 text-center rounded-md shadow-xl">
            <h3 className="text-xl font-semibold">Total Users</h3>
            <p className="text-2xl text-blue-600">1500</p>
          </div>
          <div className="bg-white p-4 text-center rounded-md shadow-xl">
            <h3 className="text-xl text-center font-semibold">
              Total Products
            </h3>
            <p className="text-2xl text-blue-600">3200</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-xl text-center">
            <h3 className="text-xl font-semibold">Total Customers</h3>
            <p className="text-2xl text-blue-600">870</p>
          </div>
          <div className="bg-white p-4 text-center rounded-md shadow-xl">
            <h3 className="text-xl font-semibold">Total Revenue</h3>
            <p className="text-2xl text-blue-600">$12,300</p>
          </div>
        </div>

        <div className="charts grid grid-cols-1 md:grid-cols-2 gap-5 mt-20 md:mt-8 h-[300px]">
          <div className="justify-center text-center h-96 mt-8">
            <h2 className="text-blue-500 text-2xl font-bold mb-6">
              {" "}
              Top 5 Products
            </h2>

            <ResponsiveContainer width="100%" height="100%">
              <span></span>
              <BarChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Sales_Order" fill="#8884d8" />
                <Bar dataKey="Purchase_Order" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="justify-center text-center h-96 mt-8">
            <h2 className="text-blue-500 text-2xl font-bold mb-6">
              {" "}
              Purchase and Sales Order
            </h2>

            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Sales_Order"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="Purchase_Order"
                  stroke="#82ca9d"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
