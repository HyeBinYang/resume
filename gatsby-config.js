module.exports = {
  siteMetadata: {
    title: `Robin's Portfolio page`,
    description: `This page is Robin's Portfolio page.`,
    author: `Robin`,
    about: {
      title: "안녕하세요 프론트엔드 개발자 양혜빈입니다.",
      content: `${
        new Date().getFullYear() - 2022
      }년차 개발자로 현재 스타트업에서 작은 규모의 팀에 첫 번째 개발자로 입사하여 웹과 앱 서비스를 프론트엔드 개발 하고있습니다. 회사가 성장하기 위해 디자이너, PO, 백엔드 개발자와 소통하면서 회사의 모든 프론트엔드 개발을 책임지는 경험을 하고 있습니다.
      스타트업 업무 특성상 빠르게 새로운 기능을 만들어서 유저의 반응을 분석하는 일을 최우선으로 합니다. 
      이를 위해 빠르게 개발하고 배포하는 역량과 User tracking 통해 얻은 데이터를 활용하여 유저를 이해하는 역량을 쌓고자 노력하고 있습니다.`,
      email: "skdisk7368@gmail.com",
      github: "https://github.com/HyeBinYang",
      phone: "010-9080-7368",
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
