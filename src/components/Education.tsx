import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";
import { color, Flex, Text } from "./style";

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
      <Text as="h2" color={color.blue} mr="0 0 0.875em 0" fontSize="1.875em">
        Education
      </Text>
      <Flex direction="column" gap={8}>
        <Text as="h3" fontSize="1.3em">
          {education.university} 졸업
        </Text>
        <Text fontWeight={700} color={color.gray}>
          {education.major}, {education.minor}(부전공)
        </Text>
        <Text color={color.lightGray}>{education.period}</Text>
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
