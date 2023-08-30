import {
  Box,
  Button,
  Container,
  Dialog,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";

const Main = () => {
  const theme = useTheme();
  const [alignment, setAlignment] = useState("left");
  const dispatch = useDispatch();

  // dialog
  const [open, setOpen] = useState(false);

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setData(res.data));
  }, []);

  const handleAddToCart = (id) => {
    console.log(id);
    const itemCart = data.find((e, i) => e.id === id);
    dispatch(addToCart({ itemCart }));
    toast.success("Add product successfully!");
  };

  return (
    <Container sx={{ mt: 9 }}>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Box>
          <Typography variant="h5">Selected Products</Typography>
          <Typography fontWeight={300} variant="body1">
            All new ARRIVALS
          </Typography>
        </Box>

        <ToggleButtonGroup
          color="error"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{
            ".Mui-selected": {
              border: "1px solid rgba(233, 69, 96, 0.5) !important",
              color: "#e94560",
              backgroundColor: "initial",
            },
          }}
        >
          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            value="left"
            aria-label="left aligned"
          >
            All Products
          </ToggleButton>
          <ToggleButton
            sx={{ mx: "16px !important", color: theme.palette.text.primary }}
            className="myButton"
            value="center"
            aria-label="center"
          >
            Clother
          </ToggleButton>
          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            value="right"
            aria-label="right aligned"
          >
            Gamming Gear
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      >
        {data.map((item, i) => {
          return (
            <Card
              key={i}
              sx={{
                maxWidth: 333,
                mt: 6,
                ":hover .MuiCardMedia-root ": {
                  rotate: "1deg",
                  scale: "1.1",
                  transition: "0.35s",
                },
                cursor: "pointer",
              }}
            >
              <CardMedia
                onClick={handleClickOpen}
                sx={{ height: 300 }}
                image={item.image}
                title="green iguana"
              />

              <CardContent onClick={handleClickOpen}>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                  </Typography>

                  <Typography variant="subtitle1" component="p">
                    {item.price}
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                  sx={{ textTransform: "capitalize" }}
                  size="large"
                  onClick={() => handleAddToCart(item.id)}
                >
                  <AddShoppingCartOutlinedIcon
                    sx={{ mr: 1 }}
                    fontSize="small"
                  />
                  add to cart
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Stack>

      <Dialog
        sx={{
          ".MuiPaper-root": { minWidth: { xs: "100%", md: 880 } },
          alignItems: "center",
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          sx={{
            ":hover": { color: "red" },
            position: "absolute",
            top: 0,
            right: 0,
          }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
        <ProductDetails />
      </Dialog>
    </Container>
  );
};

export default Main;
