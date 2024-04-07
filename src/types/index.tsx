export type LanguagesTypes = "en" | "ru";

export type workTypes = {
  [key: string]: string;
};

export type Technologies = {
  slug: string;
  title: string;
};

export type Company = {
  companyName: string;
  link: string;
  companyLogo: object;
};

export type PositionRaw = {
  company: Company;
  description: string;
  position: string;
  locationType: string;
  workType: string;
  technologies: Technologies[];
};

type Experience = {
  description: string;
  positionTitle: string;
  locationType: string;
  workType: string;
  technologies: Technologies[];
};

export interface Position {
  company: Company;
  experience: Experience[];
}
