import React, { useState, useContext } from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "@animations";
import { BsJournalCode } from "react-icons/bs";
import { storyContext } from "@contexts/storyContext";
import useDebounce from "hooks/useDebounce";
// import useSearch from "hooks/useSearch";
// import useDebounce from "@hooks/useDebounce";

const SearchBar = ({}) => {
  const { stories, setStories } = useContext(storyContext);
  // const { results } = useSearch();

  const [textInput, setTextInput] = useState("");
  const [filtered, setfiltered] = useState("");
  /**
   * Delay api Request by 1sec after textInput has changed
   */
  useDebounce(
    (e) =>
      setfiltered(
        stories
          .filter((word) => word.title.toLowerCase().includes(textInput))
          .sort()
          .splice(0, 5)
      ) && setStories(filtered),

    1000,
    [textInput]
  );

  const inputHandler = (e) => {
    e.preventDefault();
    setTextInput(e.target.value);
  };

  // const clearSearched = () => {
  //   setData({});
  // };
  return (
    <StyledNav
      className="container"
      variants={fadeIn}
      initial="hidden"
      animate="show"
    >
      <Logo
      // onClick={clearSearched}
      >
        <BsJournalCode size={"4rem"} />
        <h1>Hacker News</h1>
      </Logo>
      <form className="search">
        <input
          value={textInput}
          onChange={inputHandler}
          // onChange={(e) => {
          //   setTest(e.target.value);
          // }}
          type="text"
        />
        <button
          // onClick={submitSearch}
          type="submit"
        >
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.header)`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;
  input {
    border: none;
    box-shadow: var(--shadow);
    padding: 0.5rem;
    width: 100%;
  }

  .search {
    display: flex;
    height: 2.5rem;
    width: clamp(11em, 14em + 18vw, 70%);
    & > * {
      border: none;
    }
    input {
      border-radius: var(--rounded) 0 0 var(--rounded);

      &:focus,
      &:hover {
        border: none;
      }
      &::placeholder {
        padding-left: 1.8rem;
      }
      &:focus {
        outline: none;
      }
    }

    button {
      background: var(--clr-6);
      border-radius: 0 var(--rounded) var(--rounded) 0;
      box-shadow: var(--shadow);
      color: var(--clr-4);
      cursor: pointer;
      padding: 0.5rem min(8vw, 4rem);
    }
  }
`;

const Logo = styled(motion.div)`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export default SearchBar;
