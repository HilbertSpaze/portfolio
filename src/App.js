import React from "react";
import Home from "./pages/sections/Home";
import About from "./pages/sections/About";
import Projects from "./pages/sections/Projects";
import { Box, Grid } from "@mui/material";
import ResponsiveAppBar from "./components/layout/Appbar";
import Footer from "./pages/sections/Footer";

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
                background:'linear-gradient(to right,#060913, #171d36)',
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
              background:"#fcfffc",
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
              background:'linear-gradient(to bottom, #fcfffc, #f5f6ff, #f5f6ff)',
             minHeight: "90vh" }}
          >
            <Box
              sx={{
                // background:'linear-gradient(to bottom, #ffffff, #f5f5ff, #ffffff)',
                paddingLeft: "13%",
                paddingRight: "13%",
                paddingTop: "2%",
              }}
            >
              <About />
            </Box>
          </Grid>




          <Grid
            item
            xs={12}
            style={{ background:'linear-gradient(to bottom, #2f354a, #11182e, #060913)', minHeight: "20vh"}}
          >

              <Footer/>

          </Grid>
        </Grid>
      </div>
    </>
  );
}
