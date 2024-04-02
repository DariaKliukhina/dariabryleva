export type LanguagesTypes = 'en' | 'ru'

export type Technologies = {
  slug: string;
  title: string;
};

export type Company = {
  companyName: string;
  link: string;
  companyLogo: object;
};

export type Position = {
  company: Company;
  description: string;
  position: string;
  locationType: string;
  workType: string;
  technologies: Technologies[];
};