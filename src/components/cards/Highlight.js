import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


export default function Highlight(props) {
    const {icon, title, duration} = props
  return (
    <>

    <div>
      <Card elevation={0} sx={{minWidth:'80%', maxWidth:'100%',background:'#302b63', color:'white'}}>
          <CardContent sx={{ textAlign: "center" }}>
            {icon?icon:'defaulkt'}
            <Typography variant="h6" style={{fontSize:18, fontWeight:550, color:'#e3fefc' }}>
              {title?title:'defaulkt'}
            </Typography>

            <Typography variant="h6" style={{fontWeight:'bold',color:'#66FCF1', fontSize:20}} >
              {duration?duration:'defaulkt'}
            </Typography>
          </CardContent>
      </Card>
    </div>
    </>
  );
}