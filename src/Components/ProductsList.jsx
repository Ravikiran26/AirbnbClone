import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

function ProductList({ products }) {
  console.log("Products received in ProductList:", products);

  return (
    <Grid container spacing={3}>
      {products.length === 0 ? (
        <Typography variant="h6" sx={{ margin: "20px auto" }}>
          No products available
        </Typography>
      ) : (
        products.map((product) => {
          console.log("Rendering product:", product.title);

          return (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.description}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    ${product.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })
      )}
    </Grid>
  );
}

export default ProductList;
