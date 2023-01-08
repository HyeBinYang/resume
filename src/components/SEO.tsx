import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";

type MetaData = {
  title: string;
  description: string;
  author: string;
  favicon: string;
};

const SEO = () => {
  const data = useStaticQuery(query);

  const metaData: MetaData = useMemo(() => data.site.siteMetadata, [data.site.siteMetadata]);

  return (
    <>
      <meta charSet="utf-8" />
      <title>{metaData.title}</title>
      <meta name="description" content={metaData.description} />
      <link
        rel="icon"
        href={`data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>${metaData.favicon}</text></svg>`}
      />
    </>
  );
};

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
        favicon
      }
    }
  }
`;

export default SEO;
