import React from "react";
import { Card, CardContent, Typography, Grid, Fab, Box } from "@mui/material";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const BigCard = ({ bd }) => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("md"));

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
          <Grid item xs={12} sm={6} md={4} lg={4} key={item.id}>
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
                <Box
                  sx={{
                    maxWidth: "150px",
                  }}
                >
                  <Grid container spacing={1}>
                    <Grid item xs={matches ? 12 : 6}>
                      <Fab
                        size="small"
                        aria-label="icon"
                        sx={{
                          display: "flex",
                          flexDirection: "flex-start",
                          mb: 2,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <SouthEastIcon />
                      </Fab>
                    </Grid>
                    <Grid item xs={matches ? 12 : 6}>
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
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default BigCard;
