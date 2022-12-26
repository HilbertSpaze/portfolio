import { Grid, Stack } from "@mui/material";
import React from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import GamesIcon from "@mui/icons-material/Games";
import BackpackIcon from "@mui/icons-material/Backpack";
export default function Hobbies() {
  const hobbies = [
    { logo: <CameraAltIcon/>, desc: "Photography" },
    { logo: <GamesIcon  />, desc: "Video Games" },
    { logo: <SportsTennisIcon/>, desc: "Badminton" },
    { logo: <SportsBasketballIcon />, desc: "NBA" },
    { logo: <BackpackIcon />, desc: "Travel" },
  ];
  return (
    <>
      <div>
        <Grid container spacing={1}>
          {hobbies.map((item, index) => {
            return (
              <Grid item >
                <Stack direction='column' style={{alignItems:"center"}}>
                  {item.logo}
                  {item.desc}
                </Stack>
              </Grid>

            );
          })}
        </Grid>
      </div>
    </>
  );
}
