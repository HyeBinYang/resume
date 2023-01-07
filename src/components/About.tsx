import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";
import { MdEmail } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { FcCellPhone } from "react-icons/fc";
import styled from "@emotion/styled";
import { Flex } from "./style";

type ContactTitle = "email" | "github" | "phone";
type Contact = {
  title: ContactTitle;
  emoji: string;
  href: string;
};

const CONTACT_ICON_SIZE = 20;

const Link = styled.a`
  color: #37352f;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const About = () => {
  const data = useStaticQuery(query);

  const splitParagraph = (paragraph: string) => {
    return paragraph.split("\n");
  };

  const contactIcons = useMemo(() => {
    const iconMapper = {
      email: <MdEmail size={CONTACT_ICON_SIZE} color="skyblue" />,
      github: <AiFillGithub size={CONTACT_ICON_SIZE} />,
      phone: <FcCellPhone size={CONTACT_ICON_SIZE} />,
    };

    return data.site.siteMetadata.about.contacts.map((contact: Contact) => iconMapper[contact.title]);
  }, [data.site.siteMetadata.about.contacts]);

  return (
    <section>
      <h2 css={{ fontSize: "32px", marginBottom: "1.3em" }}>{data.site.siteMetadata.about.title}</h2>
      <div
        css={{
          marginBottom: "1.3em",
          "* + *": {
            marginTop: "1.2em",
          },
        }}
      >
        {splitParagraph(data.site.siteMetadata.about.content).map((sentence: string) => (
          <p
            css={{
              fontSize: "16px",
            }}
          >
            {sentence}
          </p>
        ))}
      </div>
      <Flex as="ul" gap={4} direction="column" css={{ marginBottom: "20px" }}>
        {data.site.siteMetadata.about.contacts.map((contact: Contact, index: number) => (
          <Flex as="li" key={contact.href} gap={8} alignItems="center">
            <span>{contactIcons[index]}</span>
            <Link href={contact.href}>
              <strong
                css={{
                  fontSize: "13px",
                }}
              >
                {contact.href}
              </strong>
            </Link>
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
        about {
          title
          content
          contacts {
            title
            href
          }
        }
      }
    }
  }
`;

export default About;
