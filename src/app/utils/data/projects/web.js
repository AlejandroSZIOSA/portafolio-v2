import testImg2 from "/public/images/web-projects/cardImg.png";

//LINK TO THE PROJECTS IN VERSEL SERVER
const WEB_APP1 = "https://next-todolist-redux.vercel.app/";
const WEB_APP2 = "https://radio-player-app-chi.vercel.app/";
const WEB_APP3 = "https://clock-app-peach.vercel.app/";
const WEB4 = "https://next-todolist-redux.vercel.app/";
const WEB5 = "https://next-todolist-redux.vercel.app/";
const WEB6 = "https://next-todolist-redux.vercel.app/";

export const WEB_DATA_PROJECTS = [
  {
    id: 1,
    date: "",
    imgUrl: testImg2,
    title: "Todo-App .v2",
    description: "This Application manages activities.",
    category: "web",
    mainObjective: "Redux Implementation",
    language: "Javascript",
    framework: "React-Next.js",
    linkToApp: WEB_APP1,
    linkToBackend: "",
    gitHubLink: "g1",
    isOld: false,
  },
  {
    id: 2,
    date: "",
    imgUrl: testImg2,
    title: "Radio Player",
    description: "Connect and shows different Swedish radio streaming.",
    category: "web",
    mainObjective: "Fetch data from a public API",
    language: "Javascript",
    framework: "React-Vite",
    linkToApp: WEB_APP2,
    linkToBackend: "",
    gitHubLink: "g2",
    isOld: true,
  },
  {
    id: 3,
    date: "",
    imgUrl: testImg2,
    title: "Clock-App",
    description: "Shows some clocks from different locations+Timers.",
    category: "web",
    mainObjective: "Fetch data from a public API",
    language: "Javascript, Html, Css",
    framework: "Vanilla",
    linkToApp: WEB_APP3,
    linkToBackend: "",
    gitHubLink: "g3",
    isOld: true,
  },
];
