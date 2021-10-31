import { motion } from "framer-motion";
import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { getStory } from "@api";
import { formatDate } from "@utils";
import { storyContext } from "../../contexts/storyContext";
const Story = ({ storyId, delay }) => {
  const [story, setStory] = useState({});
  const [loaded, setloaded] = useState(false);

  const { stories, setStories } = useContext(storyContext);

  useEffect(() => {
    getStory(storyId).then((e) => {
      e && e.url && e.title.length > 0 && setStory(e);
      const tempArray = stories;
      tempArray.push(e);
      setStories([...stories, e]);
      setloaded(!loaded);
    });
  }, [storyId]);

  return (
    <>
      {
        // !loaded ? (
        //   <Card className="card wrapp center">
        //     <h2>Loading</h2>
        //   </Card>
        // ) :
        <a href={story.url} id={story.id}>
          <Card
            className="card wrapp "
            variants={{
              hidden: {
                opacity: 0,
              },
              show: {
                opacity: 1,
                transition: {
                  duration: 0.75,
                  delay: delay,
                },
                exit: {
                  opacity: 0,
                  transition: { duration: 0.75 },
                },
              },
            }}
            initial="hidden"
            animate="show"
          >
            <h2>{story.title}</h2>
            <div className="tags">
              <div className="tags__col tags__col--left">
                <span className="tag type">{story.type}</span>
                <span className="tag by">By {story.by && story.by}</span>
              </div>
              <div className="tags__col">
                <span className="tag">Date: {formatDate(story.time)}</span>
              </div>
            </div>
          </Card>
        </a>
      }
    </>
  );
};

const Card = styled(motion.div)`
  background-color: var(--clr-4);
  border-radius: 0.625rem;
  box-shadow: var(--shadow);
  color: var(--clr-4);
  flex-direction: column;
  line-height: 1.38;
  margin-top: 1.1875rem;
  
  &.wrapp {
    --pading: 1.5em 1em;
  }

/* backdrop-filter: blur( 15.5px ); */
background: rgba( 22, 0, 0, 0.25 );
border-radius: var(--rounded);
box-shadow: var(--shadow);
justify-content: space-between;
min-height: 13.5rem;

  width: 100%;
  display: flex;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
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
