import React from "react";
import { Global, css } from "@emotion/react";
import About from "components/About";
import Header from "components/Header";
import Experience from "components/Experience";
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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
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
      <main css={{ paddingBottom: "200px" }}>
        <About />
        <Divider />
        <Experience />
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
