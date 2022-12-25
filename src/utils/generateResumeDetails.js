import React from "react";
import { Typography, Stack} from "@mui/material";

export default function GenerateResumeDetails(props) {
  const { title, affiliation, duration, description } = props;
  return (

      <div>
        <Typography variant="h5" style={{ color: "white" }}>
          {title}
        </Typography>
        <Typography variant="h6" style={{ color: "white" }}>
          {affiliation}
        </Typography>
        <Typography variant="subtitle2" style={{ color: "white" }}>
          {duration}
        </Typography>
        <br></br>
        <div style={{ color: "white" }}>
          {description.map(function (item, i) {
            return (
<ul>
    <li>   {item}
   </li>
</ul>
            );
          })}
        </div>
      </div>

  );
}
