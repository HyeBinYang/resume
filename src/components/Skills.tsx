import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";
import { color, Flex, Text } from "./style";
import Title from "./Title";

type Skill = {
  skill: string;
  contents: string[];
};

const Skills = () => {
  const data = useStaticQuery(query);

  const skills: Skill[] = useMemo(() => data.site.siteMetadata.skills, [data.site.siteMetadata.skills]);

  return (
    <section>
      <Title color={color.blue}>Skills</Title>
      <Flex as="ul" direction="column" gap={60}>
        {skills.map((item) => (
          <div key={item.skill}>
            <Text as="h3" mr="0 0 1em 0" fontSize="1.45em">
              {item.skill}
            </Text>
            <Flex direction="column" gap={12}>
              {item.contents.map((content) => (
                <li
                  key={content}
                  css={{
                    marginLeft: "1.475em",
                  }}
                >
                  <Text fontSize="1.15em">{content}</Text>
                </li>
              ))}
            </Flex>
          </div>
        ))}
      </Flex>
    </section>
  );
};

const query = graphql`
  {
    site {
      siteMetadata {
        skills {
          skill
          contents
        }
      }
    }
  }
`;

export default Skills;
