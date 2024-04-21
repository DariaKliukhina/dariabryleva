import { groq } from "next-sanity";

export const experienceQuery = groq`
*[_type == "experience"] {
  title,
   jobsList[]-> {
     company->{
      companyName,
      "slug": slug.current,
      companyLocation,
      link,
      companyLogo
     },
     "description": descriptionWithTranslation[$lang],
     locationType,
     workType,
     "position": position[$lang],
     technologies[]-> {
       title,
       "slug": slug.current
     }
   }
}[0]`;
