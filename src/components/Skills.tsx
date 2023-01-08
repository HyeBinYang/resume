import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";
import { Flex, ListTitle, SectionTitle } from "./style";

type Skill = {
  skill: string;
  contents: string[];
};

const Skills = () => {
  const data = useStaticQuery(query);

  const skills: Skill[] = useMemo(() => data.site.siteMetadata.skills, [data.site.siteMetadata.skills]);

  return (
    <section>
      <SectionTitle>Skills</SectionTitle>
      <Flex as="ul" direction="column" gap={60}>
        {skills.map((item) => (
          <div key={item.skill}>
            <ListTitle mr="0 0 0.6em 0">{item.skill}</ListTitle>
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
