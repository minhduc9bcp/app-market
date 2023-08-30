import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Button, Container, Grid, Input } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from "react-toastify";

export default function Products() {
  const [product, setProduct] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setProduct(res.data));
  }, []);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleAdd = (event) => {
    event.preventDefault();
    if (title === "" || title === null) {
      toast.error("Please Enter title!");
    } else if (price === "" || price === null) {
      toast.error("Please Enter price!");
    } else if (description === "" || description === null) {
      toast.error("Please Enter description!");
    } else if (category === "" || category === null) {
      toast.error("Please Enter category!");
    } else if (image === "" || image === null) {
      toast.error("Please Choice image!");
    } else {
      axios.post("http://localhost:3000/products", {
        title,
        price,
        description,
        category,
        image,
        rating: {
          rate: 0,
          count: 1,
        },
      });

      toast.success("Success");
      handleClose();
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete?")) {
      axios.delete(`http://localhost:3000/products/${id}`);
      toast.success("Delete completed!");
    }
  };

  return (
    <Container sx={{ position: "relative" }}>
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
      <Button
        onClick={handleOpen}
        variant="contained"
        color="info"
        sx={{ my: 3 }}
      >
        Add Categories
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          component="form"
          noValidate
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 720,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add products
          </Typography>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  name="title"
                  autoComplete="off"
                  autoFocus
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="price"
                  label="Price"
                  name="price"
                  autoComplete="off"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="desc"
                  label="Descriptions"
                  required
                  fullWidth
                  multiline
                  rows={4}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="category"
                  label="Category"
                  name="category"
                  autoComplete="off"
                  onChange={(e) => setCategory(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6} my={3}>
                <Input type="file" onChange={(e) => setImage(e.target.value)} />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button variant="contained" onClick={handleAdd}>
                  Add
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ display: "none" }}
                >
                  Update
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="a dense table">
          <TableHead
            sx={{
              bgcolor: "aliceblue",
              textTransform: "uppercase",
              fontWeight: "bold !important",
            }}
          >
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="left">Image</TableCell>
              <TableCell align="left">productName</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Category</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.id}
                </TableCell>
                <TableCell align="left">
                  <img src={item.image} alt="" width={"100px"} />
                </TableCell>
                <TableCell align="left">{item.title}</TableCell>
                <TableCell align="left">{item.price}</TableCell>
                <TableCell align="left">{item.category}</TableCell>
                <TableCell align="left">
                  <Stack direction={"row"} spacing={1}>
                    <Button variant="contained" color="warning">
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
