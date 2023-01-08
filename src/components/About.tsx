import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";
import { MdEmail } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { FcCellPhone } from "react-icons/fc";
import styled from "@emotion/styled";
import { Flex, SectionTitle } from "./style";
import { StaticImage } from "gatsby-plugin-image";

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
    <Flex as="section" gap={40}>
      <div css={{ flex: 1 }}>
        <SectionTitle>{data.site.siteMetadata.about.title}</SectionTitle>
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
              key={sentence}
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
      </div>
      <StaticImage
        width={350}
        height={350}
        layout="fixed"
        loading="lazy"
        src="../images/profile.jpg"
        alt="내 프로필"
        css={{
          borderRadius: "50%",
        }}
      />
    </Flex>
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
