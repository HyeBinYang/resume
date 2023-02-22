module.exports = {
  siteMetadata: {
    title: `프론트엔드 개발자 양혜빈 이력서`,
    description: `안녕하세요 프론트엔드 개발자 양혜빈입니다.`,
    author: `양혜빈`,
    favicon: "🧑🏻‍💻",
    about: {
      title: "안녕하세요 프론트엔드 개발자 양혜빈입니다.",
      content: `5명 규모의 스타트업에서 React, Git, Redux, React-query, NextJS 등을 사용하여 서비스를 개발, 운영한 경험이 있습니다.
        이러한 경험을 통해 다양한 직군과의 커뮤니케이션의 중요성을 깨달았고, 주어진 요구사항, 디자인을 이해해서 빠르고 정확하게 개발하여 프로덕션을 완성시키는 역량을 길렀습니다.
        저의 궁극적인 목표는 웹 개발의 정점을 찍는것이며, 목표를 이루기 위해 관련 서적, 온라인 컨퍼런스 영상, 프론트엔드 기술 블로그를 읽고 학습하고 노션에 기록하고 있습니다.
        문제 해결과 좋은 서비스 발전은 활발한 커뮤니케이션으로부터 나온다고 생각하기 때문에 적극적으로 커뮤니케이션을 통해 팀원들의 좋은 생각은 학습하고 저의 좋은 생각을 팀원들에게 공유하는 것을 좋아합니다.`,
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
        contents: [
          "약문약답 앱 UI 개선",
          "'약국하이패스 Desktop App' 프론트엔드 개발 및 유지보수",
          "'약문약답 앱 구인구직 서비스' 프론트엔드 개발 및 유지보수",
          "'기업용 약사 채용 서비스' 프론트엔드 개발",
        ],
        job: "프론트엔드 개발",
        period: "2022.01 ~ 2023.01",
        logo: "YMYD_Logo.png",
      },
      {
        title: `솔루게이트`,
        contents: ["제주도 인공지능 민원서식 작성 도우미 서비스 개발"],
        job: "개발",
        period: "2020.09 ~ 2021.03",
      },
    ],
    projects: [
      {
        title: "기업용 약사 채용 서비스 개발",
        company: "약문약답",
        contents: [
          "병원 및 제약회사에서의 약사 채용을 위한 서비스",
          "NextJS를 사용하여 서비스 개발",
          "react-query를 사용해 클라이언트에서 필요한 데이터와 서버에서 받아오는 데이터를 분리",
        ],
        period: "2022.09 ~ 2022.11",
        skills: ["Nextjs", "Redux", "React-query", "Styled-components"],
        href: "https://biz.ymyd.co.kr",
      },
      {
        title: "구인구직 서비스 UI 개선 / 유지보수 운영",
        company: "약문약답",
        contents: [
          "약국에서의 약사 채용을 위한 서비스",
          "기존 클래스 컴포넌트를 React hooks로 전환",
          "클라이언트에서의 발생하는 에러를 추적하기 위해 에러 로그 수집 시스템 도입",
          "개선 후 구인구직 이용률 향상",
        ],
        period: "2022.05 ~ 2022.09",
        skills: ["React", "Redux", "Styled-components"],
      },
      {
        title: "사내 디자인시스템 개발 및 유지보수",
        company: "약문약답",
        contents: [
          "서비스 개발에 사용되는 공통 UI 컴포넌트를 Atomic design pattern 기반으로 만든 사내 디자인시스템",
          "github actions를 사용해 CI/CD 구축한 경험을 함",
          "storybook을 사용해 UI 테스트 도입",
          "이러한 경험으로 디자이너와의 커뮤니케이션의 중요성을 깨닫게 됨",
        ],
        period: "2022.04 ~ 2023.01",
        skills: ["React", "Styled-components", "Storybook", "Rollup", "Github actions", "Github package"],
      },
      {
        title: "약국하이패스 Desktop App 개발 및 유지보수",
        company: "약문약답",
        contents: [
          "약국과 환자의 원격 처방 서비스",
          "React, Electron, MobX, Firebase 등을 사용해 서비스 개발",
          "UI 수정시 유저에게 빠르게 반영을 하기위해 production 환경일 때 호스팅 된 URL를 불러오도록 함",
          "사용 유저의 컴플레인을 직접 받고 처리하는 일을 경험",
        ],
        period: "2022.01 ~ 2022.05",
        skills: ["React", "MobX", "Styled-components", "Electron", "Firebase"],
        href: "https://www.pharmacyhipass.co.kr",
      },
      {
        title: "제주도 인공지능 민원서식 작성 도우미 서비스 개발",
        company: "솔루게이트",
        contents: ["서식 작성 페이지 개발", "15종 민원서식에 대한 XML 파일 작성"],
        period: "2020.10 ~ 2021.01",
      },
    ],
    skills: [
      {
        skill: "HTML/CSS",
        contents: [
          "웹 접근성을 고려한 HTML을 작성할 수 있습니다.",
          "반응형 웹을 구현할 수 있습니다.",
          "Flexbox, Grid system 이해하고 이를 이용해 레이아웃을 구현할 수 있습니다.",
        ],
      },
      {
        skill: "Javascript",
        contents: [
          "프로토타입, 클로저, 비동기 처리 방식 등 코어 자바스크립트의 개념들을 이해하고 있습니다.",
          "ES6+ 문법 사용에 능숙하고 회사 프로젝트에 적용시킨 경험이 있습니다.",
        ],
      },
      {
        skill: "Typescript",
        contents: [
          "기본적인 개념 (interface, enum, 제네릭 등)을 이해하고 있습니다.",
          "Typescript를 사용해 서비스 개발 경험이 있습니다.",
        ],
      },
      {
        skill: "React",
        contents: [
          "React hooks의 기본 동작 원리를 이해하고 능숙하게 사용합니다.",
          "컴포넌트 라이프 사이클을 정확하게 이해하고 있습니다.",
          "React를 사용해 서비스 개발 경험이 있습니다.",
        ],
      },
      {
        skill: "NextJS",
        contents: [
          "기본적인 지식(Data fetching, image 최적화, routing 등)을 이해하고 있습니다.",
          "NextJS를 사용해 서비스 개발 경험이 있습니다.",
        ],
      },
    ],
    educations: [
      {
        title: "삼성 청년 소프트웨어 아카데미 (SSAFY) 수료",
        period: "2020.01 ~ 2020.09",
      },
      {
        title: "인천대학교 졸업",
        description: "전자공학과(주전공), 컴퓨터공학과(부전공)",
        period: "2014.03 ~ 2020.02",
      },
    ],
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
