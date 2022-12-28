import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import user from "../../assets/images/paris_crop.jpg";
import Slide from "@mui/material/Slide";


import Experience from "../subpage/Resume/Experience";
import Hobbies from "../subpage/Hobbies/Hobbies";


export default function About() {
  return (
    <>
      <div
        class="jumbotron jumbotron-fluid"
        style={{
          marginBottom: 10,
          paddingTop: 110,
          background: "linear-gradient(to right, #ece9e6, #ffffff)",
        }}
      >
        <Slide direction="bottom" in timeout={1000}>
          <div class="container">
            <Divider>
              <Typography variant="h3" style={{ fontWeight: 'bold' }}>About Me</Typography>
            </Divider>
            <Grid container alignItems="center" spacing={5}>
              <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                <img
                  src={user}
                  style={{
                    borderRadius: 8,
                    maxWidth: "100%",
                    maxHeight: "80%",
                  }}
                  alt=""
                />
              </Grid>
              <Grid
                direction="column"
                item
                xs={12}
                sm={12}
                md={12}
                lg={8}
                xl={8}
              >
                <p class="lead" style={{ fontSize: 21, color: "black" }}>
                  I am a data scientist with 2+ years of experience. My interest with data analytics and AI began when I wanted to 
                  build a trading system that will help me forecast the market. (Though it appears to be a very difficult problem).
                  I began thinking of ways I can apply it to work.
                  <br />
                  <br />
                  I have extensive experience working on predictive modeling, simulations, data analysis.
                  I also got to work on building data / ETL pipelines, web applications and dashboards
                  to fully harness the power of data.
                  I love solving problems and building cool stuff that creates value.
                  <br />
                  <br />Outside of data science, I'm interested in doing: <br/><br/>
                  <Hobbies />
                </p>
                
              </Grid>

            </Grid>


          </div>
        </Slide>
      </div>

      <div
        class="jumbotron jumbotron-fluid"
        style={{
          marginBottom: 10,
          background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        }}
      >
        <div class="container" >
          <Divider>
            <Typography variant="h3" style={{ fontWeight: 'bold', color: '#bdf0e4', marginBottom: 30 }}>Background</Typography>
          </Divider>
          <Experience />
        </div>
      </div>
    </>
  );
}
