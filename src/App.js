import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { Box, Container, Divider, Typography } from "@mui/material";
import ResponsiveAppBar from "./components/layout/Appbar";
import Home from "./pages/sections/Home";
import Projects from "./pages/sections/Projects";
import About from "./pages/sections/About";
import data from "./assets/svgs/data.svg";
import about from "./assets/svgs/about.svg";
import travel from "./assets/svgs/travel.svg";
import pitch from "./assets/svgs/pitch.svg";
import Programmer from "./components/backgrounds/Programmer";

// Little helpers ...
const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

export default function App() {
  const parallax = useRef(null);
  return (
    <>
      <ResponsiveAppBar />
      <div style={{ width: "100%", height: "100%" }}>
        <Parallax ref={parallax} pages={3}>
        
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            background: "#00ABB3",
            backgroundSize: 'cover',
          }}
        />
          <ParallaxLayer
            offset={0}
            speed={0.1}

          >
            <Programmer />
          </ParallaxLayer>





          <ParallaxLayer offset={1} speed={0.6} style={{ background: '#3C4048' }} />
          <ParallaxLayer offset={2} speed={0.6} style={{ background: '#EAEAEA' }} />
          
          {/* <ParallaxLayer
            offset={0.95}
            speed={0.1}
            style={{
              background:
                "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
            }}
          >
            <Box component="img" src={about} style={{width:'25%', marginTop:'10%',marginLeft:'10%', opacity:0.1}}/>
          </ParallaxLayer> */}


          <ParallaxLayer
            offset={1}
            speed={0.3}
            sx={{
              justifyContent:'center',
              marginLeft: "10%",
              marginTop: {
                xs: "100%",
                sm: "40%",
                md: "0%",
                lg: "10%",
                xl: "0%",
              },
            }}
          >
            <Divider><Typography variant="h1" style={{color:'#00ADB5'}}>ABOUT ME</Typography></Divider>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={0}
            sx={{
              marginLeft: "10%",
              marginTop: {
                xs: "100%",
                sm: "40%",
                md: "0%",
                lg: "10%",
                xl: "0%",
              },
            }}
          >
            <Divider><Typography variant="h1" style={{color:'#00ADB5'}}>PROJECTS</Typography></Divider>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.1} style={{ opacity: 0.1 }}>
            <img
              src={data}
              style={{ display: "block", width: "35%", marginLeft: "65%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1.5} speed={0.5} style={{ opacity: 0.15 }}>
            <img
              src={travel}
              style={{ display: "block", width: "20%", marginLeft: "20%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={0}
            speed={0.6}
            // onClick={() => parallax.current.scrollTo(1)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              // background:'linear-gradient(to right, #0f2027, #203a43, #2c5364)'
            }}
          >
            {/* <img src={url('server')} style={{ width: '20%' }} /> */}
            <Container>
              <Home />
            </Container>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.6}
            // onClick={() => parallax.current.scrollTo(2)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <img src={url('bash')} style={{ width: '40%' }} /> */}
            <Box
              sx={{
                marginTop: {
                  xs: "100%",
                  sm: "40%",
                  md: "0%",
                  lg: "10%",
                  xl: "0%",
                },
              }}
            >
              <About />
            </Box>
          </ParallaxLayer>


          <ParallaxLayer
            offset={2}
            speed={0}
            factor={2}
            style={{
              
              // background: "linear-gradient(to right, #ece9e6, #ffffff)",
            }}
          >
            <Box sx={{marginLeft:'5%', marginRight:'5%', marginTop:'7%'}}>
            <Projects />
            </Box>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.9}
            speed={0.2}
          >
            <Box component="img" src={pitch} style={{opacity:.5,   marginLeft:'35%', width:'24%'}}></Box>
          </ParallaxLayer>


        </Parallax>
      </div>
    </>
  );
}
