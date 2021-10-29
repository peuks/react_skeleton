import React, { useEffect, useState } from "react";
import SearchBar from "@components/layout/navigation/SearchBar/SearchBar";
import { storyContext } from "@contexts/storyContext";
import { Stories } from "./Sections";

const Home = () => {
  const [stories, setStories] = useState([]);

  return (
    <storyContext.Provider value={{ stories, setStories }}>
      <SearchBar />
      <Stories />
    </storyContext.Provider>
  );
};

export default Home;
