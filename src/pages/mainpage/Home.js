import { Button, Paper, Tab, Tabs, Typography, Grid } from "@mui/material";
import React, { useState, useRef } from "react";
import GenerateGrid from "../../utils/generateGrid";
import Fade from "@mui/material/Fade";
import { Container } from "@mui/material";
import { styled as styled1 } from "@mui/material/styles";
import BounceText from "../../components/animation/Bounce";
import TagCloudSkill from "../../components/animation/TagCloudSkill";

export default function Home(props) {
  const myRef = useRef(null)

  const executeScroll = () => {
    if (myRef.current) {
      const offsetBottom = myRef.current.offsetTop - 100;
      window.scrollTo({ top: offsetBottom });
    }
  };
  
  console.log(myRef.current)
  const StyledTab = styled1((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: "none",
      fontSize: 19,
      color: "black",
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
          marginBottom: 0,
          width: "100%",
        }}
      >
        <div className="container">
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={8}>
              <BounceText text={`Hilbert,`} />

              <Fade in timeout={1000}>
                <div>
                  <Typography variant="h3" sx={{ color: "lightgray" }}>
                    a {/* <strong>full-stack</strong>{" "} */}
                    <strong>DATA SCIENTIST.</strong>
                  </Typography>
                  <Typography
                    variant="h5"
                    style={{ color: "gray", marginTop: 10 }}
                  >
                    I do all types of data analytics from{" "}
                    <span style={{ color: "white" }}>descriptive</span> to{" "}
                    <span style={{ color: "white" }}>prescriptive</span>{" "}
                    analytics, to building web applications / dashboards enables
                    raw data to{" "}
                    <span style={{ color: "lightgray" }}>
                      actionable insights.
                    </span>
                  </Typography>
                  <Button
                    onClick={executeScroll}
                    size="large"
                    variant="contained"
                    style={{
                      borderRadius: 100,
                      marginTop: 20,
                      background: "linear-gradient(to top, #0cebeb, #20e3b2, #29ffc6)",
                      color: "#1b332d",
                    }}
                  >
                    <Typography variant="h6" style={{fontWeight:'bold'}}>
                    See Projects
                    </Typography>
                  </Button>
                </div>
              </Fade>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
              <TagCloudSkill />
            </Grid>
          </Grid>
        </div>
      </div>

      <div
        className="jumbotron jumbotron-fluid"
        
        style={{
          marginBottom: 0,
          paddingTop: 30,
          background: "linear-gradient(to right, #ece9e6, #ffffff)",
        }}
      >
        <div  style={{ textAlign: "center", marginBottom: 10 }}>
          <Typography ref={myRef} variant="h4" style={{ fontWeight: "bold" }}>
            Some Projects I've worked on...{" "}
          </Typography>
        </div>
        <div className="container" style={{ paddingBottom: 10 }}>
          <Paper variant="outlined" style={{ marginBottom: 15 }}>
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
              <StyledTab label="All" value="ALL" />
              <StyledTab label="Machine Learning" value="ML" />
              <StyledTab label="Big Data Analytics" value="BD" />
              <StyledTab label="Data Mining" value="DMW" />
            </Tabs>
          </Paper>
        </div>
        <Container maxWidth="xl">
          <GenerateGrid tag={value}></GenerateGrid>
        </Container>
      </div>
    </React.Fragment>
  );
}
