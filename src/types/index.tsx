import { TypedObject } from "sanity";

export type LanguagesTypes = "en" | "ru";

export type workTypes = {
  [key: string]: string;
};
export type employmentTypes = {
  [key: string]: string;
};

export type Technologies = {
  slug: string;
  title: string;
};

type PositionDate = {
  month: number;
  year: number;
};

export type Company = {
  companyName: string;
  link: string;
  companyLogo: object;
  totalMonth: number;
  currentWork: boolean;
};

export type PositionRaw = {
  company: Company;
  description: string;
  position: string;
  locationType: string;
  workType: string;
  technologies: Technologies[];
  startDate: PositionDate;
  endDate?: PositionDate;
  currentWork: boolean;
  employmentType: string;
};

export type Experience = {
  description: TypedObject | TypedObject[];
  positionTitle: string;
  locationType: string;
  workType: string;
  technologies: Technologies[];
  currentWork: boolean;
  totalMonth: number;
  startDate: PositionDate;
  endDate?: PositionDate;
  employmentType: string;
};
