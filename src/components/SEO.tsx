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
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://resume-robin.netlify.app/" />
      <meta property="og:title" content={metaData.title} />
      {/* <meta property="og:image" content="https://example.com/image.jpg" /> */}
      <meta property="og:description" content={metaData.description} />
      <meta property="og:site_name" content={metaData.title} />
      <meta property="og:locale" content="ko_KR" />
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
