import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid, Fab } from "@mui/material";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import { bigData } from "../Data/BigCardList";
const BigCard = () => {
  const [bd, setBd] = useState(null);

  useEffect(() => {
    setBd(bigData);
  }, []);
  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{
          borderRadius: 10,
          backgroundColor: "#F9F8F3",
        }}
      >
        {bd?.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card
              key={item.id}
              sx={{
                p: 1,
                m: 1,
                boxShadow: 0,
                backgroundColor: "#F9F8F3",
              }}
            >
              <CardContent>
                <Fab
                  size="small"
                  aria-label="icon"
                  sx={{
                    display: "flex",
                    flexDirection: "flex-start",
                    mb: 2,
                  }}
                >
                  <SouthEastIcon />
                </Fab>
                <Typography
                  variant="caption"
                  component="div"
                  sx={{ textAlign: "left", pb: 1 }}
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{ textAlign: "left" }}
                >
                  {item.value}
                </Typography>
                <Typography
                  variant="caption"
                  component="div"
                  sx={{ textAlign: "left" }}
                >
                  {item.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default BigCard;
