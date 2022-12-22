import React from "react";
import { Slide, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function Contact() {
  return (
    
      <div
        class="jumbotron jumbotron-fluid"
        style={{
          height: "100vh",
          marginBottom: 0,
          background: "linear-gradient(to right, #232526, #414345)",
        }}
      >
        <Slide in timeout={1000} direction="down">
        <div class="container" style={{ color: "white" }}>
          <h1 class="display-4">Contact Me</h1>
          <Typography>hslazatinjr@gmail.com</Typography>
          <LinkedInIcon sx={{ fontSize: 80 }} />
          <GitHubIcon sx={{ fontSize: 80 }} />
        </div>
        </Slide>
      </div>
    
  );
}
