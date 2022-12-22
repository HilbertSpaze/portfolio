import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Chip } from "@mui/material";

const Item = styled(Chip)(({ theme }) => ({
  backgroundColor: "#379683",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
}));

export default function Technologies() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3} md={6}>
          <Item label = 'Python'></Item>
        </Grid>
        <Grid item xs={3} md={6}>
          <Item label = 'Azure'></Item>
        </Grid>
        <Grid item xs={3} md={6}>
          <Item label='React'>React</Item>
        </Grid>
        <Grid item xs={3} md={6}>
          <Item label='Spark'>Spark</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
