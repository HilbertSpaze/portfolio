import React, { useRef, useEffect } from "react";
import TagCloud from "TagCloud";

const TagCloudSkill = () =>  {
  const sphereMounted = useRef(false); // useRef hook: Avoids behavior where useeffect runs twice in development mode. 
  useEffect(() => {
        if(sphereMounted.current === false){
 // Again, define your tags  
            const myTags = [
                'Python', 'Spark', 'Dask',
                'Django', 'Azure', 'git',
                'AWS', 'PowerBI', 'SQL',
                'ReactJS', 'HTML/CSS',
            ];
            // Render a tagCloud with custom configuration
            TagCloud('.sphere', myTags,{

                // radius in px
                radius: 305,

                // animation speed
                // slow, normal, fast
                maxSpeed: 'normal',
                initSpeed: 'slow',

                // 0 = top
                // 90 = left
                // 135 = right-bottom
                direction: 135,

                // interact with cursor move on mouse out
                keep: true,
            });
        }
        return () => sphereMounted.current = true; // useRef 
    }, []);
// This is what will render the tagcloud:
  return(
   <span className="sphere"></span>
  );
}

export default TagCloudSkill;