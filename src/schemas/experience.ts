import { defineField } from "sanity";
import { MdWorkOutline } from "react-icons/md";

const experience = {
  name: "experience",
  title: "Experience",
  type: "document",
  icon: MdWorkOutline,
  fields: [
    defineField({
      name: "company",
      title: "Company",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "End date",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
    {
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      description: "Add the tech stack used in this role",
      of: [{ type: "string" }],
    },
  ],
};

export default experience;
