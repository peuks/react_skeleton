import React, { useState } from "react";
import SearchBar from "@components/layout/navigation/SearchBar/SearchBar";
import { storyContext } from "@contexts/storyContext";
import { Stories } from "./Sections";
import styled from "styled-components";

const Home = () => {
  const [stories, setStories] = useState([]);

  return (
    <storyContext.Provider value={{ stories, setStories }}>
      <SearchBar />
      <Main className="main">
        <Stories />
      </Main>
    </storyContext.Provider>
  );
};

const Main = styled.div`
  nav {
    position: sticky;
    top: 1rem;
  }
  flex: 1;
  display: flex;
  flex-direction: column;
  > * {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  > {
    button {
      margin-top: auto;
      position: sticky;
      top: 1rem;
      bottom: 1rem;
    }
  }
`;
export default Home;
