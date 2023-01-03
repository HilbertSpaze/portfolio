import React from "react";
import { Typography, Container, Paper, Fade } from "@mui/material";

export default function Darkweb() {
  return (
    <>
      <div
        className="jumbotron jumbotron-fluid"
        style={{
          // background: "linear-gradient(to right, #000000, #434343)",
        }}
      >
        
        <div className="container">
        <Paper elevation = {3} style={{padding:20, borderRadius:10, marginTop:20}}>
          <Fade in timeout={1000}>
            <div>
              <Typography variant="h3" sx={{ }}>
                Exploring DarkNet Vendor Profiles
              </Typography>
              <Typography variant="subtitle2" sx={{ }}>
                December 2021.
              </Typography>
              <Typography variant="h6" sx={{ }}>
                Executive Summary
              </Typography>
              <p>
                As people are using digital and online services more during the
                COVID-19 lockdown, there was also an increase in illegal
                activity in the darknet. As things are becoming more
                complicated, identifying vendor profiles in the darknet
                marketplaces can potentially help law enforcement agencies crack
                down on these illegal markets. </p>
                
                <p>Using the dataset from the
                darknet archives, which is a collection of darknet marketplace
                HTML pages, we analyzed two of these markets (Silkroad 2 and
                Nucleus) totaling to around 50 GB of space. This was processed
                in AWS using Dask. Through K-Means clustering and association
                rule mining, we generated six clusters that were categorized
                into four general clusters. </p>
                
                <p>We observed that although the
                platform is international, the transactions are highly
                localized. The results also showed interrelatedness in seemingly
                unrelated items, such as steroid items and opioids. Which is
                interesting, since there were already studies about their
                relationship in prior health studies.</p>

            </div>
          </Fade>
          </Paper>
        </div>
        
      </div>
    </>
  );
}
