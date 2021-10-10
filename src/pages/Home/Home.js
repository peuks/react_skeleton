import React from "react";
import styled from "styled-components";
import { Section1, Section2 } from "./Sections";

const Home = () => {
  return (
    <main className="flex center">
      <StyledDiv className="flex center wrapp">
        <h1>Salut tout le monde</h1>
        <h2>Salut tout le monde</h2>
        <h3>Salut tout le monde</h3>
        <h4>Salut tout le monde</h4>
        <h5>Salut tout le monde</h5>
      </StyledDiv>
    </main>
  );
};

const StyledDiv = styled.div`
  flex-flow: column;
`;
export default Home;
