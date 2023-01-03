import React, { useEffect, useState } from "react";
import { Grid, Box, Grow } from "@mui/material";
import projectList from "../pages/subpage/Project/ProjectMetaData";
import ProjectCard from "../components/cards/ProjectCards"

export default function GenerateGrid(props) {
  const { tag } = props;
  const [checked, setChecked] = useState(false);
  if (tag.valueOf() === "ALL") {
    var result = projectList;
  } else {
    result = projectList.filter((item) => item.tag.valueOf() === tag);
  }

  useEffect(() => {
    setChecked(true);
  }, [tag]);

  return (
    <Box sx={{maxHeight:'100vh', maxWidth:'100%'}} >
      {result.length > 0 ? (
        <Grid
          container
          spacing={{ xs: 1, sm: 2, md: 1, lg: 2, xl:2 }}
          alignItems="center"
        >
          {result.map((item, index) => (
            
              <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={index} >
                <ProjectCard
                  title={item.title}
                  tag={item.tag}
                  desc={item.desc}
                  img={item.cover}
                  technologies={item.technologies}
                  path = {item.path}
                  subtitle={item.subtitle}
                />
              </Grid>
           
          ))}
        </Grid>
      ) : (
        ""
      )}
    </Box>
  );
}
