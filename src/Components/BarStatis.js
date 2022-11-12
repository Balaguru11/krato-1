import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const BarStatis = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        // position: "top",
        display: false,
      },
      title: {
        display: true,
      },
    },
  };

  const labels = ["1", "2", "3", "4", "5"];
  const readings = [20, 40, 80, 40, 20];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: readings,
        backgroundColor: "white",
      },
    ],
  };

  return <Bar options={options} data={data} height="320" />;
};

export default BarStatis;
