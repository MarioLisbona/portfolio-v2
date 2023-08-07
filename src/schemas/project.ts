import { defineField } from "sanity";
import { GoProjectSymlink } from "react-icons/go";
const project = {
  name: "project",
  title: "Project",
  type: "document",
  icon: GoProjectSymlink,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      description: "Upload an image for the project",
      validation: (rule) => rule.required(),
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "buildDate",
      title: "Build date",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tech",
      title: "Tech",
      type: "array",
      of: [{ type: "string" }],
      description: "Add a list of technologies used on the project",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "string",
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: "longDescription",
      title: "Long Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "github",
      title: "Github Repo URL",
      type: "url",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "liveSite",
      title: "Live Site URL",
      type: "string",
    }),
  ],
};
export default project;
