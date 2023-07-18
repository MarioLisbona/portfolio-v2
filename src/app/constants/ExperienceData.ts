export interface ExperienceDataProps {
  company: string;
  dates: string;
  title: string;
  location: string;
  description: string[];
  techStack: string[];
}

export const experienceData: ExperienceDataProps[] = [
  {
    company: "Edit on The Spot",
    dates: "May, 2023 - Present",
    title: "Junior Web Developer",
    location: "Sydney (Remote)",
    description: [
      "Developing the marketing website for https://editonthespot.com using Next.js with TypeScript and Chakra-UI",
      "Implementing content management with Sanity.io",
      "Applying version control using Git and Github",
      "Building a raw media editing UI, using React, TypeScript and Chakra-UI, which allows app users to create, delete, edit and export audio clips",
      "Writing and developing automated test scripts with Jest",
      "Communicating and collaborating with my team using Zoom, Slack, Jira, Confluence and Figma",
    ],
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
