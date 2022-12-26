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

        <CardContent sx={{ height: 230, paddingBottom: 30 }}>
          <Typography variant="h5" style={{fontWeight:'bold', paddingBottom:10}}>{title}</Typography>
            

          <Typography
            component='div'
            variant="subtitle1"
            color="text.secondary"
            sx={{ textAlign: "justify" }}
          >
            {desc}
          </Typography>
        </CardContent>

        <CardActions style={{ backgroundColor: "#E2EAEC" }}>
          <Typography variant="body2">{technologies}</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
