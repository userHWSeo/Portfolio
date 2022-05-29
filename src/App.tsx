import React from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Profile from "./Profile";
import Project from "./Project";
import Contact from "./Contact";

const Home = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Home>
      <GlobalStyle />
      <Profile />
      <Project />
      <Contact />
    </Home>
  );
}

export default App;
