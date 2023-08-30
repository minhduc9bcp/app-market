import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import AddShoppingCartOutlined from "@mui/icons-material/AddShoppingCartOutlined";

export default function ProductDetails() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { sx: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img src="src\assets\images\products\2.jpg" alt="" width={330} />
      </Box>

      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">MEN FASHION</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          $12.99
        </Typography>
        <Typography variant="body1">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>

        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          {[
            "src/assets/images/products/2.jpg",
            "src/assets/images/products/1.jpg",
          ].map((item) => {
            return (
              <img
                style={{ borderRadius: 3 }}
                height={100}
                width={90}
                key={item}
                src={item}
                alt=""
              />
            );
          })}
        </Stack>

        <Button
          sx={{
            mb: { xs: 1, sm: 0 },
            textTransform: "capitalize",
          }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
}
