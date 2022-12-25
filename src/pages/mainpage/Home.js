import { Button, Paper, Tab, Tabs, Typography, Grid, Divider } from "@mui/material";
import React, { useState } from "react";
import GenerateGrid from "../../utils/generateGrid";
import Fade from "@mui/material/Fade";
import { Container } from "@mui/material";
import { styled as styled1 } from "@mui/material/styles";
import BounceText from "../../components/animation/Bounce";
import TagCloudSkill from "../../components/animation/TagCloudSkill";


export default function Home(props) {

  const StyledTab = styled1((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: "none",
      fontSize: 19,
      color:'black',
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
        className="jumbotron jumbotron-fluid"
        style={{
          background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
          marginBottom:0,

        }}
      >
       
        
          <div className="container" >
            <Grid container alignItems='center' spacing={2}>
            <Grid item xs = {12} sm = {12} md ={6} lg = {6} xl={8}>
          <BounceText text={`Hilbert,`} />

            <Fade in timeout={1000}>
              <div>
            <Typography variant="h3" sx={{ color: "lightgray" }}>
              a {" "}

              {/* <strong>full-stack</strong>{" "} */}
              <strong>DATA SCIENTIST.</strong>
            </Typography>
            <Typography variant="h5" style={{ color: "gray" }}>
              I  do all types of analytics from building {" "} 
              <span style={{color:'lightgray'}}>scalable</span> 
              {" "} machine learning systems,  data products, data pipelines that transforms data to {" "}
              <span style={{color:'lightgray'}}>actionable insights.</span>
            </Typography>
            
            </div>
            </Fade>
            </Grid>
            <Grid item xs = {12} sm = {12} md ={6} lg = {6} xl={4}>
              <TagCloudSkill/>
            </Grid>
            </Grid>
          </div>
        
      </div>

      <div className="jumbotron jumbotron-fluid" style={{marginBottom:0, paddingTop:30, background:'linear-gradient(to right, #ece9e6, #ffffff)'}}>
      <Divider style={{marginBottom:20}}><Typography variant="h6">Below are some side projects I've worked on</Typography></Divider>
        <div className="container" style={{ paddingBottom: 10}}>
          
          
          <Paper variant="outlined" style={{marginBottom:15}}>
            <Tabs
              value={value}
              scrollButtons="auto"
              allowScrollButtonsMobile
              centered
              onChange={handleChange}
              TabIndicatorProps={{ style: { backgroundColor: "white" } }}
              sx={{
                
                "& .MuiTabs-flexContainer": {
                  flexWrap: "wrap",
                },
              }}
            >
              <StyledTab label="All" value="ALL"/>
              <StyledTab label="Machine Learning" value="ML" />
              <StyledTab label="Big Data Analytics" value="BD" />
              <StyledTab label="Data Mining" value="DMW" />
            </Tabs>
          </Paper>
        </div>
        <Container maxWidth="xl" >
          <GenerateGrid tag={value}></GenerateGrid>
        </Container>
      </div>
    </React.Fragment>
  );
}
