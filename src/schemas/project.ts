import { defineField } from "sanity";
import { GoProjectSymlink } from "react-icons/go";
const project = {
  name: "project",
  title: "Project",
  type: "document",
  icon: GoProjectSymlink,
  fields: [
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      description: "Upload an image for the project",
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tech",
      title: "Tech",
      type: "string",
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
  ],
};
export default project;
