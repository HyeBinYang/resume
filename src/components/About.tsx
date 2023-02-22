import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";
import { MdEmail } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { FcCellPhone } from "react-icons/fc";
import { color, Flex, Link, Text } from "./style";
import { StaticImage } from "gatsby-plugin-image";
import { css } from "@emotion/react";
import Title from "./Title";

type ContactTitle = "email" | "github" | "phone";
type Contact = {
  title: ContactTitle;
  emoji: string;
  href: string;
};

const CONTACT_ICON_SIZE = 20;

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
    <Flex
      as="section"
      alignItems="flex-start"
      gap={20}
      css={css`
        @media (max-width: 750px) {
          flex-direction: column-reverse;
        }
      `}
    >
      <div>
        <Title color={color.black}>{data.site.siteMetadata.about.title}</Title>
        <div
          css={{
            marginBottom: "1.3em",
            "* + *": {
              marginTop: "1.2em",
            },
          }}
        >
          {splitParagraph(data.site.siteMetadata.about.content).map((sentence: string) => (
            <Text key={sentence} fontSize="1.2em" lineHeight="1.7em">
              {sentence}
            </Text>
          ))}
        </div>
        <Flex as="ul" gap={10} direction="column" css={{ marginBottom: "20px" }}>
          {data.site.siteMetadata.about.contacts.map((contact: Contact, index: number) => (
            <Flex as="li" key={contact.href} gap={8} alignItems="center">
              <span>{contactIcons[index]}</span>
              <Link href={contact.href}>
                <Text as="strong" fontSize="1.05em">
                  {contact.href}
                </Text>
              </Link>
            </Flex>
          ))}
        </Flex>
      </div>
      <StaticImage
        width={400}
        height={400}
        aspectRatio={1}
        loading="lazy"
        src="../images/profile.jpg"
        alt="내 프로필"
        css={css`
          border-radius: 50%;

          @media (max-width: 750px) {
            align-self: center;
            margin-bottom: 1.25em;
          }
        `}
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
