import { Grid, Stack } from "@mui/material";
import React from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import GamesIcon from "@mui/icons-material/Games";
import BackpackIcon from "@mui/icons-material/Backpack";
export default function Hobbies() {
  const hobbies = [
    { logo: <CameraAltIcon style={{ fontSize: 100 }}/>, desc: "Photography" },
    { logo: <GamesIcon style={{ fontSize: 100 }} />, desc: "Video Games" },
    { logo: <SportsTennisIcon style={{ fontSize: 100 }}/>, desc: "Badminton" },
    { logo: <SportsBasketballIcon style={{ fontSize: 100 }}/>, desc: "NBA" },
    { logo: <BackpackIcon style={{ fontSize: 100 }}/>, desc: "Travel" },
  ];
  return (
    <>
      <div>
        <Grid container spacing={1}>
          {hobbies.map((item, index) => {
            return (
              <Grid item xl={4}>
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
