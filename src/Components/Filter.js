import React from "react";

import { Box, Paper, IconButton, TextField } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";

const Filter = () => {
  return (
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
          <TuneIcon />
        </IconButton>
        <TextField
          variant="standard"
          sx={{ ml: 1, flex: 1 }}
          placeholder="Filter"
          inputProps={{ "aria-label": "Filter" }}
          InputProps={{
            disableUnderline: true,
          }}
        />
      </Paper>
    </Box>
  );
};

export default Filter;
