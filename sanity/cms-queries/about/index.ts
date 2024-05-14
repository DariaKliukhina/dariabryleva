import { groq } from "next-sanity";

export const aboutQuery = groq`
*[_type == "about"] {
  title,
  "content": content[$lang],
}[0]`;
