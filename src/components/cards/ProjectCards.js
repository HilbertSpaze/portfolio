import React, { useState } from "react";
import styled from "@emotion/styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Card,
  CardActions,
  CardContent,
  CardActionArea,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";


export default function ProjectCard(props) {
  const { title, img, desc, technologies } = props;
  const useStyles = styled({
    root: {
      transition: "transform 0.15s ease-in-out",
    },
  });

  const classes = useStyles();
  const [state, setState] = useState({
    raised: false,
    shadow: 2,
  });

  return (
    <Card
      className={classes.root}
      classes={{ root: state.raised ? classes.cardHovered : "" }}
      onMouseOver={() => setState({ raised: true, shadow: 5 })}
      onMouseOut={() => setState({ raised: false, shadow: 2 })}
      raised={state.raised}
      zdepth={state.shadow}
      sx={{
        width:'35vh',
        height:'39vh',
        margin:0.5,
        "&:hover": { transform: "scale3d(1.03, 1.03, 1)" },
      }}
    >
      <CardActionArea
        onClick={() => {
          alert("Sup");
        }}
      >
        <CardMedia
          component="img"
          height="125"
          image={img}
          alt="green iguana"
          sx={{ p: 1 }}
        />
        <CardContent sx={{ height: 130 }}>
          <Typography variant="h5" component="div">
            {title}
          </Typography>

          <Typography variant="subtitle2" sx={{ textAlign: "justify"}}>
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ marginTop: 3  }}>
        <IconButton size="small" color="success">
          {<GitHubIcon />}
        </IconButton>
        <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
          <br />
          {technologies}
        </Typography>
      </CardActions>
    </Card>
  );
}
