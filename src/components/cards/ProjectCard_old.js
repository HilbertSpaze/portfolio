import React, { useState } from "react";
import styled from "@emotion/styled";
// import { useNavigate } from "react-router";

import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Paper,
  Typography,
  Tooltip,
} from "@mui/material";

export default function ProjectCard(props) {
  const { title, img,  technologies, path } = props;
  const [brightness, setBrightness] = useState('40%')
  const [opacity, setOpacity] = useState(0.8)
  // const navigate = useNavigate();
  const useStyles = styled({
    root: {
      transition: "transform 0.15s ease-in-out",
    },
  });

  const styles = {
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    card: {
      position: "relative",
      marginBottom:"10",
      borderRadius:10
    },
    overlay: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      // padding: "20px",
    },
  };

  const classes = useStyles();
  const [state, setState] = useState({
    raised: false,
    shadow: 4,
  });

  return (
    <Tooltip
      title="Click to view more details."
      placement="top"
      enterTouchDelay={0}
      leaveTouchDelay={600}
      PopperProps={{
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, -50],
            },
          },
        ],
        sx: {
          "& .MuiTooltip-tooltip": {
            fontSize: 13,
          },
        },
      }}
    >
      <Card
        className={classes.root}
        classes={{ root: state.raised ? classes.cardHovered : "" }}
        onMouseOver={() => {setState({ raised: true, shadow: 8, tooltip: true });
      setBrightness('80%');
    setOpacity(1)}}
        onMouseOut={() =>
          {setState({ raised: false, shadow: 4, tooltip: false });
        setBrightness('40%');
        setOpacity(0.8)}
        }
        raised={state.raised}
        zdepth={state.shadow}
        style={styles.card}
        sx={{
          
          width: "auto",
          height: "auto",
          margin: 0.5,
          "&:hover": { transform: "scale3d(1.05, 1.05, 1.1)" },
        }}
      >
        <CardActionArea
          onClick={() => {
            // navigate(path);
          }}
        >
          <CardMedia
            component="img"
            height="325"
            image={img}
            alt="green iguana"
            style={{ filter: `brightness(${brightness}) ` }}
          />
          <Box style={styles.overlay}>

            <Typography
              variant="h5"
              style={{  fontWeight: "bold", color: "white", }}
              
            >
              {title}
            </Typography >
  

            <Typography
              variant="subtitle1"
              style={{ color: "white", marginTop: 10, fontSize: 15, opacity:0.7}}
            >
              {technologies}
            </Typography>
          </Box>
        </CardActionArea>
      </Card>
    </Tooltip>
  );
}
