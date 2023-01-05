import { graphql } from "gatsby";
import React from "react";

type HomePageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
      };
    };
  };
};

const Home: React.FC<HomePageProps> = ({ data }) => {
  return (
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
    </div>
  );
};

export default Home;

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
