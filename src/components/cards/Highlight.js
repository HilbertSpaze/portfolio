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

    <div>
      <Card elevation={3} sx={{minWidth:'80%', maxWidth:'100%',background:'#2f3f52', color:'white'}}>
          <CardContent sx={{ textAlign: "center" }}>
            {icon?icon:'defaulkt'}
            <Typography variant="h6" style={{fontWeight:550, color:'#e3fefc' }}>
              {title?title:'defaulkt'}
            </Typography>

            <Typography variant="h6" style={{fontWeight:'bold',color:'#66FCF1', fontSize:25}} >
              {duration?duration:'defaulkt'}
            </Typography>
          </CardContent>
      </Card>
    </div>
    </>
  );
}
