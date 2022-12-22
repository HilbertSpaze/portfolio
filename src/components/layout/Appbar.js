import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import NavContext from "../../context/NavContext";

const pages = ["Home", "About", "Contact"];

export default function ResponsiveAppBar(props) {
  const { navColor, setNavColor } = useContext(NavContext);
  const colorMap = {
    Home: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    About: "transparent",
    Contact: "transparent",
  };
  const navigate = useNavigate();
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const StyledButton = styled(Button)`
    padding: 6px 12px;
    &:hover {
      color: #BEED76;
    }
    // &:focus {
    //   background-color: green;
    // }
`;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {pages.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => {
                navigate(`/${item}`);
                setNavColor(colorMap[item]);
              }}
            >
              <ListItemText primary={item} primaryTypographyProps={{fontSize: '35px', color:'white'}}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      style={{
        background: `${navColor}`,
        boxShadow: "none",
        backdropFilter: "blur(20px)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box component="nav">
            <Drawer
              container={container}
              variant="temporary"
              anchor="top"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "block", md:"block", lg:"block", xl:"block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: "100%",
                  height: "100%",
                  background:'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <StyledButton
                key={page}
                onClick={() => {
                  navigate(`/${page}`);
                  setNavColor(colorMap[page]);
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </StyledButton>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Typography>HLBERT LAZATIN</Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
