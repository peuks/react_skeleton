// import React, { useState, useContext } from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "@animations";
import { BsJournalCode } from "react-icons/bs";
// import { storyContext } from "@contexts/storyContext";
// import useDebounce from "hooks/useDebounce";

const SearchBar = () => {
  // const { stories, setStories } = useContext(storyContext);

  // const [textInput, setTextInput] = useState("");
  // const [filtered, setfiltered] = useState("");
  /**
   * Delay api Request by 1sec after textInput has changed
   */
  // useDebounce(
  //   (e) =>
  //     setfiltered(
  //       stories
  //         .filter((word) => word.title.toLowerCase().includes(textInput))
  //         .sort()
  //         .splice(0, 5)
  //     ) && setStories(filtered),

  //   1000,
  //   [textInput]
  // );

  // const inputHandler = (e) => {
  //   e.preventDefault();
  //   setTextInput(e.target.value);
  // };

  // const clearSearched = () => {
  //   setData({});
  // };
  return (
    <StyledNav
      className="flex  wrapp"
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
      <Form className="search">
        <TextArea
          type="text"
          class="px-5 h-12 rounded-full focus:shadow focus:outline-none"
          placeholder="Search anything..."
        />
      </Form>
    </StyledNav>
  );
};

const Form = styled(motion.form)`
  width: clamp(15.5rem, 14em + 18vw, 70%);
`;
const TextArea = styled(motion.input)`
  width: 100%;
  height: 3rem /* 48px */;
  padding-left: 1.25rem /* 20px */;
  padding-right: 1.25rem /* 20px */;
  border-radius: 9999px;
  border: none;
  --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  &:focus {
    --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;
const StyledNav = styled(motion.header)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled(motion.div)`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export default SearchBar;
