import { Box, Grid, Paper, Typography, Stack } from "@mui/material";

import React from "react";
import user from "../../assets/images/paris_crop.jpg";
import Highlight from "../../components/cards/Highlight";
import AnalyticsIcon from "@mui/icons-material/Analytics";

export default function About() {
  return (
    <>
      <Box
        sx={{
          marginTop: { xs: "100%", sm: "100%", md: "0%", lg: "10%", xl: "0%" },
          marginLeft: "10%",
          marginRight: "10%",
        }}
      >
        <Grid
          container
          alignItems="top"
          spacing={5}
          style={{ justifyContent: "center" }}
        >
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <Box
              component="img"
              src={user}
              style={{ borderRadius: 8 }}
              sx={{
                width: {
                  xs: "80%",
                  sm: "100%",
                  md: "0%",
                  lg: "10%",
                  xl: "80%",
                },
              }}
            />
          </Grid>
          <Grid direction="column" item xs={12} sm={12} md={12} lg={8} xl={8}>
            <Grid container>
              <Grid xl={3} style={{ marginRight: 10 }}>
                <Highlight
                  title={"Data Scientist"}
                  duration={"3+ years"}
                  icon={<AnalyticsIcon />}
                />
              </Grid>

              <Grid xl={3} style={{ marginRight: 10 }}>
                <Highlight
                  title={"Work Experience"}
                  duration={"6+ years"}
                  icon={<AnalyticsIcon />}
                />
              </Grid>
              <Grid xl={3} style={{ marginRight: 10 }}>
                <Highlight
                  title={"Valued Created by DS"}
                  duration={"1Million USD"}
                  icon={<AnalyticsIcon />}
                />
              </Grid>
            </Grid>

            <p
              class="lead"
              style={{
                fontSize: 21,
                color: "lightgray",
                textAlign: "justify",
                fontSize: 23,
              }}
            >
              Hi there! My experience in data analysis, modeling and
              simulations extend back to my physics undergad days. I have had
              the opportunity to work on a variety of data-driven projects
              across a range of industries, including operations, supply chain,
              all of which has created actionable insights, cost saving and
              increase in profit.
              <br></br>
              <br></br>
              In my current role as a data scientist at Moog, I have been
              responsible for developing and implementing machine learning
              models as well as building data products, pipelines and
              infrastructures. I am skilled in both the front-end and back-end
              aspects of data science.
              <br></br>
              <br></br>
              Outside of work, I love to travelling, do landscape photography,
              play video games, badminton or watch NBA.
            </p>

            
          </Grid>
          
          
        </Grid>

      </Box>
    </>
  );
}
