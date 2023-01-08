import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";
import { Flex, ListTitle, SectionTitle } from "./style";

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
      <SectionTitle>Education</SectionTitle>
      <Flex direction="column" gap={8}>
        <ListTitle>{education.university} 졸업</ListTitle>
        <p css={{ fontWeight: 700, color: "gray" }}>
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
