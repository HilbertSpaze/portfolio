import React, {useState} from 'react'
import { Box, Typography, Tabs, Tab, Paper, Container, Divider } from '@mui/material';
import GenerateGrid from '../../utils/generateGrid';
import { styled } from "@mui/material/styles";

export default function Projects() {
    const [value, setValue] = useState("ALL");
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
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
            backgroundColor: "#00ADB5",
          },
        })
      );
  return (
    <>
  <Box sx={{ paddingBottom: 10, maxHeight:'100vh', width:'100%'}}>

    {/* <Typography style={{fontSize:27, marginBottom:30}}>Here are some projects I did, outside of my job. </Typography> */}
    
      <Tabs
        value={value}
        scrollButtons="auto"
        allowScrollButtonsMobile
        centered
        onChange={handleChange}
        TabIndicatorProps={{ style: { background: "transparent" } }}
        sx={{
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
            marginBottom:1
          },
        }}
      >
        <StyledTab label="All" value="ALL" />
        <StyledTab label="Machine Learning" value="ML" />
        <StyledTab label="Big Data Analytics" value="BD" />
        <StyledTab label="Data Mining" value="DMW" />
      </Tabs>
    <GenerateGrid tag={value}></GenerateGrid>
  </Box>
</>
  )
}
