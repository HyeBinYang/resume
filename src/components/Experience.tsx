import React, { useMemo } from "react";
import { color, Flex, Text } from "./style";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

type Experience = {
  title: string;
  contents: string[];
  job: string;
  period: string;
  logo: string;
};

const Experience = () => {
  const data = useStaticQuery(query);

  const experiences: Experience[] = useMemo(
    () => data.site.siteMetadata.experiences,
    [data.site.siteMetadata.experiences]
  );

  console.log(experiences);

  return (
    <section>
      <Text as="h2" color={color.blue} mr="0 0 0.875em 0" fontSize="1.875em">
        Experience
      </Text>
      {experiences.map((experience) => (
        <Flex key={experience.title} alignItems="flex-start" gap={32} css={{ marginBottom: "60px" }}>
          <Flex direction="column" gap={8}>
            <Flex alignItems="center" gap={12}>
              {experience.logo && (
                <StaticImage
                  width={20}
                  height={20}
                  layout="fixed"
                  src={`../images/${experience.logo}`}
                  alt="약문약답 로고"
                />
              )}
              <Text as="h3" lineHeight="1.75em" fontSize="1.3em">
                {experience.title}
              </Text>
            </Flex>
            <Text color={color.gray} fontWeight={700}>
              {experience.job}
            </Text>
            <Text color={color.lightGray} fontWeight={500}>
              {experience.period}
            </Text>
          </Flex>
          <Flex as="ul" direction="column" gap={12} css={{ marginLeft: "12px" }}>
            {experience.contents.map((content) => (
              <li key={content}>
                <Text fontSize="1rem">{content}</Text>
              </li>
            ))}
          </Flex>
        </Flex>
      ))}
    </section>
  );
};

const query = graphql`
  {
    site {
      siteMetadata {
        experiences {
          title
          contents
          job
          period
          logo
        }
      }
    }
  }
`;

export default Experience;
