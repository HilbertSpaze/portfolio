import React, {useState, useEffect} from "react";
import { Box } from "@mui/material";
import projectList from "../pages/subpage/Project/ProjectMetaData";
import ProjectCard from "../components/cards/ProjectCards"
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Carousel from 'react-material-ui-carousel'
import { Carousel } from 'react-responsive-carousel';

export default function GenerateGrid(props) {
  const { tag } = props;
  const [result, setResult] = useState([])


  useEffect(()=>{
    
    if (tag.valueOf() === "ALL") {
      setResult(projectList);

    } else {
      setResult(projectList.filter((item) => item.tag.valueOf() === tag));

    }
  },[tag])


  return (
    <Box sx={{maxHeight:'102vh', maxWidth:'100%'}} >
      {result.length > 0 ? (

        <Carousel key={tag} autoPlay infiniteLoop  interval = {2500} showArrows centerMode showThumbs={false} centerSlidePercentage={(1/3)*100}>
          {result.map((item, index) => (
                <ProjectCard
                  title={item.title}
                  tag={item.tag}
                  desc={item.desc}
                  img={item.cover}
                  technologies={item.technologies}
                  path = {item.path}
                  subtitle={item.subtitle}
                />

           
          ))}
          </Carousel>

      ) : (
        ""
      )}
    </Box>
  );
}
