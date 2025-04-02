
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  postgresql,
  project3,
  excel,
  mysql,
  powerbi,
  python,
  git,

} from '../assets'


// Import Aura separately
import Aura from "../assets/company/Aura.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python",
    icon: web,
  },
  {
    title: "SQL",
    icon: mobile,
  },
  {
    title: "Power BI",
    icon: backend,
  },
  {
    title: "Excel",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SQL",
    icon: mysql,
  },
  {
    name: "Power BI",
    icon: powerbi,
  },
  {
    name: "Excel",
    icon: excel,
  },
  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Data Analyst Intern",
    company_name: "Deloitte",
    icon: Aura,
    iconBg: "#383E56",
    date: "March 2025",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Implemented speech recognition to convert voice commands into actions.",
      "Automated system tasks like opening applications, searching the web, and managing files.",
      "Used text-to-speech (TTS) to generate human-like responses.",
    ],
  },
];


const projects = [
  {
    name: "Aura - AI Personal Assistant",
    description:
      "An AI assistant which executes voice commands, automate tasks, and fetch real-time data.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Speech Recognition",
        color: "white-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "pink-text-gradient",
      },
      {
        name: "Text-to-Speech",
        color: "green-text-gradient",
      },
 
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
