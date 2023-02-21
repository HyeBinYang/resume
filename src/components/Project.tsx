import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";
import { color, Flex, Text } from "./style";

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
      <Text as="h2" color={color.blue} mr="0 0 0.875em 0" fontSize="1.875em">
        Project
      </Text>
      <Flex direction="column" gap={60}>
        {projects.map((project) => (
          <Flex key={project.title} direction="column" gap={8}>
            <Text as="h3" fontSize="1.3em">
              {project.title}
            </Text>
            <Text color={color.gray} fontWeight={700}>
              {project.company}
            </Text>
            <Text color={color.lightGray}>{project.period}</Text>
            <Flex as="ul" direction="column" gap={4} css={{ margin: "0.8em 0 1em 1.6em" }}>
              {project.contents.map((content) => (
                <li key={content}>
                  <Text lineHeight="1.75em">{content}</Text>
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
