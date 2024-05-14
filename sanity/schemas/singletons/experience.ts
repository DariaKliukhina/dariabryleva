import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "jobsList",
      title: "Jobs List",
      type: "array",
      of: [
        {
          name: "positionItem",
          title: "Position",
          type: "reference",
          to: {
            type: "position",
          },
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
    },
  },
});
