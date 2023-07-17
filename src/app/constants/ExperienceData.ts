export interface ExperienceDataProps {
  company: string;
  dates: string;
  title: string;
  location: string;
  description: string;
  techStack: string[];
}

export const experienceData: ExperienceDataProps[] = [
  {
    company: "Edit on The Spot",
    dates: "May, 2023 - Present",
    title: "Junior Web Developer",
    location: "Sydney (Remote)",
    description:
      "I'm building the new marketing website and implementing content management systems. Building a raw media editing UI which allows users to create, delete, edit and export audio clips. Developing and writing automated test with Jest. Communicating and collaborating with my team remotely.",
    techStack: [
      "NextJS",
      "TypeScript",
      "ChakraUI",
      "Git",
      "Github",
      "Zoom",
      "Slack",
      "Jira",
      "Confluence",
      "Figma",
    ],
  },
];
