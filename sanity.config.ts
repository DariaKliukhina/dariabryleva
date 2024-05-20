/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/admin/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import {structure} from "./sanity/structure"
import { I18nFields } from "sanity-plugin-i18n-fields";
import { media } from "sanity-plugin-media";

import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

export default defineConfig({
  basePath: "/admin",
  projectId,
  dataset,
  schema,
  plugins: [
    I18nFields({
      ui: {
        type: "slider",
        position: "bottom",
      },
      locales: [
        { code: "en", label: "🇺🇸", title: "English", default: true },
        { code: "ru", label: "🇷🇺", title: "Russian" },
      ],
    }),
    structureTool({ structure }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    media(),
  ],
});
