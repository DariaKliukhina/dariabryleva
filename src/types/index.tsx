import { TypedObject } from "sanity";

export type LanguagesTypes = "en" | "ru";

export type workTypes = {
  [key: string]: string;
};
export type employmentTypes = {
  [key: string]: string;
};

export type Technologies = {
  id: string;
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
  description?: TypedObject[];
  position: string;
  locationType: string;
  workType: string;
  technologies: Technologies[];
  startDate: PositionDate;
  endDate?: PositionDate;
  currentWork: boolean;
  employmentType: string;
};

export type PositionPreview = {
  company: Company;
  position: string;
  locationType: string;
  workType: string;
  technologies: Technologies[];
  startDate: PositionDate;
  endDate?: PositionDate;
  currentWork: boolean;
  employmentType: string;
};

export type Position = {
  description?: TypedObject[];
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

export interface Experience {
  company: Company;
  experience: Position[];
}
