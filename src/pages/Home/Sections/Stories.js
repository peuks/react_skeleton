import { AnimateSharedLayout, motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import Story from "../../../components/Story/Story";
import Pagination from "../../../components/layout/navigation/Pagination/Pagination";
import usePagination from "../../../hooks/usePagination";
import useFetchData from "../../../hooks/useFetchData";

const Stories = ({}) => {
  const { storiesIds } = useFetchData();

  const [itemsPerPage] = useState(40);

  const { currentPage, currentData, next, prev, index, goTO } = usePagination(
    storiesIds,
    itemsPerPage
  );
  const filteredData = currentData();

  return (
    <Container className="container">
      <StyledDiv className="flex  wrapp">
        <div className="wrapp">
          <Pagination
            next={next}
            prev={prev}
            currentPage={currentPage}
            maxPages={5}
            itemsPerPage={itemsPerPage}
            index={index}
            goTO={goTO}
          />
        </div>
        <Grid>
          {filteredData.length &&
            filteredData.map((id) => <Story storyId={id} key={id} />)}
        </Grid>
      </StyledDiv>
    </Container>
  );
};

const StyledDiv = styled(motion.div)`
  flex-flow: column;
  padding: 0rem min(3.5vw, 5rem);
  text-align: center;
`;
const Container = styled(motion.div)`
  flex-direction: column;
`;
const Grid = styled.div`
  /* display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(clamp(248 px, 50 vw, 350 px), 1fr)
  );
  grid-row-gap: 5 rem; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1rem;
`;

export default Stories;
