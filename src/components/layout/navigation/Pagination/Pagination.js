import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Pagination = ({ next, prev, currentPage, index, maxPages, goTO }) => {
  let delay = 0.3;

  return (
    <PaginationStyle className="pagination">
      <Button onClick={prev}>prev</Button>
      {[...Array(maxPages).keys()]
        .map((x) => x + index)
        .map((currElement) => {
          delay += 0.155;
          return (
            <Button
              onClick={goTO}
              id={currElement}
              href="#!1"
              className={`number ${
                currElement === currentPage ? "active" : ""
              }`}
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
              {currElement}
            </Button>
          );
        })}

      <Button onClick={next}>next</Button>
    </PaginationStyle>
  );
};

const PaginationStyle = styled.nav`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  animation: pagination-in 500ms ease both;
  /* Prev and Next BTN */
  & > :first-child {
    margin-right: 1.5rem;
  }
  & > :last-child {
    margin-left: 1.5rem;
  }
  .number {
    display: none;
    @media screen and (min-width: 560px) {
      display: block;
    }
  }
`;

const Button = styled(motion.a)`
  font-size: 1rem;
  text-decoration: none;
  text-align: center;
  transition: background 250ms;

  text-transform: uppercase;
  height: 2.375rem;
  min-width: 2.375rem;
  border-radius: 2.375rem;
  border: 2px solid #fff;
  line-height: 2.375rem;
  padding: 0;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.03em;

  /* Prev and Next BTN */
  &:first-child,
  &:last-child {
    padding: 0 1rem;
    /* margin: 0 12px 6px; */
  }

  &.active {
    background-color: var(--clr-6);
  }
  &:hover {
    background-color: var(--clr-6);
  }
`;
export default Pagination;
