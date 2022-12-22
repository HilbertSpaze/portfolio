import { Paper, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import GenerateGrid from "../features/generateGrid";
import Fade from "@mui/material/Fade";
import { Container } from "@mui/material";
import { styled as styled1 } from "@mui/material/styles";
import { bounce } from "react-animations";

import styled  from "styled-components";
import {  keyframes } from 'styled-components';


export default function Projects(props) {
  const bounceAnimation = keyframes`${bounce}`;
  const Bounce = styled.div`
  animation: 1s ${bounceAnimation};
`;
  const StyledTab = styled1((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: "none",
      fontSize: 17,
      marginRight: theme.spacing(1),
      "&:hover": {
        color: "#2C5364",
        opacity: 1,
      },
      "&.Mui-selected": {
        color: "white",
        backgroundColor: "#203A43",
      },
    })
  );

  const [value, setValue] = useState("ALL");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <div
        class="jumbotron jumbotron-fluid"
        style={{
          background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
          paddingTop: 80
        }}
      >
        {/*  */}
        
          <div class="container" >
          <Bounce>
            <Typography variant="h2" sx={{ color: "lightgray" }}>
              Hi, I'm{" "}
              <span style={{ color: "white" }}>
                <strong>Hilbert</strong>
              </span>
              .
            </Typography>
            </Bounce>

            <Fade in timeout={1000}>
              <div>
            <Typography variant="h4" sx={{ color: "lightgray" }}>
              I am a{" "}
              <span style={{ color: "white" }}>
                <strong>full-stack</strong>
              </span>{" "}
              data scientist.
            </Typography>

            
            <p class="lead" style={{ color: "lightgray" }}>
              Currently working at an Aerospace company building scalable and
              impactful data science and machine learning solutions.
            </p>
            </div>
            </Fade>
            
          </div>
          
        {/* </Fade> */}
      </div>

      <div>
        <div class="container" style={{ marginBottom: 30 }}>
          <Paper variant="outlined" elevation={3}>
            <Tabs
              value={value}
              scrollButtons="auto"
              allowScrollButtonsMobile
              centered
              onChange={handleChange}
              textColor="secondary"
              TabIndicatorProps={{ style: { backgroundColor: "#203A43" } }}
              sx={{
                "& .MuiTabs-flexContainer": {
                  flexWrap: "wrap",
                },
              }}
            >
              <StyledTab label="All" value="ALL" />
              <StyledTab label="Machine Learning" value="ML" />
              <StyledTab label="Big Data Analytics" value="BD" />
              <StyledTab label="Data Mining" value="DMW" />
              <StyledTab label="Others" value="OTH" />
            </Tabs>
          </Paper>
        </div>
        <Container maxWidth="xl" sx={{ marginBottom: 5 }}>
          <GenerateGrid tag={value}></GenerateGrid>
        </Container>
      </div>
    </React.Fragment>
  );
}
