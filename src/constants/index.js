
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  cascadess,
  project3,
  javascript,
  mysql,
  html,
  python,
  Java,
  git,

} from '../assets'


// Import Rexiz separately
import Rexiz from "../assets/company/Rexiz.png";
import Bank from "../assets/company/Bank.png";
import PySQL from "../assets/company/PySQL.png";
import Heal from "../assets/company/Heal.png";
import KodNest from "../assets/company/KodNest.png";
import OPC from "../assets/company/OPC.jpeg";
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
    title: "Java",
    icon: web,
  },
  {
    title: "SQL",
    icon: mobile,
  },
  {
    title: "HTML",
    icon: backend,
  },
  {
    title: "CSS",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: Java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SQL",
    icon: mysql,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    title: "CSS",
    icon: cascadess,
  },
  {
    name: "JS",
    icon: javascript,
  },
  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Java Full Stack Developer Intern",
    company_name: "KodNest Technologies",
    icon: KodNest,
    iconBg: "#383E56",
    date: "August 2025",
    points: [
      "Strengthened problem-solving and debugging skills through coding assignments, peer reviews, and real-time project simulations, preparing for full-stack development roles.",
      "Collaborated with a team of developers to design and implement new features for web applications, ensuring optimal performance and user experience.",
    ],
  },
  {
    title: "Data Analyst Intern",
    company_name: "Heal Bharat AICTE",
    icon: Heal,
    iconBg: "#383E56",
    date: "June 2025",
    points: [
      "Performed exploratory data analysis using Python libraries to identify 3 top-selling products (20% of SKUs contributed to 65% of revenue) and customer behavior, enabling data-driven inventory and marketing decisions using the Software Development Life Cycle (SDLC).",
      "Researched HIPAA and DISHA compliance standards and created a detailed audit framework, including system flowchart, threat checklist, and 15+ security recommendations; delivered high-quality technical documentation for secure data handling in clinical systems.", 
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Operate Live Pvt.Ltd",
    icon: OPC,
    iconBg: "#383E56",
    date: "May 2023",
    points: [
      "Conducted QA testing on 50+ product features and documented 25+ unique bugs, accelerating issue resolution by 20% during development contributed to test automation framework enhancements and ensured test coverage.",
      "Improved page loading speed and layout responsiveness by 30% through coordination with design and backend teams, integrating object-oriented programming (OOP) concepts and SDLC phases from design to deployment.", 
    ],
  },
];


const projects = [
  {
    name: "TransactPro Engine",
    Description: [
      "Built a Java-based multi-threaded application that simulates a bank’s backoffice system to process large volumes of transactions in parallel.",
      "Implemented concurrency, error handling, and data integrity checks to ensure reliability, and used Java 8 Streams for fast data analysis and reporting."
    ],
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Exception Handling",
        color: "white-text-gradient",
      },
      {
        name: "Collections Framework",
        color: "pink-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
  
    ],
    image: Bank,
    source_code_link: "https://github.com/MohdHamizK/TransactPro_Financial_File_Analyzer",
  },
  {
    name: "Data-Warehouse-PySQL-AutoConnect",
    Description: [
      "A modular Python-based system for refreshing materialized views, querying sales data, and sending automated reports via email.",
      "This automation streamlines data management, reduces manual effort, and empowers our team with real-time access to crucial sales information, ultimately driving better decision-making."
      ],
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "white-text-gradient",
      },
      {
        name: "Gmail SMTP",
        color: "pink-text-gradient",
      },
      {
        name: "Draw.io ERD",
        color: "green-text-gradient",
      },
    ],
      image: PySQL,
      source_code_link: "https://github.com/MohdHamizK/Data-Warehouse-PySQL-AutoConnect",
    },
  {
    name: "Rexiz - AI Agent",
    Description: [
      "An AI assistant which executes voice commands, automate tasks, and fetch real-time data.",
      "Implemented speech recognition to convert voice commands into actions."],
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
    image: Rexiz,
    source_code_link: "https://github.com/MohdHamizK/Rexiz-AI/blob/main/Rexiz.png",
  },
];

export { services, technologies, experiences, projects };
