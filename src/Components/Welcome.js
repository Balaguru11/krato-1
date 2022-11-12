import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import Filter from "../Components/Filter";

const Welcome = () => {
  return (
    <>
      <Grid container spacing={1} sx={{ pt: 2, pb: 2 }}>
        <Grid item xs={6} lg={8}>
          <Box sx={{ pl: 1 }}>
            <Typography variant="h4" component="h4" sx={{ textAlign: "left" }}>
              Hello David
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{ textAlign: "left" }}
            >
              Welcome Back!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} lg={4}>
          <Filter />
        </Grid>
      </Grid>
    </>
  );
};

export default Welcome;
