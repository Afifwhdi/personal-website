import { NavbarItem, SocialMedia, Activity, Project } from "@/types/types";

export const navbarItems: NavbarItem[] = [
  {
    label: "Work Experience",
    href: "#experiences",
  },
  {
    label: "Activities",
    href: "#activities",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
  // {
  //   label: "Blog",
  //   href: "/blog",
  // },
];

export const socialMedia: SocialMedia[] = [
  {
    icon: "/icons/icons8-instagram.svg",
    href: "https://instagram.com/afifwhdi_",
  },
  {
    icon: "/icons/icons8-dribble.svg",
    href: "https://dribbble.com/",
  },
  {
    icon: "/icons/ic_linkedin.svg",
    href: "https://dribbble.com/",
  },
  //{
  //icon: "/icons/icons8-behance.svg",
  //href: "https://dribbble.com/",
  //},
];

export const workExperience: Activity[] = [
  {
    id: 0,
    logo: "/icons/Logo_Unilever.png",
    company_name: "Unilever",
    company_url: "https://www.unilever.co.id/",
    title: "Graphic Design",
    period: "Aug 2024 - Present",
    tech_stacks: ["Figma", "Photoshop"],
    responsibilities: [
      "Collaborated with the marketing team to design product packaging and promotional materials aligned with brand guidelines.",
      "Created visual assets including banners, brochures, and social media content for product launches.",
      "Contributed to product mockups and prototypes for internal presentation and external stakeholders.",
    ],
  },
  {
    id: 1,
    logo: "/icons/Logo_Digital4nation.png",
    company_name: "Digital4Nations",
    company_url: "https://digital4nation.com/",
    title: "Graphic Design Social Media",
    period: "Mar 2024 - Mei 2024",
    tech_stacks: ["Figma", "Photoshop"],
    responsibilities: [
      "Designed social media content to increase engagement and brand visibility.",
      "Developed brand identity elements such as logo, color palette, and typography.",
      "Assisted in creating presentations and pitch decks for clients.",
    ],
  },
  {
    id: 2,
    logo: "/icons/Logo_Rise.png",
    company_name: "harisenin.official",
    company_url: "https://www.harisenin.com/",
    title: "Graphic Design Social Media",
    period: "Jun 2024 - Mar 2024",
    tech_stacks: ["Figma"],
    responsibilities: [
      "Created consistent and creative templates for Instagram and LinkedIn posts.",
      "Worked closely with the content team to ensure the visual strategy matched the tone and message.",
      "Maintained a clean, modern, and youth-oriented design style across all posts.",
    ],
  },
  // {
  //   id: 3,
  //   logo: "/icons/ic_kodingna.png",
  //   company_name: "Kodingna",
  //   title: "Frontend Web Developer",
  //   period: "Aug 2022 - Dec 2022",
  //   tech_stacks: ["JavaScript", "React", "Tailwind", "Figma", "Agile Methodology"],
  //   responsibilities: [
  //     "Designed and Developed a company profile website.",
  //     "Wrote clean and maintainable code following best practices and coding standards.",
  //   ],
  // },
];

export const activities: Activity[] = [
  // {
  //   id: 0,
  //   logo: "/icons/ic_bearmentor.png",
  //   company_name: "Bearmentor",
  //   title: "Frontend Mentor",
  //   period: "Jun 2024 - Present",
  // },
  {
    id: 1,
    logo: "/icons/Logo_KM.png",
    company_name: "Kampus Mengajar 7",
    title: "Social Media Graphic Designer",
    period: "Jan 2024 - Mart 2024",
  },
  {
    id: 2,
    logo: "/icons/Logo_Hima.png",
    company_name: "Hima Sistem Informasi",
    title: "Kominfo Team",
    period: "Jan 2023 - Sep 2024",
  },
  // {
  //   id: 3,
  //   logo: "/icons/ic_bangkit.png",
  //   company_name: "Bangkit Academy",
  //   title: "Cloud Computing Path",
  //   period: "Feb 2022 - Jul 2022",
  // },
  // {
  //   id: 4,
  //   logo: "/icons/ic_programming-tadulako.png",
  //   company_name: "Programming Tadulako",
  //   title: "Web Development Mentor",
  //   period: "Nov 2021 - Nov 2022",
  // },
];

export const projects: Project[] = [
  {
    id: 0,
    thumbnail: "/images/daily-course.png",
    name: "Daily Course",
    summary:
      "Daily Course is a learning platform for those who want to learn about technologies in a fun and chill way.",
    tech_stacks: [
      "TypeScript",
      "Go",
      "Echo",
      "NextJS",
      "Cloud Build",
      "Cloud Run",
      "CI/CD",
      "Docker",
      "Tailwind",
      "PostgreSQL",
    ],
  },
  {
    id: 1,
    thumbnail: "/images/village-web.png",
    name: "Website Desa",
    summary: "A platform designed for villages to create and customize their landing page websites.",
    tech_stacks: ["React", "Laravel", "Tailwind", "Ant Design", "Zustand", "MySQL", "VPS"],
  },
  {
    id: 2,
    thumbnail: "/images/impact-palu.png",
    name: "Impact Palu",
    summary: "Impact Palu is a social entrepreneurship incubator based in Palu.",
    tech_stacks: ["TypeScript", "Vite", "React", "Tailwind", "Shadcn UI"],
  },
  {
    id: 3,
    thumbnail: "/images/hrev.png",
    name: "HREV",
    summary: "HREV is a software house specializing in software development and IT services",
    tech_stacks: ["Typescript", "React", "Vite", "Tailwind"],
  },
  // {
  //   id: 4,
  //   thumbnail: "/images/badonordarah.png",
  //   name: "Badonordarah",
  //   summary: "Facilitate blood donation and assist those in need of blood in Palu city.",
  //   tech_stacks: ["React", "Vite", "Tailwind", "ExpressJS", "MySQL"],
  // },
  // {
  //   id: 5,
  //   thumbnail: "/images/sn-residence.png",
  //   name: "SN Residence",
  //   summary:
  //     "SN Residence is a subsidized housing development with a unique concept and the highest quality standards and ensuring it is flood-free.",
  //   tech_stacks: ["React", "Vite", "Tailwind"],
  // },
];
