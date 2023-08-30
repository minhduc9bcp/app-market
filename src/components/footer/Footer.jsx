import { Box, Typography, Button } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: 1.3,
        mt: 9,
      }}
    >
      <Typography
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        color={"HighlightText"}
        variant="h5"
        sx={{ fontSize: 18 }}
      >
        Copyright by
        <Button
          sx={{
            mx: 0.5,
            fontSize: "18px",
            color: "#ff7790",
          }}
          variant="text"
          color="primary"
        >
          HNMD
        </Button>
        ©2023
      </Typography>
    </Box>
  );
};

export default Footer;
