import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import homepage from "./schemas/singletons/homepage";
import experience from "./schemas/singletons/experience";
import about from "./schemas/singletons/about";
import siteSettings from "./schemas/singletons/siteSettings";
import technology from "./schemas/documents/technology";
import company from "./schemas/documents/company";
import position from "./schemas/documents/position";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContent,
    siteSettings,
    technology,
    company,
    position,
    about,

    // pages
    homepage,
    experience,
  ],
};
