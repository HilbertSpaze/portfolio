import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  Tabs,
  Typography,
  Tab,
} from "@mui/material";
import GenerateGrid from "../../utils/generateGrid";
import { styled } from "@mui/material/styles";
import { AnimatedHeader } from "../../components/headers/AnimatedHeader";
import { Window } from "../../components/cards/AnimatedPopCard";

export default function Projects() {
  const [value, setValue] = useState("ALL");

  const StyledButton = (props) => (
    <Button
      variant="outlined" 
      sx={{color:'#7303c0', border: '2px solid', borderColor:'#7303c0', fontSize:18, fontWeight:'bold', borderRadius:3,}}
    >
      {props.children}
    </Button>
  );
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ paddingBottom: 10, maxHeight: "100vh", width: "100%" }}>
        <Card elevation={0} style={{background:'linear-gradient(to bottom, #f0f2f0,#edebff,#f0f2f0)', 
         borderRadius:50}} sx={{paddingLeft:'7%', paddingRight:'7%', paddingTop:'1%', paddingBottom:'4%'}}>
        {/* <AnimatedHeader
          title={"Projects"}
          color={"#0f0d1c"}
          fontSize={70}
        ></AnimatedHeader> */}

        <Typography variant="h6" textAlign={"center"} style={{color:"#0a1029", fontSize:80, fontWeight:525}}>Projects</Typography>
        <Typography variant="h6" textAlign={"center"} style={{color:"#0f0d1c", fontSize:20}}>Here are some projects I did (personal / classroom).</Typography>
        {/* <AnimatedHeader
          title={"Here are some projects I did, outside of my job."}
          color={"black"}
          fontSize={15}
        ></AnimatedHeader> */}
        
        {/* <Window rootMargin={'0%'}
        childElement={ */}
          <Grid container justifyContent={"center"} spacing={1} sx={{marginBottom:'2%', marginTop:'1%'}}>
            <Grid item>
            <StyledButton >ALL</StyledButton>
            </Grid>
            <Grid item>
            <StyledButton>Machine Learning</StyledButton>
            </Grid>
            <Grid item>
            <StyledButton variant="outlined" style={{color:'#7303c0', border: '2px solid', borderColor:'#7303c0', fontWeight:'bold'}}>Big Data</StyledButton>
            </Grid>
            <Grid item>
            <StyledButton variant="outlined" style={{color:'#7303c0', border: '2px solid', borderColor:'#7303c0', fontWeight:'bold'}}>Data Mining / EDA</StyledButton>
            </Grid>
        
        </Grid>
        <GenerateGrid tag={value} />
        </Card>
      </Box>
    </>
  );
}
