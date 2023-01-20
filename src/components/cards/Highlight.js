import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


export default function Highlight(props) {
    const {icon, title, duration} = props
  return (
    <>

    <div>
      <Card elevation={0} sx={{minWidth:'80%', maxWidth:'100%',background:'#0e5796', color:'white'}}>
          <CardContent sx={{ textAlign: "center" }}>
            {icon?icon:'default'}
            <Typography variant="h6" style={{fontSize:18, fontWeight:520, color:'#e3fefc' }}>
              {title?title:'default'}
            </Typography>

            <Typography variant="h6" style={{fontWeight:'bold',color:'#66FCF1', fontSize:18}} >
              {duration?duration:'defaulkt'}
            </Typography>
          </CardContent>
      </Card>
    </div>
    </>
  );
}
