import React, { useLayoutEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 100, pv: 2100, amt: 2100}];

function CustomTooltip({ payload, label, active }) {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
          <p className="desc">Anything you want can be displayed here.</p>
        </div>
      );
    }
  
    return null;
  }
  
  const ChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer height="90%">
      <LineChart width={400} height={400} data={data}>
        <Line
          type="monotone"
          dataKey="prices"
          stroke="#14ffec"
          strokeWidth={"2px"}
        />
        <CartesianGrid stroke="#323232" />
        <XAxis dataKey="date" hide />
        <YAxis dataKey="prices" hide domain={["auto", "auto"]} />
        <Tooltip content={<CustomTooltip />}/>
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};

function Chart({ id }) {
  const [chartData, setChartData] = useState();

  useLayoutEffect(() => {
    const getChartData = async (id) => {
      try {
        const data = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7&interval=daily`
        )
          .then((res) => res.json())
          .then((json) => json);
        console.log("chart Data Log", data);

        let convertedData = data.prices.map((item) => {
          return {
            date: new Date(item[0]).toLocaleDateString(),
            prices: item[1],
          };
        });
        console.log(convertedData);

        setChartData(convertedData);
      } catch (error) {
        console.log(error);
      }
    };
    getChartData(id);
  }, [id]);

  return (
    <div className="w-full h-[60%]">
      <ChartComponent data={chartData} />
    </div>
  );
}

export default Chart;
