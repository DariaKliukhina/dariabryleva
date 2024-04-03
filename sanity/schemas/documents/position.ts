import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "position",
  title: "Position",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      title: "Company",
      name: "company",
      type: "reference",
      to: {
        type: "company",
      },
    }),
    // TODO: add dates
    defineField({
      title: "Position title",
      name: "position",
      type: "i18n.string",
    }),
    defineField({
      title: "Work type",
      name: "workType",
      type: "string",
      options: {
        list: [
          { title: "Development", value: "development" },
          { title: "Teaching", value: "teaching" },
        ],
        layout: "radio",
      },
      initialValue: "development",
    }),
    defineField({
      title: "Employment type",
      name: "employmentType",
      type: "string",
      options: {
        list: [
          { title: "Permanent Full-time", value: "fulltime" },
          { title: "Part-time", value: "part-time" },
        ],
        layout: "radio",
      },
      initialValue: "fulltime",
    }),
    defineField({
      title: "Location type",
      name: "locationType",
      type: "string",
      options: {
        list: [
          { title: "On-site", value: "on-site" },
          { title: "Hybrid", value: "hybrid" },
          { title: "Remote", value: "remote" },
        ],
        layout: "dropdown",
      },
      initialValue: "on-site",
    }),
    defineField({
      title: "Description",
      name: "description",
      type: "i18n.text",
    }),
    defineField({
      title: "Technologies",
      name: "technologies",
      type: "array",
      of: [
        {
          title: "Technology Item",
          name: "technologyItem",
          type: "reference",
          to: {
            type: "technology",
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      media: "company.companyLogo",
      title: "company.companyName",
      position: "position",
    },
    prepare: ({ title, media, position }) => {
      return {
        media,
        title: `${title}: ${position?.en || ""}`,
      };
    },
  },
});
