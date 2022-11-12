import React from "react";

import { CChartBar } from "@coreui/react-chartjs";

const Bar2 = ({ barData }) => {
  return (
    <>
      <CChartBar
        type="bar"
        data={{
          // Name of the variables on x-axies for each bar
          labels: ["1st bar", "2nd bar", "3rd bar", "4th bar"],
          datasets: [
            {
              // Label for bars
              label: "total count/value",
              // Data or value of your each variable
              data: [1552, 1319, 613, 1400],
              // Color of each bar
              backgroundColor: "#f87979",
              // Border color of each bar
            },
          ],
        }}
        labels="month"
        // Height of graph
        // height={400}
        // options={{
        //   maintainAspectRatio: false,
        //   scales: {
        //     yAxis: [
        //       {
        //         ticks: {
        //           // The y-axis value will start from zero
        //           beginAtZero: true,
        //         },
        //       },
        //     ],
        //   },
        //   legend: {
        //     labels: {
        //       fontSize: 15,
        //     },
        //   },
        // }}
      />
    </>
  );
};

export default Bar2;
