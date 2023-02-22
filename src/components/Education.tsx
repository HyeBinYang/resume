import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";
import { color, Flex, Text } from "./style";
import Title from "./Title";

type EducationData = {
  title: string;
  description: string;
  period: string;
};

const Education = () => {
  const data = useStaticQuery(query);

  const educations: EducationData[] = useMemo(
    () => data.site.siteMetadata.educations,
    [data.site.siteMetadata.educations]
  );

  return (
    <section>
      <Title color={color.blue}>Education</Title>
      <div>
        {educations.map((education) => (
          <Flex direction="column" gap={10} css={{ marginBottom: "1.5em" }}>
            <Text as="h3" fontSize="1.45em">
              {education.title}
            </Text>
            {education.description && (
              <Text fontWeight={700} color={color.gray} fontSize="1.2em">
                {education.description}
              </Text>
            )}
            <Text color={color.lightGray} fontWeight={500} fontSize="1.1em">
              {education.period}
            </Text>
          </Flex>
        ))}
      </div>
    </section>
  );
};

const query = graphql`
  {
    site {
      siteMetadata {
        educations {
          title
          description
          period
        }
      }
    }
  }
`;

export default Education;
