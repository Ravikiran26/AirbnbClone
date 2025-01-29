import React, { useState } from "react";
import { Box, Typography, Select, MenuItem, InputLabel, FormControl } from "@mui/material";

function GuestSelection() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  return (
    <Box sx={{ marginTop: 4, padding: 2, border: "1px solid #ddd", borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Select Guests
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        <FormControl fullWidth>
          <InputLabel>Adults</InputLabel>
          <Select value={adults} onChange={handleChange(setAdults)}>
            {[...Array(10).keys()].map((num) => (
              <MenuItem key={num} value={num + 1}>
                {num + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Children</InputLabel>
          <Select value={children} onChange={handleChange(setChildren)}>
            {[...Array(5).keys()].map((num) => (
              <MenuItem key={num} value={num}>
                {num}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Infants</InputLabel>
          <Select value={infants} onChange={handleChange(setInfants)}>
            {[...Array(3).keys()].map((num) => (
              <MenuItem key={num} value={num}>
                {num}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Pets</InputLabel>
          <Select value={pets} onChange={handleChange(setPets)}>
            {[...Array(3).keys()].map((num) => (
              <MenuItem key={num} value={num}>
                {num}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}

export default GuestSelection;
