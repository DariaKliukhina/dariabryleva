import { groq } from "next-sanity";

export const experienceQuery = groq`
*[_type == "experience"] {
  title,
   jobsList[]-> {
     company->{
      companyName,
      companyLocation,
      link,
      companyLogo
     },
     "description": descriptionWithTranslation[$lang],
     locationType,
     employmentType,
     currentWork,
     startDate,
     endDate,
     workType,
     "position": position[$lang],
     technologies[]-> {
       title,
       "id": _id
     }
   }
}[0]`;
