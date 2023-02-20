import React from "react";
import { Global } from "@emotion/react";
import About from "components/About";
import Header from "components/Header";
import Experience from "components/Experience";
import Divider from "components/Divider";
import Project from "components/Project";
import Skills from "components/Skills";
import Education from "components/Education";
import SEO from "components/SEO";
import { globalStyle } from "../style/global";

const Home = () => {
  return (
    <div>
      <Global styles={globalStyle} />
      <Header />
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
