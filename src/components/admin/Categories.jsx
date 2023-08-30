import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Button, Container } from "@mui/material";
import Stack from "@mui/material/Stack";

export default function Categories() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then((res) => setData(res.data));
    console.log(data);
  }, []);

  return (
    <Container>
      <Button variant="contained" color="info" sx={{ my: 3 }}>
        Add Categories
      </Button>
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
              <TableCell align="left">Categories Name</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.id}
                </TableCell>
                <TableCell align="left">{item.catName}</TableCell>
                <TableCell align="left">
                  <Stack direction={"row"} spacing={1}>
                    <Button variant="contained" color="warning">
                      Edit
                    </Button>
                    <Button variant="contained" color="error">
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
