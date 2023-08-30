import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import Users from "../components/admin/Users";
import Categories from "../components/admin/Categories";
import Products from "../components/admin/Products";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Admin() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", p: 4 }}>
      <Typography
        sx={{
          bgcolor: "#2b3445",
          color: "#fff",
          m: 2,
          p: 1,
          fontWeight: "normal",
          fontSize: "18px",
          textAlign: "center",
        }}
      >
        ADMIN MANAGEMENT
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider", fontWeight: 500 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Users" {...a11yProps(0)} />
          <Tab label="Categoreis" {...a11yProps(1)} />
          <Tab label="Products" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Users />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Categories />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Products />
      </CustomTabPanel>
    </Box>
  );
}
