import { groq } from "next-sanity";

export const homepageQuery = groq`
*[_type == "homepage"] {
  title,
  "mainImage": mainImage,
  mainInfo {
    "title": title[$lang],
    "subtitle": subtitle[$lang],
    "description": description[$lang]
  }
}[0]`;
