import React from "react";
import { bounce } from "react-animations";

import styled from "styled-components";
import { keyframes } from "styled-components";
import { Typography } from "@mui/material";

const bounceAnimation = keyframes`${bounce}`;
const Bounce = styled.div`
  animation: 1s ${bounceAnimation};
`;

export default function BounceText(props) {
	const {text} = props
	return (
	<>
      <Bounce>
        <Typography variant="h1" sx={{ color: "lightgray" }}>
          Hi. I'm 
          <span style={{ color: "white" }}>
            <strong> {text} </strong>
          </span>
        </Typography>
      </Bounce>
    </>
  );
}
