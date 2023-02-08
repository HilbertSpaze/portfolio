import React from "react";
import { Avatar, Box, Grid, Typography, Breadcrumbs, Link, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
// import bg from '../../assets/3d_lines.jpg'

export default function Footer() {
  return (
    <>

      <Box style={{paddingTop:'6.5%', paddingBottom:'5%'}} textAlign={"center"}>
      <Typography variant="body1" style={{color:'#ededff', marginTop:'0.5%', fontSize:25}}>Let's Work Together</Typography>
    {/* <Divider style={{backgroundColor:'white'}}/> */}
        

        <Grid
          spacing={3}
          justifyContent={"center"}
          container
          // alignItems={"center"}
          direction="row"
          style={{marginTop:'0%'}}
        >
          <Grid item>

              <EmailIcon style={{ fontSize: 42,color:'#d5d5e3', }} />

          </Grid>
          <Grid item>

              <FacebookIcon style={{ fontSize: 42,color:'#d5d5e3', }} />

          </Grid>
          <Grid item>

              <LinkedInIcon style={{ fontSize: 42,color:'#d5d5e3', }} />

          </Grid>
          <Grid item>

              <GitHubIcon style={{ fontSize: 42,color:'#d5d5e3', }} />

          </Grid>
          <Grid item>

              <WhatsAppIcon style={{ fontSize: 42,color:'#d5d5e3', }} />

          </Grid>
        </Grid>
        {/* <Divider style={{backgroundColor:'white', margin:'1%'}}/> */}
        
        
      </Box>
    </>
  );
}
