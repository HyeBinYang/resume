import React from "react";
import { Global, css } from "@emotion/react";
import About from "components/About";
import Header from "components/Header";
import Career from "components/Career";
import Divider from "components/Divider";
import Project from "components/Project";
import Skills from "components/Skills";
import Education from "components/Education";

const globalStyle = css`
  body {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0;
  }

  h2 {
    font-size: 30px;
    margin-top: 0;
    margin-bottom: 36px;
  }

  ul {
    padding: 0;
    margin: 0;
  }
`;

const Home = () => {
  return (
    <div>
      <Global styles={globalStyle} />
      <Header />
      <main>
        <About />
        <Divider />
        <Career />
        <Divider />
        <Project />
        <Divider />
        <Skills />
        <Divider />
        <Education />
      </main>
    </div>
  );
};

export default Home;
