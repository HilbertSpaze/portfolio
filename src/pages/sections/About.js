import { Box, Card, Grid, Paper } from "@mui/material";

import React from "react";
import user from "../../assets/images/paris_crop.jpg";
import Highlight from "../../components/cards/Highlight";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SavingsIcon from "@mui/icons-material/Savings";
import WorkIcon from "@mui/icons-material/Work";
import { AnimatedHeader } from "../../components/headers/AnimatedHeader";
import { Window } from "../../components/cards/AnimatedPopCard";

export default function About() {
  return (
    <>
      <Box>
        <Card
          // variant="outlined"
          style={{ background: "transparent", borderRadius: 10 }}
          elevation={0}
          sx={{
            // paddingLeft: "7%",
            // paddingRight: "7%",
            // paddingTop: "3%",
            // paddingBottom: "3%",
            // border: "1px solid lightgray",
          }}
        >
          <Grid
            container
            alignItems="top"
            spacing={8}
            style={{ justifyContent: "center", marginTop: "1%" }}
          >
            <Grid item xs={12} sm={12} md={12} lg={4} xl={3.5}>
              <AnimatedHeader
                title={"About Me"}
                color={"white"}
                fontSize={60}
              ></AnimatedHeader>
              <Window
                rootMargin={"0%"}
                childElement={
                  <Box
                    component="img"
                    src={user}
                    style={{ borderRadius: 20 }}
                    sx={{
                      // marginBottom: "30%",
                      width: {
                        xs: "80%",
                        sm: "100%",
                        md: "70%",
                        lg: "10%",
                        xl: "100%",
                      },
                    }}
                  />
                }
              />
            </Grid>

            <Grid
              container
              direction="column"
              item
              xs={12}
              sm={12}
              md={12}
              lg={8}
              xl={8.5}
            >
              <Grid item>
                <Grid container spacing={4} columns={15}>
                  <Grid item xs={5}>
                    <Window
                      rootMargin={"0%"}
                      childElement={
                        <Highlight
                          title={"Data Scientist"}
                          duration={"3+ years"}
                          icon={
                            <AnalyticsIcon
                              style={{ fontSize: 40, color: "white" }}
                            />
                          }
                        />
                      }
                    />
                  </Grid>

                  <Grid item xs={5}>
                    <Window
                      rootMargin={"0%"}
                      childElement={
                        <Highlight
                          title={"Work Experience"}
                          duration={"6+ years"}
                          icon={
                            <WorkIcon
                              style={{ fontSize: 40, color: "white" }}
                            />
                          }
                        />
                      }
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <Window
                      rootMargin={"0%"}
                      childElement={
                        <Highlight
                          title={"Project Impact (Work)"}
                          duration={"300K USD"}
                          icon={
                            <SavingsIcon
                              style={{ fontSize: 40, color: "white" }}
                            />
                          }
                        />
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Window
                  rootMargin={"20%"}
                  childElement={
                    // <Paper
                    //   elevation={0}
                    //   sx={{ padding: 5, background: "#2f3f52" }}
                    // >
                    <p
                      className="lead"
                      style={{
                        color: "#FFFFFE",
                        textAlign: "justify",
                        fontSize: "1.35rem",
                      }}
                    >
                      Hi there! I'm Hilbert Lazatin. I've been working data-driven projects across a range of industries,
                      including operations, supply chain, all of which has
                      created actionable insights, cost saving and increase in
                      profit.
                      <br></br>
                      <br></br>
                      In my current role as a data scientist at{" "}
                      <strong>Moog</strong>, I have been responsible for
                      developing and implementing machine learning models as
                      well as building data products, pipelines and
                      infrastructures. I am skilled in both the front-end and
                      back-end aspects of data science.
                      <br></br>
                      <br></br>
                      Outside of work, I love to travel, do landscape
                      photography, play video games, badminton or watch NBA
                      games.
                    </p>
                    // </Paper>
                  }
                />
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
}
