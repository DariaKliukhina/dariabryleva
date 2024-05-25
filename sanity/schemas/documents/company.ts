import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "company",
  title: "Company",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "companyName",
      title: "Company name",
      type: "string",
    }),
    defineField({
      name: "companyLocation",
      title: "Company location",
      type: "i18n.string",
    }),
    defineField({
      name: "link",
      title: "Company website",
      type: "string",
    }),
    defineField({
      name: "companyLogo",
      title: "Company Logo",
      type: "image",
    }),
  ],
});
