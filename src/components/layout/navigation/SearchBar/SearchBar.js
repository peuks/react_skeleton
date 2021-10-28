import React, { useEffect, useState, useContext } from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "@animations";
import { BsJournalCode } from "react-icons/bs";
import { storyContext } from "@contexts/storyContext";
// import useDebounce from "@hooks/useDebounce";

const SearchBar = ({}) => {
  const { stories, setStories } = useContext(storyContext);

  const [textInput, setTextInput] = useState("");

  const { setData, data } = useContext(storyContext);
  const test = () => {
    console.log(stories);
  };
  /**
   * Delay api Request by 1sec after textInput has changed
   */
  // useDebounce((e) => fetchData(textInput), 1000, [textInput]);

  const inputHandler = (e) => {
    e.preventDefault();
    setTextInput(e.target.value);
  };

  const clearSearched = () => {
    setData({});
  };
  return (
    <StyledNav
      className="container"
      variants={fadeIn}
      initial="hidden"
      animate="show"
    >
      <Logo onClick={clearSearched}>
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;
  input {
    width: 70%;
    padding: 0.5rem;
    border: none;
    box-shadow: var(--shadow);
  }

  .search {
    height: 2.5rem;
    display: flex;
    width: clamp(15em, 20em + 18vw, 50%);
    & > * {
      border: none;
    }
    input {
      flex: 10;
      border-radius: 1.5625rem 0 0 1.5625rem;

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
      border-radius: 0 1.5625rem 1.5625rem 0;
      box-shadow: var(--shadow);

      padding: 0.5rem 2rem;
      cursor: pointer;
      background: var(--clr-6);
      color: white;
    }
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;

export default SearchBar;
