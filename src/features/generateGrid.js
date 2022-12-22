import React, { useEffect, useState } from "react";
import { Grid, Box, Grow } from "@mui/material";
import ProjectCard from "../components/cards/ProjectCards";
import projectList from "../data/ProjectMetaData";

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
    <Box container >
      {result.length > 0 ? (
        <Grid
          container
          spacing={{ xs: 1, sm: 2, md: 1, lg: 4 }}
          // columns={{ xs: 1, sm: 8, md: 3, lg: 4 }}
          alignItems="center"
          sx={{}}
        >
          {result.map((item, index) => (
            <Grow in={checked} timeout={1300}>
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3} key={index} >
                <ProjectCard
                  title={item.title}
                  tag={item.tag}
                  desc={item.desc}
                  img={item.cover}
                  technologies={item.technologies}
                />
              </Grid>
            </Grow>
          ))}
        </Grid>
      ) : (
        ""
      )}
    </Box>
  );
}
