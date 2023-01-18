import { Button,  Typography, Grid, Stack } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import Fade from "@mui/material/Fade";
import BounceText from "../../components/animation/Bounce";
import TagCloudSkill from "../../components/animation/TagCloudSkill";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typing from "../../components/animation/Typing";


export default function Home(props) {
  const myRef = useRef(null)
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [full, setFull] = useState(false);


  useEffect(()=>{
    if (matches) {setFull(false);}
    else {setFull(true)}
  },[matches])

  const executeScroll = () => {
    if (myRef.current) {
      const offsetBottom = myRef.current.offsetTop - 100;
      window.scrollTo({ top: offsetBottom });
    }
  };

  return (
    <React.Fragment>
          <Grid  container alignItems="center" justifyContent="center" spacing={2}>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={8}>
              <Typography variant="h3" style={{color:'#45a29e'}}>Hi, I'm</Typography>
              <BounceText text={`Hilbert,`} />
              <Stack direction="row" style={{alignItems:"center"}}>
              <Typography variant="h2" sx={{ color: "#c5c6c7", marginRight:'2%' }}>a</Typography>
              <Typing/>
              </Stack>
              <Fade in timeout={1000}>
                <div>
                  {/* <Typography variant="h2" sx={{ color: "#c5c6c7" }}>
                    a <strong style={{color:'#56f7fc', fontSize:75, fontWeight:650}}>DATA SCIENTIST.</strong>
                  </Typography> */}
                  <Typography
                    variant="h6"
                    style={{ color: "#c5c6c7", fontSize:28, marginTop: 10 }}
                  >
                    I help <span style={{ fontWeight:600, color: "white" }}>translate data into value </span> 
                    through <span style={{ fontWeight:600, color: "white" }}>data analytics</span> and
                    <span style={{ fontWeight:600, color: "white" }}> web development.</span>
                  </Typography>
                  <Grid spacing={{ xs: 0, sm: 2, md: 2, lg: 3, xl:3 }} container  style={{alignItems:'center'}}>
                    <Grid 
                    
                    item xs={12} sm = {6} md={7} lg={5} xl={4}>
                  <Button
                    onClick={executeScroll}
                    size="large"
                    fullWidth
                    variant="outlined"
                    style={{
                      borderRadius: 40,
                      marginTop: 20,
                      // background: "linear-gradient(to top, #0cebeb, #20e3b2, #29ffc6)",
                      color: "#66FCF1",
                      borderColor: "#66FCF1",
                      border: '5px solid'
                    }}
                  >
                    <Typography variant="h6" style={{fontWeight:'bold'}}>
                    See Projects
                    </Typography>
                  </Button>
                  </Grid>
                  <Grid item xs={12} sm={6} md={5} lg={3} xl={4}>
                  <Button
                    size="large"
                    fullWidth
                    variant="contained"
                    style={{
                      borderRadius: 40,
                      marginTop: 20,
                      background: "linear-gradient(to top, #0cebeb, #20e3b2, #29ffc6)",
                    }}
                  >
                    <Typography variant="h6" style={{fontWeight:'bold'}}>
                    CV
                    </Typography>
                  </Button>
                  </Grid>
                  <Grid item xs={0} sm={0} md={0} lg={2} xl={4}>

                  </Grid>
                  </Grid>
                </div>
              </Fade>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={4}>
              <TagCloudSkill />
            </Grid>
          </Grid>
    </React.Fragment>
  );
}
