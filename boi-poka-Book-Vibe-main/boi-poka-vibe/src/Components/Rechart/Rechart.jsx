import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const data = [
  { name: "The Great Gatsby", gatsby: 192 },
  { name: "To kill a mocking bird", mockingbird: 281 },
  { name: "1984", nineteen: 328 },
  { name: "The Alchemist", alchemist: 177 },
  { name: "Pride and prejudice", pride: 279 },
];

const Rechart = () => {
  return (
    <div className="w-full h-96 bg-white rounded-2xl shadow p-4">
      <h3 className="text-xl font-semibold mb-4">Rechart Example</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          {/* প্রতিটা বইয়ের জন্য আলাদা Area */}
          <Area
            type="monotone"
            dataKey="gatsby"
            stroke="#1E90FF"
            fill="#1E90FF"
          >
            <LabelList dataKey="gatsby" position="top" fill="#1E90FF" />
          </Area>

          <Area
            type="monotone"
            dataKey="mockingbird"
            stroke="#20B2AA"
            fill="#20B2AA"
          >
            <LabelList dataKey="mockingbird" position="top" fill="#20B2AA" />
          </Area>

          <Area
            type="monotone"
            dataKey="nineteen"
            stroke="#FFA500"
            fill="#FFA500"
          >
            <LabelList dataKey="nineteen" position="top" fill="#FFA500" />
          </Area>

          <Area
            type="monotone"
            dataKey="alchemist"
            stroke="#FF7F50"
            fill="#FF7F50"
          >
            <LabelList dataKey="alchemist" position="top" fill="#FF7F50" />
          </Area>

          <Area
            type="monotone"
            dataKey="pride"
            stroke="#FF0000"
            fill="#FF0000"
          >
            <LabelList dataKey="pride" position="top" fill="#FF0000" />
          </Area>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Rechart;
