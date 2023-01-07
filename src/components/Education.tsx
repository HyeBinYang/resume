import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";
import { Flex } from "./style";

type EducationData = {
  university: string;
  major: string;
  minor: string;
  period: string;
};

const Education = () => {
  const data = useStaticQuery(query);

  const education: EducationData = useMemo(() => data.site.siteMetadata.education, [data.site.siteMetadata.education]);

  return (
    <section>
      <h2 css={{ color: "rgba(51, 126, 169, 1)", marginBottom: "0.875em", fontSize: "1.875em" }}>Education</h2>
      <Flex direction="column" gap={4}>
        <h3
          css={{
            fontSize: "1.35em",
          }}
        >
          {education.university} 졸업
        </h3>
        <p css={{ margin: "8px 0 8px", fontWeight: 700, color: "gray" }}>
          {education.major}, {education.minor}(부전공)
        </p>
        <p css={{ color: "lightgray" }}>{education.period}</p>
      </Flex>
    </section>
  );
};

const query = graphql`
  {
    site {
      siteMetadata {
        education {
          university
          major
          minor
          period
        }
      }
    }
  }
`;

export default Education;
