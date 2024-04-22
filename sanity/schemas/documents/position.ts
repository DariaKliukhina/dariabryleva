import { generateMonthOptions, generateYearsOptions } from "@/utils";
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
    defineField({
      title: "Position title",
      name: "position",
      type: "i18n.string",
    }),
    defineField({
      title: "I am currently working in this role",
      name: "currentWork",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      title: "Start date",
      name: "startDate",
      type: "object",
      fields: [
        defineField({
          title: "Month",
          name: "month",
          type: "number",
          options: {
            list: generateMonthOptions(),
          },
          initialValue: 1,
        }),
        defineField({
          title: "Year",
          name: "year",
          type: "number",
          options: {
            list: generateYearsOptions(),
          },
          initialValue: new Date().getFullYear(),
        }),
      ],
    }),
    defineField({
      title: "End date",
      name: "endDate",
      type: "object",
      hidden: ({ document }) => !!document?.currentWork,
      fields: [
        defineField({
          title: "Month",
          name: "month",
          type: "number",
          options: {
            list: generateMonthOptions(),
          },
          initialValue: 1,
        }),
        defineField({
          title: "Year",
          name: "year",
          type: "number",
          options: {
            list: generateYearsOptions(),
          },
          initialValue: new Date().getFullYear(),
        }),
      ],
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
          { title: "Permanent Full-time", value: "full-time" },
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
      name: "descriptionWithTranslation",
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
