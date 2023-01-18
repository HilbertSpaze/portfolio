import React, { useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import {
  AppBar,
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
} from "@mui/material";
import NavContext from "../../context/NavContext";

const pages = ["Home", "Projects", "About", "Contact"];

export default function ResponsiveAppBar(props) {
  // const {
  //   navColor,
  //   setNavColor,
  //   fontColor,
  //   setFontColor,
  //   logoColor,
  //   setLogoColor,
  //   // location,
  //   colorConfig,
  // } = useContext(NavContext);

  // useEffect(() => {
  //   setNavColor(colorConfig[location].nav);
  //   setFontColor(colorConfig[location].font);
  //   setLogoColor(colorConfig[location].logo);
  // }, [location, colorConfig, setNavColor, setFontColor, setLogoColor]);

  // const navigate = useNavigate();
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
      color: 'white';
    }
  `;

  const StyledListItem = styled(ListItem)`

 "&$selected:hover": {
    backgroundColor: "purple",
    color: "white",
    "& .MuiListItemIcon-root": {
      color: "white"
    }
  },
  "&:hover": {
    backgroundColor: "blue",
    color: "white",
    "& .MuiListItemIcon-root": {
      color: "white"
    }
  }
`;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {pages.map((item) => {
          return item.valueOf() === "Contact" ? (
            <StyledListItem key={item} disablePadding>
              <ListItemButton
                sx={{ textAlign: "center" }}
                href="mailto:hslazatinjr@gmail.com"
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{ fontSize: "35px", color: "white" }}
                />
              </ListItemButton>
            </StyledListItem>
          ) : (
            <StyledListItem key={item} disablePadding>
              <ListItemButton
                sx={{ textAlign: "center" }}
                onClick={() => {
                  // navigate(`/${item}`);
                }}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{ fontSize: "35px", color: "#00ADB5" }}
                />
              </ListItemButton>
            </StyledListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      style={{
        background: `#E2E2E2`,
        boxShadow: "none",
        // backdropFilter: "blur(20px)",
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
              <MenuIcon style={{ color: `white` }} />
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
                display: {
                  xs: "block",
                  sm: "block",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: "100%",
                  background: "transparent",
                  backdropFilter: "blur(30px)",
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => {
              return page.valueOf() === "Contact" ? (
                <StyledButton
                  key={page}
                  href="mailto:hslazatinjr@gmail.com"
                  sx={{
                    my: 2,
                    display: "block",
                    color: `black`,
                    fontWeight: "bold",
                  }}
                >
                  {page}
                </StyledButton>
              ) : (
                <StyledButton
                  key={page}
                  onClick={() => {
                    // navigate(`/${page}`);
                  }}
                  sx={{
                    my: 2,
                    display: "block",
                    color: `black`,
                    fontWeight: "bold",
                  }}
                >
                  {page}
                </StyledButton>
              );
            })}
          </Box>

          <IconButton
            href="https://www.linkedin.com/in/hlazatin"
            target="_blank"
            style={{ color: `black` }}
          >
            <LinkedInIcon style={{ fontSize: 35 }} />
          </IconButton>
          <IconButton
            href="https://github.com/hlazatin"
            target="_blank"
            style={{ color: `black` }}
          >
            <GitHubIcon style={{ fontSize: 35 }} />
          </IconButton>

          {/* <Typography
            variant="h6"
            style={{
              fontWeight: "bold",
              paddingLeft: 13,
              color: `#4FBDBA`,
            }}
          >
            HILBERT LAZATIN
          </Typography> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
