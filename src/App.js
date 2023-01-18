import React from "react";
import Home from "./pages/sections/Home";
import About from "./pages/sections/About";
import Projects from "./pages/sections/Projects";
import { Box, Grid } from "@mui/material";
import ResponsiveAppBar from "./components/layout/Appbar";

export default function App() {
  return (
    <>
      <ResponsiveAppBar />
      <div>
        <Grid container spacing={1} direction="column">
          <Grid
            item
            xs={12}
            style={{  minHeight: "102vh"}}
          >
            <Box
              sx={{
                // backgroundImage:`url(${bg})`,
                background:'linear-gradient(to right, #000000, #434343)',
                paddingLeft: "20%",
                paddingRight: "20%",
                paddingTop: "10%",
                paddingBottom:"10%",
                zIndex:-1,
              }}
            >
              <Box sx={{zIndex:1}}/>
              <Home />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            style={{
              // background:"linear-gradient(to bottom, #24243e, #302b63, #24243e)",
              minHeight: "105vh",
            }}
          >
            <Box
              sx={{
                paddingLeft: "13%",
                paddingRight: "13%",
                paddingTop: "5%",
                // paddingBottom:"3%"
              }}
            >
              <Projects />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            style={{ 
              // background:'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)',
             minHeight: "90vh" }}
          >
            <Box
              sx={{
                background:'linear-gradient(to bottom, #ffffff, #f5f5ff, #ffffff)',
                paddingLeft: "13%",
                paddingRight: "13%",
                // paddingTop: "-15%",
              }}
            >
              <About />
            </Box>
          </Grid>


        </Grid>
      </div>
    </>
  );
}
