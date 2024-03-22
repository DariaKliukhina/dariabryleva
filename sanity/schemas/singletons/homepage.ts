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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
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
        {
          name: "description",
          title: "Description",
          type: "i18n.text",
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
