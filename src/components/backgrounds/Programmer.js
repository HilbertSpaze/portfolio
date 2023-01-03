import { Grid, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import programmer from "../../assets/svgs/programmer.svg";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Programmer() {
  const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.up('sm'));
  // const [margin, setMargin] = useState('100%')

  // useEffect(()=>{
  //     if (matches) {setMargin('20%');}
  //     else {setMargin('100%')}
  //   },[matches])

  return (
    <Box 
    component="img" 
    src={programmer}
    style={{opacity:0.4}}
      sx={{
        // height: { xs: "100%", sm: "55%", md: "60%", lg: "40%", xl: "60%" },
        width:{ xs: "90%", sm: "60%", md: "60%", lg: "60%", xl: "40%" },
        marginTop: { xs: "120%", sm: "60%", md: "20%", lg: "15%", xl: "10%" },
        marginLeft:{ xs: "10%", sm: "30%", md: "50%", lg: "60%", xl: "60%" },
      }}/>
  );
}
