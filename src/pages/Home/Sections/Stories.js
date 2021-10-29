import { AnimateSharedLayout, motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";
import Story from "components/Story/Story";
import Pagination from "components/layout/navigation/Pagination/Pagination";
import usePagination from "hooks/usePagination";
import useFetchData from "hooks/useFetchData";
import useCount from "hooks/useCount";
import useScroll from "hooks/useScroll";

const Stories = ({}) => {
  const { storiesIds } = useFetchData();

  const { count, setCount } = useCount(30);
  const { currentPage, currentData, next, prev, index, goTO } = usePagination(
    storiesIds,
    count
  );
  const filteredData = currentData();
  const incrementCount = () => {
    setCount(count + 5);
  };

  const { scroll } = useScroll();

  useEffect(() => {
    scroll();
  }, [count]);
  return (
    <Container>
      <StyledDiv className="flex">
        <Pagination
          next={next}
          prev={prev}
          currentPage={currentPage}
          maxPages={5}
          itemsPerPage={count}
          index={index}
          goTO={goTO}
        />
        <Grid>
          <AnimateSharedLayout type="crossfade">
            {filteredData.length &&
              filteredData.map((id) => <Story storyId={id} key={id} />)}
          </AnimateSharedLayout>
        </Grid>
        <div className="container">
          <Button onClick={incrementCount}>Load More</Button>
        </div>
      </StyledDiv>
    </Container>
  );
};

const Button = styled(motion.button)`
  border-radius: 1.5625rem 1.5625rem;
  box-shadow: var(--shadow);

  padding: 0.5rem 2rem;
  cursor: pointer;
  background: var(--clr-6);
  color: white;
  border: none;
  height: 2.5rem;
  max-width: 10rem;
  margin: auto;
`;
const StyledDiv = styled(motion.div)`
  flex-flow: column;
  padding: 0rem min(3.5vw, 5rem);
  text-align: center;
`;
const Container = styled(motion.div)`
  flex-direction: column;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: var(--spacing);
`;

export default Stories;
