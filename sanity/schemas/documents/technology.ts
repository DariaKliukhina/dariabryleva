import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "technology",
  title: "Technologies",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      title: "Tag",
      type: "string",
    }),
    defineField({
      name: "link",
      title: "Documentation link",
      type: "string",
    }),
  ],
});
