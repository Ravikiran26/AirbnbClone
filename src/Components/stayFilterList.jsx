import React from "react";
import { Button, Box } from "@mui/material";

function StayFilterList({ filters = [], setSelectedStayType }) {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", marginBottom: 4 }}>
      <Button variant="outlined" onClick={() => setSelectedStayType("")}>
        All Stays
      </Button>
      {filters.map((stayType, index) => (
        <Button
          key={index}
          variant="outlined"
          sx={{ margin: 1 }}
          onClick={() => setSelectedStayType(stayType)}
        >
          {stayType}
        </Button>
      ))}
    </Box>
  );
}

export default StayFilterList;
