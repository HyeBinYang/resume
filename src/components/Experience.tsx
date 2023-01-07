import React, { useMemo } from "react";
import { Flex } from "./style";
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

  console.log(data, experiences);

  return (
    <section>
      <h2 css={{ color: "rgba(51, 126, 169, 1)", marginBottom: "0.875em", fontSize: "1.875em" }}>Experience</h2>
      {experiences.map((experience) => (
        <Flex key={experience.title} alignItems="flex-start" gap={32}>
          <div>
            <Flex alignItems="center" gap={12}>
              <StaticImage width={20} height={20} layout="fixed" src="../images/YMYD_Logo.png" alt="약문약답 로고" />
              <h3
                css={{
                  fontSize: "1.3em",
                  lineHeight: "1.75em",
                }}
              >
                {experience.title}
              </h3>
            </Flex>
            <p css={{ margin: "8px 0 8px", fontWeight: 700, color: "gray" }}>{experience.job}</p>
            <p css={{ color: "lightgray" }}>{experience.period}</p>
          </div>
          <p css={{ flex: 1, lineHeight: "1.75em" }}>{experience.content}</p>
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
