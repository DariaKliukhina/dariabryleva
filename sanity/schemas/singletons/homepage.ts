import { defineField, defineType } from "sanity";

export default defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: "Main Info",
      name: "mainInfo",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "i18n.string",
        },
        {
          name: "subtitle",
          title: "Subtitle",
          type: "i18n.string",
        },
        defineField({
          title: "Description",
          name: "description",
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
    }),
  ],

  preview: {
    select: {
      title: "title",
    },
  },
});
