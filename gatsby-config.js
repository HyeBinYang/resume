module.exports = {
  siteMetadata: {
    title: `Robin's Portfolio page`,
    description: `This page is Robin's Portfolio page.`,
    author: `Robin`,
    about: {
      title: "안녕하세요 프론트엔드 개발자 양혜빈입니다.",
      content: `현재 스타트업에서 ${
        new Date().getFullYear() - 2021
      }년차 프론트엔드 개발자로 일하고 있으며, 회사가 운영하는 모든 서비스의 프론트엔드 개발을 하고있습니다.
      사용자에게 최고의 사용경험을 주기 위해 웹 성능을 향상시키는 방법과 문제의 근본을 좀 더 깊이 있게 분석하는 것을 좋아합니다.
      좋은 개발은 활발한 커뮤니케이션으로부터 나온다고 생각하기 때문에 적극적인 의견을 낼 수 있는 환경을 선호합니다.`,
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
    experiences: [
      {
        title: `약문약답`,
        content: `약사전용 커뮤니티 서비스 약문약답에서 서비스 전체적인 프론트엔드 개발, 유지보수를 맡고 있습니다. 스타트업 업무 특성상 빠르게 새로운 기능을 만들어서 유저의 반응을 분석하는 일을 최우선으로 합니다. 이를 위해 빠르게 개발하고 배포하는 역량과 User tracking 통해 얻은 데이터를 활용하여 유저를 이해하는 역량을 쌓아왔습니다.`,
        job: "프론트엔드 개발",
        period: "2022.01 ~ now",
        logo: "YMYD_Logo.png",
      },
    ],
    education: {
      university: "인천대학교",
      major: "전자공학과",
      minor: "컴퓨터공학과",
      period: "2014.03 ~ 2020.02",
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
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
