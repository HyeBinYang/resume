import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";
import { color, Flex, Text } from "./style";
import Title from "./Title";

type Project = {
  title: string;
  company: string;
  contents: string[];
  period: string;
  skills: string[];
  href: string;
};

const Project = () => {
  const data = useStaticQuery(query);

  const projects: Project[] = useMemo(() => data.site.siteMetadata.projects, [data.site.siteMetadata.projects]);

  return (
    <section>
      <Title color={color.blue}>Project</Title>
      <Flex direction="column" gap={60}>
        {projects.map((project) => (
          <Flex key={project.title} direction="column" gap={8}>
            <Text as="h3" lineHeight="1.75em" fontSize="1.45em">
              {project.title}
            </Text>
            <Text color={color.gray} fontWeight={700} fontSize="1.2em">
              {project.company}
            </Text>
            <Text color={color.lightGray} fontWeight={500} fontSize="1.1em">
              {project.period}
            </Text>
            <Flex as="ul" direction="column" gap={4} css={{ margin: "0.8em 0 1em 1.6em" }}>
              {project.contents.map((content) => (
                <li key={content}>
                  <Text lineHeight="1.75em" fontSize="1.15em">
                    {content}
                  </Text>
                </li>
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </section>
  );
};

const query = graphql`
  {
    site {
      siteMetadata {
        projects {
          title
          company
          contents
          period
          skills
          href
        }
      }
    }
  }
`;

export default Project;
