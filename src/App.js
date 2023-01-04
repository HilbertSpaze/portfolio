import React from "react";
import Home from "./pages/sections/Home";
import About from "./pages/sections/About";
import Projects from "./pages/sections/Projects";
import { Box, Container, Grid } from "@mui/material";
import ResponsiveAppBar from "./components/layout/Appbar";
import bg from "./assets/svgs/about.svg";

export default function App() {
  return (
    <>
      <ResponsiveAppBar />
      <div>
        <Grid container spacing={1} direction="column">
          <Grid
            item
            xs={12}
            style={{ background:'#0b0c10', minHeight: "102vh" }}
          >
            <Box
              sx={{
                // backgroundImage:`url(${bg})`,
                paddingLeft: "20%",
                paddingRight: "20%",
                paddingTop: "10%",
                paddingBottom: "10%",
              }}
            >
              <Box sx={{zIndex:20,  backgroundImage:`url(${bg}`}}/>
              <Home />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            style={{ background: "#1F2833", minHeight: "102vh" }}
          >
            <Box
              sx={{
                paddingLeft: "15%",
                paddingRight: "15%",
                paddingTop: "3%",
                paddingBottom: "5%",
              }}
            >
              <About />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            style={{
              minHeight: "102vh",
            }}
          >
            <Box
              sx={{
                paddingLeft: "10%",
                paddingRight: "10%",
                paddingTop: "3%",
                paddingBottom: "5%",
              }}
            >
              <Projects />
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
