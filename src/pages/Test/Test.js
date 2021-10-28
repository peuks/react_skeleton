import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getStory, getStoryIds } from "../../api";
import Pagination from "../../components/layout/navigation/Pagination/Pagination";
import Story from "../../components/Story/Story";
import usePagination from "../../hooks/usePagination";
import { Stories } from "../Home/Sections";
const Test = () => {
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [nbOfButtons, setNbOfButtons] = useState(5);

  /***************************
   * RÉCUPÉRER TOUTE LA DATA *
   ***************************/
  const [storyIds, setStoryIds] = useState(false);
  useEffect(async () => {
    const result = await getStoryIds();
    setStoryIds(result);
  }, []);

  /******************
   * LA CURRENTPAGE *
   ******************/
  const {
    currentPage,
    currentData,
    next,
    prev,
    jump,
    index,
    setCurrentPage,
  } = usePagination(storyIds, 2, nbOfButtons);
  const filteredData = currentData();

  return (
    <div>
      <Div>
        <h1>salut</h1>
        <h4> la liste des stories</h4>
        <ul>
          {filteredData.length &&
            filteredData.map((id) => {
              return <Story storyId={id} />;
            })}
        </ul>
      </Div>
      <Pagination
        next={next}
        prev={prev}
        currentPage={currentPage}
        maxPages={nbOfButtons}
        itemsPerPage={itemsPerPage}
        index={index}
        setPage={setCurrentPage}
        jump={jump}
      />
    </div>
  );
};

const Div = styled.div`
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default Test;
