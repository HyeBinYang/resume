import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";
import { color, Flex, Text } from "./style";

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
      <Text as="h2" color={color.blue} mr="0 0 0.875em 0" fontSize="1.875em">
        Education
      </Text>
      <div>
        {educations.map((education) => (
          <Flex direction="column" gap={8} css={{ marginBottom: "1.5em" }}>
            <Text as="h3" fontSize="1.3em">
              {education.title}
            </Text>
            {education.description && (
              <Text fontWeight={700} color={color.gray}>
                {education.description}
              </Text>
            )}
            <Text color={color.lightGray}>{education.period}</Text>
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
