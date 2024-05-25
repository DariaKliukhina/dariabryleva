import { groq } from "next-sanity";

export const homepageQuery = groq`
*[_type == "homepage"] {
  title,
  "mainImage": mainImage,
  "reviewMessage": reviewMessage[$lang],
  mainInfo {
    "title": title[$lang],
    "subtitle": subtitle[$lang],
    "description": description[$lang]
  },
  "experience": *[_type == "experience"] {
     jobsList[]-> {
       company->{
        companyName,
        companyLocation,
        link,
        companyLogo
       },
       currentWork,
       startDate,
       endDate,
       "position": position[$lang],
       technologies[]-> {
         title,
         "id": _id
       }
     }
  }[0]
}[0]`;
