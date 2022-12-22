import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import user from "../assets/images/paris_crop.jpg";
import Slide from "@mui/material/Slide";
import CustomTimeline from "../components/content/Timeline";
import Technologies from "../components/cards/Technologies";
export default function About(props) {


  return (
    <>
        <div
          class="jumbotron jumbotron-fluid"
          style={{
            marginBottom: 10,
            paddingTop:110,
            background: "#05386b",
          }}
        >
          <Slide direction="right" in timeout={1000}>
            <Container>
            <Grid container alignItems="center" spacing={5}>
              <Grid item xs = {12} sm ={12} md={12} lg={4} xl={4}>
              <img
                src={user}
                style={{ borderRadius: 8, maxWidth: "100%", maxHeight:"90%" }}
                alt=""
              />
              </Grid>
              <Grid direction="column" item xs = {12} sm = {12} md = {12} lg={8} xl={8}>
                <h1 class="display-4" style={{ color: "#f8f9fa" }}>
                  About Me
                </h1>

                <p class="lead" style={{ fontSize: 25, color: "#dee2e6" }}>
                  I am a data scientist but also wears other hats (from data engineering to web development). I love building cool stuff that can
                  create value for stakeholders. I like to innovate and address inefficiencies. 
                  In my free time, i play video games. 
                </p>
                <Typography variant="subtitle2" sx={{color:'white'}}>Technologies I've worked on before.</Typography>
                <Technologies />
                </Grid>
          </Grid>
          </Container>
          </Slide>
        </div>
        <Stack
          direction="column"
          sx={{
            alignItems: "center",
            backgroundColor:
              "#EDF5E1",
          }}
        >
          <Slide direction="up" in timeout={1000}>
            <div>
          <h1 class="display-4" style={{ p: 1 }}>
            A Brief History
          </h1>
          <CustomTimeline />
          </div>
          </Slide>
        </Stack>
    </>
  );
}
