import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";
import { Flex } from "./style";

type Skill = {
  skill: string;
  contents: string[];
};

const Skills = () => {
  const data = useStaticQuery(query);

  const skills: Skill[] = useMemo(() => data.site.siteMetadata.skills, [data.site.siteMetadata.skills]);

  return (
    <section>
      <h2 css={{ color: "rgba(51, 126, 169, 1)", marginBottom: "0.875em", fontSize: "1.875em" }}>Skills</h2>
      <Flex as="ul" direction="column" gap={60}>
        {skills.map((item) => (
          <div key={item.skill}>
            <h3
              css={{
                fontSize: "1.3em",
                marginBottom: "0.6em",
              }}
            >
              {item.skill}
            </h3>
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
