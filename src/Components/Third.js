import React, { useEffect, useState } from "react";
import {
  Box,
  List,
  ListItem,
  Typography,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";
import { salesRevenue } from "../Data/BigCardList";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Bar from "../Components/Bar";
const Third = () => {
  const [sales, setSales] = useState(null);

  useEffect(() => {
    setSales(salesRevenue);
  }, []);
  return (
    <>
      <Box sx={{ p: 3, mt: 5, backgroundColor: "#262626", borderRadius: 10 }}>
        <Typography variant="h5" component="text" sx={{ color: "white" }}>
          Sales Revenue
        </Typography>
        <List>
          {sales?.map((sale) => (
            <ListItem sx={{ color: "white", pb: 2 }}>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "white" }}>
                  <BeachAccessIcon sx={{ color: "black" }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={sale.value}
                secondary={
                  <Typography
                    variant="caption"
                    component="caption"
                    sx={{ color: "white" }}
                  >
                    {sale.name}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        <Box height={30} />
        <Typography variant="h5" component="text" sx={{ color: "white" }}>
          Statistics
        </Typography>
        <Bar />
      </Box>
    </>
  );
};

export default Third;
