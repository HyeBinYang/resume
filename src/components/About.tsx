import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const About = () => {
  const data = useStaticQuery(query);

  console.log(data);

  return (
    <section>
      <h2>{data.site.siteMetadata.about.title}</h2>
      <p>{data.site.siteMetadata.about.content}</p>
    </section>
  );
};

const query = graphql`
  {
    site {
      siteMetadata {
        about {
          title
          content
          phone
          email
          github
      }
    }
  }
`;

export default About;
