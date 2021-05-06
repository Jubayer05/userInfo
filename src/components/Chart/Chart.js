import { Paper } from "@material-ui/core";
import React, { Component } from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import "./Chart.css";

const data = {
  chartData: {
    labels: [
      "Boston",
      "Miami",
      "San Francisco",
      "London",
      "Florida",
      "New York",
      "Sunguyera",
    ],
    datasets: [
      {
        label: "Population",
        data: [5000, 6888, 3000, 8000, 2000, 5000, 3000],
        backgroundColor: [
          "rgba(255,99,132,0.6)",
          "rgba(54,162,235,0.6)",
          "rgba(255,206,86,0.6)",
          "rgba(75,192,192,0.6)",
          "rgba(153,102,255,.6)",
          "rgba(255,159,64,0.6)",
        ],
      },
    ],
  },
};

const Chart = () => {
  return (
    <Paper className="chart">
      <Bar data={data.chartData} options={{}} />
    </Paper>
  );
};

export default Chart;
