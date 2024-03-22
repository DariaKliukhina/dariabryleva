import { groq } from "next-sanity";

export const siteSettingsQuery = groq`*[_type == "siteSettings"]`;
