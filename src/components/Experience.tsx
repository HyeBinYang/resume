import React, { useMemo } from "react";
import { color, Flex, Text } from "./style";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

type Experience = {
  title: string;
  content: string;
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

  return (
    <section>
      <Text as="h2" color={color.blue} mr="0 0 0.875em 0" fontSize="1.875em">
        Experience
      </Text>
      {experiences.map((experience) => (
        <Flex key={experience.title} alignItems="flex-start" gap={32}>
          <Flex direction="column" gap={8}>
            <Flex alignItems="center" gap={12}>
              <StaticImage width={20} height={20} layout="fixed" src="../images/YMYD_Logo.png" alt="약문약답 로고" />
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
          <Text lineHeight="1.75em" css={{ flex: 1 }}>
            {experience.content}
          </Text>
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
          content
          job
          period
          logo
        }
      }
    }
  }
`;

export default Experience;
