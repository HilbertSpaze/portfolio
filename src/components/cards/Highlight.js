import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default function Highlight(props) {
    const {icon, title, duration} = props
  return (
    <>
    <Box>
      <Card elevation={3} sx={{minWidth:'80%', maxWidth:'90%',background:'#2f3f52', color:'white'}}>
          <CardContent sx={{ textAlign: "center" }}>
            {icon}
            <Typography variant="h6" gutterBottom>
              {title}
            </Typography>

            <Typography variant="h6" >
              {duration}
            </Typography>
          </CardContent>
      </Card>
    </Box>
    </>
  );
}
