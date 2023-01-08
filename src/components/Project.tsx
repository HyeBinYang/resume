import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";
import { Flex } from "./style";

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
      <h2 css={{ color: "rgba(51, 126, 169, 1)", marginBottom: "0.875em", fontSize: "1.875em" }}>Project</h2>
      <Flex as="ul" direction="column" gap={60}>
        {projects.map((project) => (
          <Flex key={project.title} as="li" direction="column" gap={8}>
            <h3
              css={{
                fontSize: "1.3em",
              }}
            >
              {project.title}
            </h3>
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
