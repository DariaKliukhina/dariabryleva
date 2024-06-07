import { groq } from "next-sanity";

export const aboutQuery = groq`
*[_type == "about"] {
  githubLink,
  "githubLinkLabel": githubLinkLabel[$lang],
  "content": content[$lang],
}[0]`;
