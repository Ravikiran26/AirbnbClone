import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  TextField,
  Collapse,
} from "@mui/material";
import StayFilterList from "./Components/stayFilterList";
import ProductList from "./Components/ProductsList";
import GuestSelection from "./Components/GuestSelection";
import "./App.css";

function App() {
  const [filters, setFilters] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedStayType, setSelectedStayType] = useState("");
  const [showGuestMenu, setShowGuestMenu] = useState(false);

  useEffect(() => {
    console.log("Fetching stay categories...");

    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        console.log("Categories fetched:", response.data);
        setFilters(response.data);
      })
      .catch((error) => console.error("Error fetching categories:", error));

    const apiUrl = selectedStayType
      ? `https://fakestoreapi.com/products/category/${selectedStayType}`
      : "https://fakestoreapi.com/products";

    console.log(`Fetching products from: ${apiUrl}`);

    axios
      .get(apiUrl)
      .then((response) => {
        console.log("Products fetched:", response.data);
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [selectedStayType]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Stay Finder
      </Typography>

      {/* Stay Filter List */}
      <StayFilterList
        filters={filters}
        setSelectedStayType={setSelectedStayType}
      />

      <Box sx={{ marginTop: 4 }}>
        <Grid container spacing={3} alignItems="center">
          {/* Check-in Date */}
          <Grid item xs={12} sm={4}>
            <TextField
              label="Check-in Date"
              type="date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          {/* Check-out Date */}
          <Grid item xs={12} sm={4}>
            <TextField
              label="Check-out Date"
              type="date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          {/* Guest Selection */}
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Button
                variant="contained"
                onClick={() => setShowGuestMenu((prev) => !prev)}
                sx={{ width: "100%" }}
              >
                Guest Selection
              </Button>

              {/* Scrollable Dropdown */}
              <Collapse in={showGuestMenu} timeout="auto" unmountOnExit>
                <Box
                  sx={{
                    maxHeight: "200px", // Adjust height as needed
                    overflowY: "auto", // Make it scrollable
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    marginTop: "8px",
                    padding: "10px",
                    backgroundColor: "white",
                    position: "absolute",
                    width: "100%",
                    zIndex: 10,
                  }}
                >
                  <GuestSelection />
                </Box>
              </Collapse>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        {/* Product List Section */}
        <Grid item xs={12}>
          <ProductList products={products} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
