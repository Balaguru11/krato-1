import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import user from "../images/user.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const User = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      {matches && (
        <>
          <Box height={100} />
          <Box
            sx={{
              m: 5,
              display: "block",
              maxWidth: "100px",
              //   height: "100px",
              //   backgroundColor: "black",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
            }}
          >
            <Avatar alt="User" src={user} sx={{ p: 1, m: 1 }} />
            <Typography variant="caption" component="p">
              Username
            </Typography>
          </Box>
        </>
      )}
    </>
  );
};

export default User;
