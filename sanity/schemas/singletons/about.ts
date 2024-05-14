import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      title: "Content",
      name: "content",
      type: "object",
      fields: [
        defineField({
          title: "en",
          name: "en",
          type: "blockContent",
        }),
        defineField({
          title: "ru",
          name: "ru",
          type: "blockContent",
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
    },
  },
});
