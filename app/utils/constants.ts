import { SocialLink } from "@/app/types/social";

export const PROFILE_DATA = {
  name: "Vartholomaios - Christos Tolos",
  title: "Web Developer",
  description:
    "Experienced Web Developer specializing in Angular, TypeScript, and mobile application development. Currently working at Pragma-IoT, focusing on building scalable web applications and managing mobile app deployments. Skilled in front-end development with expertise in Angular, Ionic Framework, and RESTful APIs integration.",
  imageUrl: require("../../assets/images/ProfImage.jpg"),
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vartholomaios-tolos-1171312a6/",
    icon: "linkedin",
    label: "Visit LinkedIn Profile",
  },
  {
    name: "GitHub",
    url: "https://github.com/VartholomaiosT",
    icon: "github",
    label: "View GitHub Projects",
  },
  {
    name: "Email",
    url: "mailto:bartholomaios.tolos@gmail.com",
    icon: "envelope",
    label: "Send Email",
  },
  {
    name: "Phone",
    url: "tel:+306978146605",
    icon: "phone",
    label: "Call Me",
  },
];

export const PROJECTS = [
  {
    title: "PV ProVision",
    description:
      "Developed RESTful APIs and implemented dynamic data interactions for a solar monitoring system using Angular/Ionic. Implemented real-time connectivity diagnostics and seamless integration with external services.",
    technologies: ["Angular", "Ionic", "TypeScript", "RESTful APIs", "RxJS"],
  },
  {
    title: "Multi-tenant Architecture",
    description:
      "Designed and implemented a complex multi-tenant system enabling dynamic location selection and seamless data integration across components, ensuring efficient data handling and scalability.",
    technologies: ["Angular", "TypeScript", "PostgreSQL", "RESTful APIs"],
  },
  {
    title: "Government Department Websites",
    description:
      "Developed and maintained dynamic websites using Liferay framework, focusing on user experience and performance optimization.",
    technologies: ["Liferay", "JavaScript", "HTML", "CSS"],
  },
];

export const SKILLS = {
  programming: [
    "Angular",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Ionic Framework",
    "RxJS",
  ],
  technologies: [
    "RESTful APIs",
    "PostgreSQL",
    "MyAdminPHP",
    "Liferay",
    "Git",
    "Google Play Store",
    "Apple App Store",
    "Mobile App Deployment",
    "Multi-tenant Architecture",
    "Dynamic Data Integration",
  ],
  certifications: [
    "Google: How to Design & Build a Website",
    "Google: Digital Advertising (Search, Display & Social)",
    "Google: Creating an Online Business",
    "Google: Digital Marketing Strategy",
  ],
  languages: [
    { name: "English", level: "B2 TOEIC & ESB" },
    { name: "Greek", level: "Native" },
  ],
  additional: [
    "Mobile App Development",
    "Front-end Development",
    "Web Development",
    "E-commerce",
    "Content Management",
    "UI/UX Design",
    "Responsive Design",
    "Performance Optimization",
  ],
};

export default {
  PROFILE_DATA,
  SOCIAL_LINKS,
  PROJECTS,
  SKILLS,
};
