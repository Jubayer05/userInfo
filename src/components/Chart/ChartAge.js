import { Paper } from "@material-ui/core";
import React, { Component } from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import "./Chart.css";

const ChartAge = () => {
  const data = {
    chartData: {
      labels: ["Jhon", "Mike", "Adita", "Pitar", "Jack", "Nahid", "Mithila"],
      datasets: [
        {
          label: "Employee Age",
          data: [61, 35, 45, 25, 37, 44, 53],
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
  return (
    <Paper className="chart">
      <Line data={data.chartData} />
    </Paper>
  );
};

export default ChartAge;
