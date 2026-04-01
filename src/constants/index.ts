import {
  mobile,
  backend,
  ubi,
  sen,
  assec,
  code,
  creator,
  web,
  javascript,
  py,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  bootstrap,
  figma,
  reactNative,
  humanBodyPose,
  thisPortfolio,
  hangman,
  vue,
  next,
  blog,
  newZealand,
  ptFlag,
} from "../assets"

export const navLinks = [
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

const services = [
  {
    title: "React Native",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "CMS Integration",
    icon: backend,
  },
  {
    title: "Responsive",
    icon: creator,
  },
]

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
    name: "Python",
    icon: py,
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
    name: "React Native",
    icon: reactNative,
  },
  {
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
]

const experiences = [
  {
    title: "Full Stack Developer & Founder (Startup Voucher)",
    company_name: "Linca | IAPMEI",
    icon: ptFlag,
    iconBg: "#E6DEDD",
    date: "Oct 2025 - June 2026 (Present)",
    points: [
      "Awarded the Startup Voucher by IAPMEI to lead the development of Linca, an integrated ecosystem for national-scale services, products, and events.",
      "Architecting and deploying a full-stack marketplace application, focusing on high-availability servers and scalable cloud infrastructure.",
      "Implementing comprehensive social media management tools and automation to drive digital visibility for local businesses.",
      "Managing the end-to-end product lifecycle, from initial MVP validation to final deployment and market entry strategies.",
    ],
  },
  {
    title: "Social Media Management and Digital Design",
    company_name: "Linca",
    icon: figma,
    iconBg: "#E6DEDD",
    date: "July 2025 - Aug 2025",
    points: [
      "Managed digital presence and social media strategy, focusing on high-quality visual content and audience engagement.",
      "Utilized Figma for UI/UX prototyping and creating modern, responsive social media layouts.",
      "Mastered Inkscape for vector graphic creation, ensuring scalable and professional branding assets.",
      "Bridged the gap between design and technical execution, aligning visual identity with the project's digital goals.",
    ],
  },
  {
    title: "Open Source Contributions during Travel",
    company_name: "New Zealand",
    icon: newZealand,
    iconBg: "#E6DEDD",
    date: " Mar 2025 - May 2025",
    points: [
      "Traveled across New Zealand while maintaining a self-directed learning schedule focused on web technologies.",
      "Contributed to open source projects on GitHub.",
      "Strengthened adaptability, autonomy, and technical skills through immersive learning in a new cultural and geographic environment.",
      "Balanced personal exploration and professional growth.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Assec Sim",
    icon: assec,
    iconBg: "#E6DEDD",
    date: "Jul 2024 - Feb 2025",
    points: [
      "Developing and maintaining web and mobile applications using React Native and Bootstrap.",
      "Collaborating with cross-functional teams including designers, product managers and other developers.",
      "Implementing responsive design, ensuring cross-browser compatibility, unit testing, ERP (Enterprise Resource Planning) and CRM (Customer Relationship Managment).",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "UI/UX Design.",
    ],
  },
  {
    title: "Recognition of Merit",
    company_name: "Universidade da Beira Interior",
    icon: ubi,
    iconBg: "#E6DEDD",
    date: "15 May 2024",
    points: ["Dissertation in Sports Sciences - 18/20"],
  },
  {
    title: "Software Engineer",
    company_name: "SensoMatt",
    icon: sen,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - May 2024",
    points: [
      "Use Python to detect and analyze the COCO and MPII datasets, extracting images with keypoint annotations of humans in various poses and everyday activities.",
      "Compare and analyze both models in terms of precision and accuracy using metrics such as percentage error (PE), percentage of correct keypoints (PCK), mean per-joint position error (MPJPE), as well as processing time and speed.",
      "Carry out research and a comparative analysis of the company's competing products, classifying them according to their specific characteristics.",
    ],
  },
  {
    title: "Self-taught: My journey into programming",
    company_name: "By myself",
    icon: code,
    iconBg: "#E6DEDD",
    date: "Dec 2022",
    points: [
      "During the stages of my Master's thesis in Sports Science, I developed a strong interest in Computer Science. After completing my thesis in March 2023, I delved more deeply into a self-taught journey in the world of programming.",
      "I started by building several small, undocumented projects in JavaScript to explore fundamental concepts, such as math and tax calculators. This hands-on approach gave me a solid foundation in programming logic. Later, I shifted my focus to frontend development, creating classic projects like a To-Do List, a Hangman Game, and more.",
      "A few months into my journey, I began learning React with TypeScript. I applied these skills by developing an e-commerce application using a placeholder backend API, as well as building my own portfolio.",
      "Now, I'm working in my second position within the tech industry.",
    ],
  },
  {
    title: "Master's Degree in Sports Science",
    company_name: "University of Beira Interior (UBI)",
    icon: ubi,
    iconBg: "#E6DEDD",
    date: "Sept 2021 - March 2023",
    points: [
      "Completed Master's degree with final grade of 17/20.",
      "Developed advanced analytical skills and research methodologies during my thesis, which served as the catalyst for my interest in data and computing.",
      "Balanced high-level academic research with the beginning of my transition into the technology sector.",
    ],
  },
]

const projects = [
  {
    name: "Body Pose Detection",
    description:
      "I track an athlete's body by identifying key reference points. This allows me to analyze movement metrics and make adjustments to enhance sports training.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "NumPy",
        color: "pink-text-gradient",
      },
    ],
    media: humanBodyPose,
    source_code_link: "https://github.com/0xn0va/body-pose-detection",
    live_demo_link: "https://github.com/0xn0va/body-pose-detection",
  },
  {
    name: "Blog Application",
    description: " Build a blog application compatible with IPFS, with Next.js framework for server-side rendering and static site generation.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    media: blog,
    source_code_link: "https://github.com/0xn0va/blog-app",
    live_demo_link: "https://blog-app-brp99s-projects.vercel.app/",
  },
  {
    name: "This Portfolio",
    description:
      "This portfolio is a testament to my learning, growth, and passion for development, where each line of code represents a discovery and the implementation of new technologies and approaches.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    media: thisPortfolio,
    source_code_link: "https://github.com/0xn0va/portfolio",
    live_demo_link: "https://0xn0va.github.io/portfolio/",
  },
  {
    name: "Hangman Game",
    description:
      "This was one of my first projects! I created it to practice handling events, work with DOM manipulation, and learn to break down problems into smaller parts. ",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
    ],
    media: hangman,
    source_code_link: "https://github.com/0xn0va/hangman2",
    live_demo_link: "https://hangman2-six.vercel.app/",
  },
]

export { services, technologies, experiences, projects }
