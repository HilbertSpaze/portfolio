import { Tab, Tabs,  Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import styled from "@emotion/styled";

import DataScientist from "./DataScientist";
import Consultant from "./Consultant";
import Masters from "./Masters";
import RelEng from "./RelEng";
import BSAP from "./BSAP";



export default function Experience(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  const [orientation, setOrientation] = useState('vertical')

  useEffect(()=>{
    if (matches) {setOrientation('vertical');}
    else {setOrientation('horizontal')}
  },[matches])

  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      fontSize: 17,
      color:'#778991',

      "&:hover": {
        color: "#5eceff",
        opacity: 1,
      },
      "&.Mui-selected": {
        color: "#30fc89",
        backgroundColor: "#417d91",
      },
    })
  );

  const [value, setValue] = useState("DS");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
        {/* <Divider><Typography style={{color:'white'}}>History</Typography></Divider> */}
        <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg = {3} xl ={3} style={{fontColor:'red'}}>
        <Tabs
          orientation={orientation}
          value={value}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          onChange={handleChange}
          TabIndicatorProps={{style:{backgroundColor:'#79f7d9'}}}
          sx={{ borderRight: 1, borderColor: "divider", color:'white', fontSize:100}}

        >
          <StyledTab label="Data Scientist" value="DS" />
          <StyledTab label="Data Science Consultant" value="DSC" />
          <StyledTab label="MS Data Science" value="MS" />
          <StyledTab label="Reliability Engineer" value="RE" />
          <StyledTab label="BS Applied Physics" value="BS" />
        </Tabs>
        </Grid>
        <Grid item xs={12} md={12} lg={9} xl={9}>
          {
            value.valueOf()==="DS" ? <DataScientist/> :
            value.valueOf()==="DSC" ? <Consultant/> :
            value.valueOf()==="MS" ? <Masters/> :
            value.valueOf()==="RE" ? <RelEng/> :
            value.valueOf()==="BS" ? <BSAP/> :
            ""
          }
        </Grid>

      </Grid>
    </React.Fragment>
  );
}
