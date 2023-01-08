import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";
import { color, Flex, Text } from "./style";

type Skill = {
  skill: string;
  contents: string[];
};

const Skills = () => {
  const data = useStaticQuery(query);

  const skills: Skill[] = useMemo(() => data.site.siteMetadata.skills, [data.site.siteMetadata.skills]);

  return (
    <section>
      <Text as="h2" color={color.blue} mr="0 0 0.875em 0" fontSize="1.875em">
        Skills
      </Text>
      <Flex as="ul" direction="column" gap={60}>
        {skills.map((item) => (
          <div key={item.skill}>
            <Text as="h3" mr="0 0 0.6em 0">
              {item.skill}
            </Text>
            <Flex direction="column" gap={8}>
              {item.contents.map((content) => (
                <li
                  key={content}
                  css={{
                    listStyleType: "disc",
                    marginLeft: "1.475em",
                  }}
                >
                  {content}
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
