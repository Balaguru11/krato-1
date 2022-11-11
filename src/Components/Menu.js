import React, { useState } from "react";
import menuList from "../Data/MenuList";

import {
  Paper,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";

import Check from "@mui/icons-material/Check";

import AnalyticsIcon from "@mui/icons-material/Analytics";

const Menu = () => {
  const [arr, setArr] = useState(menuList);

  return (
    <>
      <AnalyticsIcon
        fontSize="large"
        xs={{
          display: "flex",
          flexDirection: "flex-start",
          //   alignItems: "left",
          //   justifyContent: "left",
          size: "large",
        }}
      />
      <Paper sx={{ width: 320, boxShadow: 0 }}>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <MenuList>
            {arr?.map((data, index) => (
              <MenuItem key={index + 1} sx={{ pt: 2, pb: 2 }}>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                {data}
              </MenuItem>
            ))}
          </MenuList>
        </Box>
      </Paper>
    </>
  );
};

export default Menu;
