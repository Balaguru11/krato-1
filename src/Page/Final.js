import React from "react";
import GridFour from "../Page/GridFour";
import BigCard from "../Components/BigCard";
import SearchBox from "../Components/SearchBox";
import Welcome from "../Components/Welcome";
import Third from "../Components/Third";
import SideMenu from "../Components/SideMenu";
import fourData from "../Data/FourBox";
import menuList from "../Data/MenuList";
import BigData from "../Data/BigData";
import SalesData from "../Data/SalesData";
import Statis from "../Data/Statis";

import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Final = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  let spov = fourData;
  let bd = BigData;
  let sales = SalesData;
  let menuArr = menuList;
  let barData = Statis;

  // const [spov, setSPOV] = useState(null);
  // const [bd, setBd] = useState(null);
  // const [sales, setSales] = useState(null);
  // const [barData, setBarData] = useState(null);
  // const [menuArr, setMenuArr] = useState(null);

  // useEffect(() => {
  //   setSPOV(fourData);
  //   // eslint-disable-next-line
  // }, []);

  // useEffect(() => {
  //   setBd(bigData);
  //   setSales(salesRevenue);
  //   setBarData(statistics);
  //   setMenuArr(menuList);
  //   // eslint-disable-next-line
  // }, [spov]);

  // if (spov) {
  //   setBd(BigData);
  //   setSales(SalesData);
  //   setBarData(Statis);
  //   setMenuArr(menuList);
  // }

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} lg={3}>
          <SideMenu menuArr={menuArr} />
        </Grid>
        <Grid item xs={12} lg={6}>
          {matches && <SearchBox />}
          <Welcome />
          <BigCard bd={bd} />
          <GridFour spov={spov} />
        </Grid>
        <Grid item xs={12} lg={3}>
          <Third sales={sales} barData={barData} />
        </Grid>
      </Grid>
    </>
  );
};

export default Final;
