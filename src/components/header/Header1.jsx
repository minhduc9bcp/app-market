import { useContext, useEffect, useState } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const user = useSelector((state) => state.auth.signIn.currentUser);
  const [displayUser, setDisplayUser] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => {});
  }, []);

  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: "4px",
      }}
    >
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined fontSize="small" />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined fontSize="small" />
              </IconButton>
            )}
          </div>

          <FacebookIcon
            sx={{
              fontSize: "16px",
              color: "#fff",
              cursor: "pointer",
            }}
          />
          <InstagramIcon
            sx={{
              fontSize: "16px",
              mx: 1,
              color: "#fff",
              cursor: "pointer",
            }}
          />
          <YouTubeIcon
            sx={{
              fontSize: "16px",
              color: "#fff",
              cursor: "pointer",
            }}
          />

          <Typography sx={{ mx: 2, color: "#fff", fontSize: 20 }}>|</Typography>

          <Typography
            sx={{
              mr: 2,
              p: "3px 10px",
              bgcolor: "#D23F57",
              borderRadius: "12px",
              fontSize: "10px",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            HOT
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 300,
              color: "#fff",
            }}
            variant="body2"
          >
            Free Ship
          </Typography>

          <Box flexGrow={1} />

          {/* Link singup */}

          {user ? (
            <>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "normal",
                  color: "#fff",
                  lineHeight: 0,
                  "&:hover": { color: "#D23F57" },
                  cursor: "pointer",
                }}
                variant="body2"
              >
                {user.fullName}
              </Typography>

              <Typography sx={{ mx: 0.5, color: "#fff", fontSize: 18 }}>
                |
              </Typography>

              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "normal",
                  color: "#fff",
                  lineHeight: 0,
                  "&:hover": { color: "#D23F57" },
                  cursor: "pointer",
                }}
                variant="body2"
              >
                Logout
              </Typography>
            </>
          ) : (
            <>
              <Link to={"/signin"}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "normal",
                    color: "#fff",
                    lineHeight: 0,
                    "&:hover": { color: "#D23F57" },
                    cursor: "pointer",
                  }}
                  variant="body2"
                >
                  Login
                </Typography>
              </Link>

              <Typography sx={{ mx: 0.5, color: "#fff", fontSize: 18 }}>
                |
              </Typography>

              <Link to={"/signup"}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "normal",
                    color: "#fff",
                    lineHeight: 0,
                    "&:hover": { color: "#D23F57" },
                    cursor: "pointer",
                  }}
                  variant="body2"
                >
                  Register
                </Typography>
              </Link>
            </>
          )}

          {/* light mode and dark mode */}
        </Stack>
      </Container>
    </Box>
  );
};

export default Header1;
