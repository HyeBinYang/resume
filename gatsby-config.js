module.exports = {
  siteMetadata: {
    title: `Robin's Portfolio page`,
    description: `This page is Robin's Portfolio page.`,
    author: `Robin`,
    about: {
      title: "안녕하세요 프론트엔드 개발자 양혜빈입니다.",
      content: `${new Date().getFullYear() - 2022 + 1}년차 프론트엔드 개발자입니다.
      현재 스타트업에서 회사가 운영하는 서비스 전체의 프론트엔드 개발을 책임지고 있습니다.
      새로운 기술 학습에도 관심이 많지만 서비스의 성능 향상시키는 방법과 문제의 근본을 좀 더 깊이 있게 분석하는 것을 더 좋아하는 편입니다.
      스타트업 업무 특성상 빠르게 새로운 기능을 만들어서 유저의 반응을 분석하는 일을 최우선으로 하고 있습니다.
      이를 위해 요구사항을 빠르게 개발하는 역량과 User tracking 통해 얻은 데이터를 활용하여 유저의 패턴을 이해하는 역량을 쌓아왔습니다.`,
      contacts: [
        {
          title: "email",
          href: "skdisk7368@gmail.com",
        },
        {
          title: "github",
          href: "https://github.com/HyeBinYang",
        },
        {
          title: "phone",
          href: "010-9080-7368",
        },
      ],
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    `gatsby-plugin-emotion`,
  ],
};
