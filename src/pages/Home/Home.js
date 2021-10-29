import React, { useEffect, useState } from "react";
import SearchBar from "@components/layout/navigation/SearchBar/SearchBar";
import { storyContext } from "@contexts/storyContext";
import { Stories } from "./Sections";

const Home = () => {
  const [stories, setStories] = useState([]);
  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    setTimeout(() => {
      refreshPage();
    }, 30000);
  }, []);
  return (
    <storyContext.Provider value={{ stories, setStories }}>
      <SearchBar />
      <Stories />
    </storyContext.Provider>
  );
};

export default Home;
