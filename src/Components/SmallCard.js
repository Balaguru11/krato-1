import React from "react";
import {
  Card,
  CardContent,
  CardAction,
  CircularProgress,
  Typography,
  Grid,
  Box,
  Fab,
} from "@mui/material";
import SouthEastIcon from "@mui/icons-material/SouthEast";

const SmalCard = (props) => {
  return (
    <>
      <Card
        key={props.ky}
        sx={{
          p: 1,
          m: 1,
          borderRadius: 10,
          backgroundColor: `${props.item.col}`,
          boxShadow: 0,
        }}
      >
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={6} sx={{ textAlign: "left" }}>
              <Typography variant="h5" component="h5">
                {props.item.name}
              </Typography>
              <Typography variant="caption" component="div">
                {props.item.desc}
              </Typography>
              <Typography variant="h5" component="h4">
                {props.item.amt}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              {/* <CircularProgress variant="determinate" value={55} /> */}
              <Box sx={{ position: "relative", display: "inline-flex" }}>
                <SouthEastIcon
                  sx={{
                    m: 1,
                    color: `${props.item.iconCol}`,
                    position: "relative",
                    top: -25,
                    right: -120,
                  }}
                />
                <CircularProgress
                  variant="determinate"
                  {...props}
                  value={props.item.value}
                  size={75}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 40,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    color="text.secondary"
                  >
                    {`${props.item.value}%`}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default SmalCard;
