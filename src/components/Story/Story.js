import { motion } from "framer-motion";
import moment from "moment";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getStory } from "../../api";

const Story = ({ storyId }) => {
  const [story, setStory] = useState({});
  const [loaded, setloaded] = useState(false);

  useEffect(async () => {
    getStory(storyId).then((e) => {
      e && e.url && setStory(e);
      setloaded(!loaded);
    });
  }, [storyId]);

  return (
    <>
      {!loaded ? (
        <Card className="card wrapp center">
          <h2>Loading</h2>
        </Card>
      ) : (
        <a href={story.url} id="">
          <Card className="card wrapp spacing">
            <h2>{story.title}</h2>
            <div className="tags">
              <div className="tags__col tags__col--left">
                <span className="tag type">{story.type}</span>
                <span className="tag by">By {story.by && story.by}</span>
              </div>
              <div className="tags__col ">
                <span className="tag">
                  Date: {moment(story.time).format("Do MMMM")}
                </span>
              </div>
            </div>
          </Card>
        </a>
      )}
    </>
  );
};

const Card = styled(motion.div)`
/* backdrop-filter: blur( 15.5px ); */
background: rgba( 22, 0, 0, 0.25 );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
justify-content: space-between;
min-height: 13.5rem;

color: white;
  width: 100%;
  display: flex;
  }
  .tags {
    display: flex;
    justify-content: space-between;
    &__col{
      &--left{
        display: flex;
        gap:1rem
      }
    }
  .tag {
    border: 1px solid #333;
    border-radius: 3px;
    padding: 0 0.5rem;
  }
  
`;
export default Story;
