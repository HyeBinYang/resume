import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";
import { Flex, ListTitle, SectionTitle } from "./style";

type Project = {
  title: string;
  content: string;
  period: string;
  skills: string[];
  href: string;
};

const Project = () => {
  const data = useStaticQuery(query);

  const projects: Project[] = useMemo(() => data.site.siteMetadata.projects, [data.site.siteMetadata.projects]);

  return (
    <section>
      <SectionTitle>Project</SectionTitle>
      <Flex as="ul" direction="column" gap={60}>
        {projects.map((project) => (
          <Flex key={project.title} as="li" direction="column" gap={8}>
            <ListTitle>{project.title}</ListTitle>
            <p css={{ color: "lightgray" }}>{project.period}</p>
            <p css={{ lineHeight: "1.75em" }}>{project.content}</p>
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
          content
          period
          skills
          href
        }
      }
    }
  }
`;

export default Project;
