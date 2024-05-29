import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "MLOps",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Data Science Intern",
    company_name: "Grameen Communications",
    icon: microverse,
    iconBg: "#333333",
    date: "June 2023 - October 2022",
  },
  {
    title: "Content Writer",
    company_name: "Assignoholic Research and Consultancy",
    icon: kelhel,
    iconBg: "#333333",
    date: "June 2022 - June 2023",
  },
  {
    title: "Content Writer",
    company_name: "Porikolpona Foundation",
    icon: dcc,
    iconBg: "#333333",
    date: "Jan 2021 - Present",
  },
];

const projects = [
  {
    id: "project-1",
    name: "G-Moina",
    description: "A chatbot with mega agent architecture, to cater to the generalized needs of Grameen Bank and their subsidiaries.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: komikult,
    repo: "https://github.com/shaqdeff/KomiKult",
    demo: "https://bot.dialogflow.com/b2ba0bce-2f3d-4666-a8e5-1c474baf8d80",
  },
  {
    id: "project-2",
    name: "GC-BOT",
    description: "A chatbot geared towards the MFI operations of Grameen Bank.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: leaderboard,
    repo: "https://github.com/shaqdeff/Leaderboard",
    demo: "https://grameen.technology/",
  },
  {
    id: "project-3",
    name: "Maybe I am a Monster",
    description: "A game framework to create 2D RPG games.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: math,
    repo: "https://github.com/Team-Miaam/IUTPokemonPilotGame",
    demo: "https://miaam-demo.netlify.app/",
  },
  {
    id: "project-4",
    name: "Stock Price prediction",
    description: `An LSTM model running and checking to predict the future stockprice of Apple, Google and Tesla.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    repo: "https://github.com/AbrarBorger/MLProject-Stock-Price-Prediction/tree/main",
    demo: "",
  },
];

export { services, technologies, experiences, projects };
