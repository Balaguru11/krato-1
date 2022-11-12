import React from "react";
import { Grid } from "@mui/material";
import SmallCard from "../Components/SmallCard";

const GridFour = ({ spov }) => {
  // const [spov, setSPOV] = useState(null);

  // useEffect(() => {
  //   setSPOV(fourData);
  //   //eslint-disable-next-line
  // }, []);

  return (
    <>
      <Grid container spacing={2}>
        {spov?.map((item) => (
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6} key={item.id}>
            <SmallCard ky={item.id} item={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GridFour;
