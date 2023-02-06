import React from "react";
import { Global, css } from "@emotion/react";
import About from "components/About";
import Header from "components/Header";
import Experience from "components/Experience";
import Divider from "components/Divider";
import Project from "components/Project";
import Skills from "components/Skills";
import Education from "components/Education";
import SEO from "components/SEO";

const globalStyle = css`
  body {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
    font-family: "Nanum Gothic", sans-serif;
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

  li {
    list-style-type: none;
  }
`;

const Home = () => {
  return (
    <div>
      <Global styles={globalStyle} />
      {/* <Header /> */}
      <main css={{ padding: "40px 20px 200px" }}>
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

export const Head = () => {
  return <SEO />;
};
