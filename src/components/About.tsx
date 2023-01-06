import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";
import { MdEmail } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { FcCellPhone } from "react-icons/fc";
import styled from "@emotion/styled";

interface FlexProps {
  gap?: number;
  direction?: string;
  alignItems?: string;
  style?: React.CSSProperties;
}

type ContactTitle = "email" | "github" | "phone";
type Contact = {
  title: ContactTitle;
  emoji: string;
  href: string;
};

const CONTACT_ICON_SIZE = 24;

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};
  align-items: ${({ alignItems = "normal" }) => alignItems};
  gap: ${({ gap = 0 }) => `${gap}px`};
`;

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
      email: <MdEmail size={CONTACT_ICON_SIZE} color="pink" />,
      github: <AiFillGithub size={CONTACT_ICON_SIZE} />,
      phone: <FcCellPhone size={CONTACT_ICON_SIZE} />,
    };

    return data.site.siteMetadata.about.contacts.map((contact: Contact) => iconMapper[contact.title]);
  }, [data.site.siteMetadata.about.contacts]);

  return (
    <section>
      <h2>{data.site.siteMetadata.about.title}</h2>
      <div>
        {splitParagraph(data.site.siteMetadata.about.content).map((sentence: string) => (
          <p>{sentence}</p>
        ))}
      </div>
      <Flex as="ul" gap={8} direction="column" css={{ marginBottom: "20px" }}>
        {data.site.siteMetadata.about.contacts.map((contact: Contact, index: number) => (
          <Flex as="li" key={contact.href} gap={4} alignItems="center">
            <span>{contactIcons[index]}</span>
            <Link href={contact.href}>
              <strong>{contact.href}</strong>
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
