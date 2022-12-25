import React, { useRef, useEffect } from "react";
import TagCloud from "TagCloud";

const TagCloudSkill = () =>  {
  const sphereMounted = useRef(false); // useRef hook: Avoids behavior where useeffect runs twice in development mode. 
  React.useEffect(() => {
        if(sphereMounted.current === false){
 // Again, define your tags  
            const myTags = [
                'Python', 'Spark', 'React',
                'JavaScript', 'HTML/CSS',
                'Django', 'Azure', 'git',
                'AWS', 'PowerBI'
            ];
            // Render a tagCloud with custom configuration
            var tagCloud = TagCloud('.sphere', myTags,{

                // radius in px
                radius: 200,

                // animation speed
                // slow, normal, fast
                maxSpeed: 'fast',
                initSpeed: 'normal',

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
