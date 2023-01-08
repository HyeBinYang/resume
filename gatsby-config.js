module.exports = {
  siteMetadata: {
    title: `프론트엔드 개발자 양혜빈 이력서`,
    description: `안녕하세요 프론트엔드 개발자 양혜빈입니다.`,
    author: `양혜빈`,
    favicon: "🧑🏻‍💻",
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
    projects: [
      {
        title: "약문약답 채용서비스",
        content:
          "병원 및 제약회사에서의 약사 채용을 위한 서비스를 개발했습니다. 초기 렌더링속도 향상과 SEO를 고려하여 SSR기반 프레임워크인 NextJS를 도입했고, 클라이언트에서 필요한 데이터와 서버에서 오는 데이터를 분리하기 위해 react-query를 도입했습니다.",
        period: "2022.09 ~ 2022.11",
        skills: ["Nextjs", "Redux", "React-query", "Styled-components"],
        href: "https://biz.ymyd.co.kr",
      },
      {
        title: "구인구직 서비스 UI/UX 리뉴얼 및 유지보수",
        content:
          "약국에서의 약사 채용을 위한 서비스인 구인구직 서비스를 전체적인 UI 개편 했습니다. 기존 구인구직 클래스 컴포넌트를 React hooks로 전환했습니다. 클라이언트에서 발생하는 에러 추적을 위해 에러 로그 수집 기능을 추가했습니다.",
        period: "2022.05 ~ 2022.09",
        skills: ["React", "Redux", "Styled-components"],
      },
      {
        title: "사내 디자인시스템 개발 및 유지보수",
        content:
          "프론트엔드 개발 생산성 향상을 위해 약문약답 서비스 대부분이 사용하는 React UI Component를 Atomic design pattern기반으로 사내 디자인시스템을 개발 및 유지보수하고 있습니다.",
        period: "2022.04 ~ 2022.05",
        skills: ["React", "Styled-components", "Storybook", "Rollup", "Github actions", "Github package"],
      },
      {
        title: "약국하이패스 Desktop App 개발 및 유지보수",
        content:
          "약국과 환자의 원격 처방 서비스인 약국하이패스(약국 설치용 프로그램)을 개발했습니다. 기본적인 유지보수를 비롯해 약사분들의 요구에 맞는 다양한 새로운 기능을 개발했습니다.",
        period: "2022.01 ~ 2022.05",
        skills: ["React", "MobX", "Styled-components", "Electron"],
        href: "https://www.pharmacyhipass.co.kr",
      },
    ],
    skills: [
      {
        skill: "HTML/CSS",
        contents: [
          "시맨틱 요소를 사용하기위해 많은 신경을 씁니다.",
          "Flexbox, Grid system, Responsive Web 을 이해하고 레이아웃을 구현할 수 있습니다.",
        ],
      },
      {
        skill: "Javascript",
        contents: [
          "클로저, 호이스팅 등 코어 자바스크립트의 개념들을 이해하고 있습니다.",
          "ES6+ 문법 사용에 능숙합니다.",
        ],
      },
      {
        skill: "Typescript",
        contents: [
          "기본적인 개념 (interface, enum, 제네릭 등)을 이해하고 있고, 이를 이용해 프로젝트에 적용할 수 있습니다.",
        ],
      },
      {
        skill: "React",
        contents: [
          "React hooks를 능숙하게 사용합니다.",
          "컴포넌트 라이프 사이클을 정확하게 이해하고 있습니다.",
          "React를 이용해 Web application 개발 경험이 있습니다.",
        ],
      },
      {
        skill: "NextJS",
        contents: [
          "Data fetching, image 최적화, routing 등을 이해하고 있고, 이를 이용해 프로젝트에서 활용할 수 있습니다.",
          "NextJS를 이용해 Web application 개발 경험이 있습니다.",
        ],
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
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Nanum+Gothic\:100,300,400,500,700,900`],
        display: "swap",
      },
    },
    `gatsby-plugin-emotion`,
  ],
};
