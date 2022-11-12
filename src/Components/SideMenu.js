import React from "react";
import {
  Paper,
  MenuList,
  MenuItem,
  ListItemIcon,
  Box,
  IconButton,
  Menu,
  Typography,
  Grid,
} from "@mui/material";

import Check from "@mui/icons-material/Check";
import MenuIcon from "@mui/icons-material/Menu";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SearchBox from "../Components/SearchBox";

import User from "../Components/User";
const SideMenu = ({ menuArr }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const Logo = () => {
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
      </>
    );
  };

  return (
    <>
      {matches ? (
        <Logo />
      ) : (
        <Grid
          container
          columnSpacing={1}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            // width: "60vh",
            pt: 2,
            pb: 2,
          }}
        >
          <Grid item xs={2}>
            <Logo />
          </Grid>
          <Grid item xs={8}>
            <SearchBox />
          </Grid>
          <Grid item xs={2}>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "flex", lg: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {menuArr?.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Grid>
        </Grid>
      )}
      {/* <Logo sx={{ display: { xs: "none", sm: "none" } }} /> */}

      <Paper sx={{ width: 320, boxShadow: 0 }}>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "none", lg: "flex", xl: "flex" },
          }}
        >
          <MenuList>
            {menuArr?.map((data, index) => (
              <MenuItem key={index + 1} sx={{ pt: 2, pb: 2 }}>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                {data}
              </MenuItem>
            ))}
          </MenuList>
        </Box>
        <User />
      </Paper>
    </>
  );
};

export default SideMenu;
