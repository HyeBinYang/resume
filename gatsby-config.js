module.exports = {
  siteMetadata: {
    title: `프론트엔드 개발자 양혜빈 이력서`,
    description: `안녕하세요 프론트엔드 개발자 양혜빈입니다.`,
    author: `양혜빈`,
    favicon: "🧑🏻‍💻",
    about: {
      title: "안녕하세요 프론트엔드 개발자 양혜빈입니다.",
      content: `5명 규모의 스타트업에서 혼자서 서비스의 전체적인 프론트엔드 개발, 운영한 경험이 있습니다.
        이러한 경험을 통해 다양한 직군과의 협업 능력 길렀고, 주어진 요구사항, 디자인을 토대로 빠르게 개발하여 프로덕션을 완성시키는 역량을 길렀습니다.
        어렸을 때부터 주어진 문제에 대해 논리적으로 해결하는 것을 좋아하고 해결한 순간의 쾌감이 좋아서 개발자가 되기로 결심을 했습니다.
        많은 실패를 통해서 성장을 함으로써 웹 개발의 정점을 찍는 것이 저의 목표입니다.
        최근에는 공부한 내용을 잊지않으려고 블로그에 기록하면서 다른 개발자들에게 공유하고 있습니다.`,
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
        {
          title: "blog",
          href: "https://hyebinyang.github.io/",
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
          "빠른 메인 컨텐츠 렌더링과 SEO를 고려하여 NextJS를 사용",
          "boilerplate 코드의 감소와 서버의 데이터와 클라이언트의 데이터 구분의 모호함을 해결하기 위해 react-query 라이브러리 사용",
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
          "클래스 컴포넌트를 함수 컴포넌트로 전환",
          "클라이언트에서의 발생하는 에러를 추적하기 위해 Amplitude를 사용해 에러 로그 수집",
        ],
        period: "2022.05 ~ 2022.09",
        skills: ["React", "Redux", "Styled-components"],
      },
      {
        title: "사내 디자인시스템 개발 및 유지보수",
        company: "약문약답",
        contents: [
          "서비스 개발에 사용되는 공통 UI 컴포넌트를 만든 사내 디자인시스템",
          "Github actions를 사용해 패키지 빌드 테스트 및 배포 자동화",
          "Storybook을 사용해 UI 컴포넌트 문서 작성",
          "디자이너와의 지속적인 커뮤니케이션을 통해 UI 컴포넌트의 유연함과 엄격함사이의 밸런스를 유지하려고 노력함",
        ],
        period: "2022.04 ~ 2023.01",
        skills: ["React", "Styled-components", "Storybook", "Rollup", "Github actions", "Github package"],
      },
      {
        title: "약국하이패스 Desktop App 개발 및 유지보수",
        company: "약문약답",
        contents: [
          "약국과 환자의 원격 처방 서비스",
          "React, Electron 등을 사용해 약국용 Desktop App 개발",
          "프로덕션 환경일 때 호스팅 된 URL를 불러오도록 함으로써 UI 수정시 유저가 App 전체에 대한 update 작업을 해야하는 문제를 개선",
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
        contents: ["웹 접근성을 고려한 HTML을 작성할 수 있습니다.", "CSS의 문법들을 이해하고 적용할 수 있습니다."],
      },
      {
        skill: "Javascript",
        contents: ["자바스크립트 기본 문법들을 이해하고 있습니다.", "ES6 문법들을 이해하고 활용할 수 있습니다."],
      },
      {
        skill: "Typescript",
        contents: ["자바스크립트 코드에 의도치 않는 동작이 발생할 수 있는 부분에 Typescript를 적용시킬 수 있습니다."],
      },
      {
        skill: "React",
        contents: [
          "React hook을 언제 사용해야하는지에 대해 이해하고 활용할 수 있습니다.",
          "React 컴포넌트의 라이프사이클을 이해하고 있습니다.",
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
