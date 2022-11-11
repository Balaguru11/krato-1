import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

import { statistics } from "../Data/BigCardList";

const Bar = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(statistics);
  }, []);
  return (
    <>
      <Paper>
        {data && (
          <Chart data={data}>
            <ArgumentAxis />
            <ValueAxis max={5} />
            <BarSeries valueField="value" argumentField="id" />
            <Animation />
          </Chart>
        )}
      </Paper>
    </>
  );
};

export default Bar;
