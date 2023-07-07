import {
  mobile,
  github2,
  frontend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  routerdom,
  axios,
  mui,
  vite,
  netcore,
  csharp,
  jwt,
  postgresql,
  apache,
  aws,
  rec1,
  rec2,
  rec3
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "contact",
    title: "Contact",
  }, 
  {
    id: "projects",
    title: "Projects"
  }
];

const services = [
  {
    title: "Frontend",
    icon: frontend,
    stack: [
      {
      name:"React",
      icon: reactjs
      },
      {
      name: "Vite",
      icon: vite
      },
      {
      name: "Typescript",
      icon: typescript
      },
      {
        name: "Axios",
        icon: axios
      },
      {
        name: "Tailwind CSS",
        icon: tailwind
      },
      {
        name: "Material UI",
        icon: mui
      },
      {
        name: "Redux Toolkit",
        icon: redux
      },
      {
        name: "Router DOM",
        icon: routerdom
      }

    ]
  },
  {
    title: "Backend",
    icon: mobile,
    stack: [
      {
      name:".NET Core",
      icon: netcore
      },
      {
      name: ".ASP.NET Core",
      icon: netcore
      },
      {
      name: "C#",
      icon: csharp
      },
      {
        name: "Entity",
        icon: netcore
      },
      {
        name: "PostgreSQL",
        icon: postgresql
      },
      {
        name: "JWT",
        icon: jwt
      },
      {
        name: "AWS",
        icon: aws
      },
      {
        name: "Apache",
        icon: apache
      }

    ]
  }
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
    name: "Redux Toolkit",
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
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

const certificates = [
  {
    title: "HTML and CSS in depth",
    company_name: "Meta / Coursera",
    icon: html,
    iconBg: "#383E56",
    date: "Sept 2022 - Oct 2022",
    points: [
      "Creating responsive UI designs.",
      "Designing peer rated projects.",
      "Studying the fundamentals of viewports, layout shifts and transformations.",
      "Practicing the usage of advanced CSS pseudo-selectors.",
      "Practicing the usage of semantic tags for improved code readability",
      "Testing and debugging.",
    ],
    link: "https://coursera.org/share/d92ee3ab68deea96d30c4011db23e198"
  },
  {
    title: "Coding with Javascript",
    company_name: "Meta / Coursera",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "Sept 2022 - Oct 2022",
    points: [
      "Fundamentals of object oriented programming.",
      "Object and array manipulation.",
      "Using Javascript in conjunction with html/css to create dynamic interfaces.",
      "Class instances.",
      "Unit testing with Jest.",
    ],
    link:"https://coursera.org/share/59d1604a0068a0920fc8f8433b147317"
  },
  {
    title: "Advanced React",
    company_name: "Meta / Coursera",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Oct 2022 - Nov 2022",
    points: [
      "Implementation of global state solutions.",
      "Higher order components.",
      "Advanced local state with objects, arrays and arrays of objects.",
      "Side effects and dependencies.",
      "Principles of useMemo and useCallback.",
      "Asynchronous api calls.",
      "Unit testing with Jest/Enzyme."
    ],
    link: "https://coursera.org/share/f7f2bfaf1a573d89ded4000a79159bc9"
  },
  {
    title: "Version Control",
    company_name: "Meta / Coursera",
    icon: github2,
    iconBg: "#E6DEDD", 
    date: "Oct 2022 - Nov 2022", 
    points: [
      "Creating github repos and branches.",
      "Committing changes, pushing, pulling and merging.",
      "Using Linux CLI.",
      "Creating a CI / CD pipeline.",
      "Creating webhooks and adding triggers.",
      "Revising code."
    ],
    link: "https://coursera.org/share/8200779c23c91751b469fe621b568491"
  },
];

const references = [
  {
    pic: rec1
  },
  {
    pic: rec2
  },
  {
    pic: rec3
  }
];


export { services, technologies, certificates, references };
