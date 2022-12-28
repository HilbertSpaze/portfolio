import React, { useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router";

import {
  Card,
  CardActions,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";

export default function ProjectCard(props) {
  const { title, img, desc, technologies, path } = props;
  const navigate = useNavigate();
  const useStyles = styled({
    root: {
      transition: "transform 0.15s ease-in-out",
    },
  });

  const classes = useStyles();
  const [state, setState] = useState({
    raised: false,
    shadow: 4,
  });

  return (
    <Card
      className={classes.root}
      classes={{ root: state.raised ? classes.cardHovered : "" }}
      onMouseOver={() => setState({ raised: true, shadow: 8 })}
      onMouseOut={() => setState({ raised: false, shadow: 4 })}
      raised={state.raised}
      zdepth={state.shadow}
      sx={{
        width: "auto",
        height: "auto",
        margin: 0.5,
        "&:hover": { transform: "scale3d(1.05, 1.05, 1.1)" },
      }}
    >
      <CardActionArea onClick={()=>{navigate(path)}}>
        <CardMedia
          component="img"
          height="115"
          image={img}
          alt="green iguana"
          sx={{}}
        />

        <CardContent sx={{ height: 50, paddingBottom: 30, background:'white', textAlign:'center'}}>
          <Typography variant="h5" style={{fontWeight:'bold', color:'#203A43', paddingBottom:10}}>{title}</Typography>
            

          <Typography
            component='div'
            variant="subtitle1"
            // color="text.secondary"
            sx={{ textAlign: "justify", color:'#203a43' }}
          >
            {desc}
          </Typography>
        </CardContent>

        <CardActions style={{ background: "linear-gradient(to bottom, #203a43, #2c5364)", justifyContent:'center', textAlign:'center', height:50  }}>
          <Typography variant="h7" style={{ color:'#79f7d9'}}>{technologies}</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
