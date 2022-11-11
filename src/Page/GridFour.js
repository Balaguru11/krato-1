import React, { useState } from "react";

import {
  Grid,
  Typography,
  TextField,
  Box,
  Paper,
  IconButton,
  InputBase,
} from "@mui/material";

import SmallCard from "../Components/SmallCard";
import fourData from "../Data/FourBox";
import SearchIcon from "@mui/icons-material/Search";
import BigCard from "../Components/BigCard";
import Filter from "../Components/Filter";

const GridFour = () => {
  const [spov, setSPOV] = useState(fourData);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
          m: 2,
        }}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 500,
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "Search" }}
          />
        </Paper>
      </Box>
      <Box height={25} />
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Typography variant="h4" component="h4" sx={{ textAlign: "left" }}>
            Hello David
          </Typography>
          <Typography variant="h6" component="body" sx={{ textAlign: "left" }}>
            Welcome Back!
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Filter />
        </Grid>
      </Grid>
      <Box sx={{ p: 2, m: 2 }}>
        <BigCard />
      </Box>

      <Grid container spacing={2}>
        {spov?.map((item) => (
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <SmallCard ky={item.id} item={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GridFour;
