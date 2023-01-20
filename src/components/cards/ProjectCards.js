import React, { useState } from "react";
import styled from "@emotion/styled";
// import { useNavigate } from "react-router";

import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Tooltip,
} from "@mui/material";

export default function ProjectCard(props) {
  const { title, img,  technologies, path } = props;
  // const [brightness, setBrightness] = useState('40%')
  // const [opacity, setOpacity] = useState(0.8)
  // const navigate = useNavigate();
  const useStyles = styled({
    root: {
      transition: "transform 0.15s ease-in-out",
    },
  });


  const classes = useStyles();
  const [state, setState] = useState({
    raised: false,
    // shadow: 1,
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
        // key={title}
        // className={classes.root}
        classes={{ root: state.raised ? classes.cardHovered : "" }}
        onMouseOver={() => {setState({ raised: true,  tooltip: true });}}
        onMouseOut={() =>
          {setState({ raised: false, tooltip: false });
        }
        }
        raised={state.raised}
        elevation={0}
        style={{borderRadius:20,  margin:'3%',}}
        sx={{
          
          width: "auto",
          height: '95%',
          margin: 0.5,
          "&:hover": { transform: "scale3d(1.03, 1.03, 1.03)" },
        }}
      >
        <CardActionArea
          onClick={() => {
            // navigate(path);
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={img}
            alt="green iguana"
            style={{ paddingLeft:10, paddingRight:10, paddingTop:10,borderRadius:40,  filter: 'brightness(85%)' }}
          />
          <CardContent>
          <Box >

            <Typography
              variant="h6"
              style={{  color: "#21201E", fontWeight:650, fontSize:22}}
              
            >
              {title}
            </Typography >
  

            <Typography
              variant="subtitle1"
              style={{ color: "#21201E", marginTop: 10, fontSize: 15, opacity:0.7}}
            >
              {technologies}
            </Typography>
          </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Tooltip>
  );
}
