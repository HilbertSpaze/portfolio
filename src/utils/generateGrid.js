import React from "react";
import { Grid, Box } from "@mui/material";
import projectList from "../pages/subpage/Project/ProjectMetaData";
import ProjectCard from "../components/cards/ProjectCards"
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Carousel from 'react-material-ui-carousel'
import { Carousel } from 'react-responsive-carousel';

export default function GenerateGrid(props) {
  const { tag } = props;
  if (tag.valueOf() === "ALL") {
    var result = projectList;
  } else {
    result = projectList.filter((item) => item.tag.valueOf() === tag);
  }


  return (
    <Box sx={{maxHeight:'102vh', maxWidth:'100%'}} >
      {result.length > 0 ? (
        // <Grid
        //   container
        //   spacing={{ xs: 1, sm: 2, md: 1, lg: 2, xl:2 }}
        //   alignItems="center"
        // >
        <Carousel autoPlay infiniteLoop  interval = {3000} showArrows centerMode showThumbs={false} centerSlidePercentage={(1/3)*100} >
          {result.map((item, index) => (
            
              // <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={index} >
                <ProjectCard
                  title={item.title}
                  tag={item.tag}
                  desc={item.desc}
                  img={item.cover}
                  technologies={item.technologies}
                  path = {item.path}
                  subtitle={item.subtitle}
                />
              // </Grid>
           
          ))}
          </Carousel>
        // </Grid>
      ) : (
        ""
      )}
    </Box>
  );
}
