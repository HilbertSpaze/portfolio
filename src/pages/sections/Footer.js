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

      <Box style={{paddingLeft:'15%'}} >
      <Typography variant="subtitle1" style={{color:'#e6e6ff', marginTop:'0.5%', fontSize:30}}>Get in Touch</Typography>
    {/* <Divider style={{backgroundColor:'white'}}/> */}
        

        <Grid
          spacing={3}
          // justifyContent={"center"}
          container
          // alignItems={"center"}
          direction="row"
          style={{marginTop:'0%'}}
        >
          <Grid item>
            <Avatar
              style={{
                backgroundColor: "transparent",
                border: "2px solid white",
              }}
            >
              <EmailIcon style={{ fontSize: 28, }} />
            </Avatar>
          </Grid>
          <Grid item>
            <Avatar
              style={{
                backgroundColor: "transparent",
                border: "2px solid white",
              }}
            >
              <FacebookIcon style={{ fontSize: 28 }} />
            </Avatar>
          </Grid>
          <Grid item>
            <Avatar
              style={{
                backgroundColor: "transparent",
                border: "2px solid white",
              }}
            >
              <LinkedInIcon style={{ fontSize: 28 }} />
            </Avatar>
          </Grid>
          <Grid item>
            <Avatar
              style={{
                backgroundColor: "transparent",
                border: "2px solid white",
              }}
            >
              <GitHubIcon style={{ fontSize: 28 }} />
            </Avatar>
          </Grid>
          <Grid item>
            <Avatar
              style={{
                backgroundColor: "transparent",
                border: "2px solid white",
              }}
            >
              <WhatsAppIcon style={{ fontSize: 28 }} />
            </Avatar>
          </Grid>
        </Grid>
        {/* <Divider style={{backgroundColor:'white', margin:'1%'}}/> */}
        
        
      </Box>
    </>
  );
}
