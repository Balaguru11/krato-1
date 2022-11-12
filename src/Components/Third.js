import React from "react";
import {
  Box,
  List,
  ListItem,
  Typography,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import BarStatis from "../Components/BarStatis";
const Third = ({ sales, barData }) => {
  return (
    <>
      <Box sx={{ p: 3, mt: 5, backgroundColor: "#262626", borderRadius: 10 }}>
        <Typography variant="h5" component="h5" sx={{ color: "white" }}>
          Sales Revenue
        </Typography>
        <List>
          {sales?.map((sale) => (
            <ListItem key={sale.id} sx={{ color: "white", pb: 2 }}>
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
                    component="p"
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
        <Typography variant="h5" component="h5" sx={{ color: "white" }}>
          Statistics
        </Typography>
        <BarStatis barData={barData} />
      </Box>
    </>
  );
};

export default Third;
