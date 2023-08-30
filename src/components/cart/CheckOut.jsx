import {
  Box,
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

export default function CheckOut() {
  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);
  const dispatch = useDispatch();

  return (
    <Container>
      <Typography variant="h4" fontWeight={600} my={5}>
        Check Out Items
      </Typography>
      {cartItems.length > 0 ? (
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="a dense table">
            <TableHead
              sx={{
                bgcolor: "aliceblue",
                textTransform: "uppercase",
                fontWeight: "bold !important",
              }}
            >
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell align="left">Image</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="left">
                    <img src={item.itemCart.image} alt="" width={"100px"} />
                  </TableCell>
                  <TableCell align="left">{item.itemCart.title}</TableCell>
                  <TableCell align="left">{item.itemCart.price}</TableCell>
                  <TableCell align="left">
                    {" "}
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => dispatch(removeFromCart(item.itemCart.id))}
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        "Don't have products"
      )}
    </Container>
  );
}
