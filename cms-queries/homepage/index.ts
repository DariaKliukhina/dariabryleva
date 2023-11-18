import { groq } from "next-sanity";

export const homepageQuery = groq`
*[_type == "homepage" && !(_id in path("drafts.**"))] {
  title,
  mainInfo {
    "title": title[$lang],
    "subtitle": subtitle[$lang],
    "description": description[$lang]
  }
}[0]`