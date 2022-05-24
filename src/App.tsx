import React from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import NavBar from "./Header";
import Profile from "./Profile";

const Home = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Home>
      <GlobalStyle />
      <NavBar />
      <Profile />
      {/* <Project />
      <How />
      <Contact /> */}
    </Home>
  );
}

export default App;
