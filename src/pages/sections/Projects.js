import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
} from "@mui/material";
import GenerateGrid from "../../utils/generateGrid";
import { styled } from "@mui/material/styles";
import { AnimatedHeader } from "../../components/headers/AnimatedHeader";
import { Window } from "../../components/cards/AnimatedPopCard";

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
        color: "#45A29E",
        opacity: 1,
      },
      "&.Mui-selected": {
        color: "#1F2833",
        backgroundColor: "#66FCF1",
      },
    })
  );
  return (
    <>
      <Box sx={{ paddingBottom: 10, maxHeight: "100vh", width: "100%" }}>
        <AnimatedHeader
          title={"PROJECTS"}
          color={"#1F2833"}
          fontSize={70}
        ></AnimatedHeader>
        <AnimatedHeader
          title={"Here are some projects I did, outside of my job."}
          color={"#1F2833"}
          fontSize={30}
        ></AnimatedHeader>
        
        <Window rootMargin={'0%'}
        childElement={
        <Tabs
          value={value}
          scrollButtons="auto"
          allowScrollButtonsMobile
          centered
          onChange={handleChange}
          TabIndicatorProps={{ style: { background: "transparent" } }}
          sx={{
            marginTop: "2%",
            "& .MuiTabs-flexContainer": {
              flexWrap: "wrap",
              marginBottom: 1,
            },
          }}
        >
          <StyledTab label="All" value="ALL" />
          <StyledTab label="Machine Learning" value="ML" />
          <StyledTab label="Big Data Analytics" value="BD" />
          <StyledTab label="Data Mining" value="DMW" />
        </Tabs>
        }/>
        <Window rootMargin={"0%"} childElement={<GenerateGrid tag={value} />} />
      </Box>
    </>
  );
}
