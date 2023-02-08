import React, { useState } from "react";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import GenerateGrid from "../../utils/generateGrid";

export default function Projects() {
  const [value, setValue] = useState("ALL");
  const [active, setActive] = useState("ALL");

  const StyledButton = (props) => (
    <Button
      variant={active.valueOf()===props.value.valueOf()?"contained":'outlined'}
      sx={{
        ":hover": {
          backgroundColor:`${active.valueOf()===props.value.valueOf()?"#7303c0":'#a76ccc'}`,
          borderColor:"#7303c0",
          color:'white',
        },
        color: `${active.valueOf()===props.value.valueOf()?'white':"#7303c0"}`,
        border: "2px solid",
        borderColor: "#7303c0",
        fontSize: 16,
        fontWeight: `${active.valueOf()===props.value.valueOf()?700:525}`,
        borderRadius: 3,
        background: `${active.valueOf()===props.value.valueOf()?"#7303c0":'transparent'}`,
      }}
      onClick={() => {
        setValue(props.value);
        setActive(props.value);
      }}
    >
      {props.children}
    </Button>
  );

  return (
    <>
      <Box sx={{ paddingBottom: 10, maxHeight: "100vh", width: "100%" }}>
        <Card
          elevation={0}
          style={{
            background: "linear-gradient(to bottom, #f0f2f0,#edebff,#f0f2f0)",
            borderRadius: 50,
          }}
          sx={{
            paddingLeft: "7%",
            paddingRight: "7%",
            paddingTop: "1%",
            paddingBottom: "4%",
          }}
        >
          <Typography
            variant="h6"
            textAlign={"center"}
            style={{ color: "#0a1029", fontSize: 80, fontWeight: 525 }}
          >
            Projects
          </Typography>
          <Typography
            variant="h6"
            textAlign={"center"}
            style={{ color: "#0f0d1c", fontSize: 20 }}
          >
            Here are some projects I did (personal / classroom).
          </Typography>

          <Grid
            container
            justifyContent={"center"}
            spacing={1}
            sx={{ marginBottom: "2%", marginTop: "1%" }}
          >
            <Grid item>
              <StyledButton value={"ALL"}>ALL</StyledButton>
            </Grid>
            <Grid item>
              <StyledButton value={"ML"}>Machine Learning</StyledButton>
            </Grid>
            <Grid item>
              <StyledButton value={"BD"}>Big Data</StyledButton>
            </Grid>
            <Grid item>
              <StyledButton value={"DMW"}>Data Mining / EDA</StyledButton>
            </Grid>
          </Grid>
          <GenerateGrid tag={value} />
        </Card>
      </Box>
    </>
  );
}
