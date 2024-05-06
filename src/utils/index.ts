import { Company, Experience, Position, PositionRaw } from "@/types";
import pluralizeRus from "plural-ru";
const CARIER_START = 2018;
const NUMBER_OF_MONTH = 12;

export const links = [
  { link: "/experience", label: "experience" },
  { link: "/contacts", label: "contacts" },
];

export const footerLinks = [{ link: "/about-this-site", label: "about" }];

export const MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// generate a list of month
export const generateMonthOptions = () => {
  return MONTH.map((item, index) => ({ title: item, value: index + 1 }));
};

// generate a list of years
export const generateYearsOptions = () => {
  const currentYear = new Date().getFullYear();
  const result = [];

  for (let i = currentYear; i >= CARIER_START; i--) {
    result.push({
      title: `${i}`,
      value: i,
    });
  }

  return result;
};

// pluralize words
export const pluralize = (
  val: number,
  rules: [string, string][],
  lang: string = "en-US"
) => {
  const ordinalRules = new Intl.PluralRules(lang, { type: "ordinal" });

  const results = new Map(rules);
  const rule = ordinalRules.select(val);
  const result = results.get(rule);
  return `${val} ${result}`;
};

// get a number of monts
// calculate a total number of years and rest of the month
// pluralize
export const adaptTotlaDate = (total: number, locale = "en") => {
  const restMonth = total % NUMBER_OF_MONTH;
  const totalYears = (total - restMonth) / NUMBER_OF_MONTH;

  let adaptedYears;
  let adaptedMonth;

  switch (locale) {
    case "en": {
      if (totalYears) {
        adaptedYears = pluralize(totalYears, [
          ["one", "year"],
          ["two", "years"],
          ["few", "years"],
          ["other", "years"],
        ]);
      }
      if (restMonth) {
        adaptedMonth = pluralize(restMonth, [
          ["one", "month"],
          ["two", "month"],
          ["few", "months"],
          ["other", "months"],
        ]);
      }

      break;
    }
    case "ru": {
      if (totalYears) {
        adaptedYears =
          totalYears + " " + pluralizeRus(totalYears, "год", "года", "лет");
      }
      if (restMonth) {
        adaptedMonth =
          restMonth +
          " " +
          pluralizeRus(restMonth, "месяц", "месяца", "месяцев");
      }
      break;
    }
  }

  return {
    adaptedYears,
    adaptedMonth,
  };
};

// combine positions belonging to the same company
export const adaptExperience = (list: PositionRaw[]) => {
  const result: Experience[] = [];
  let previousCompany: Company;

  list.forEach((position) => {
    let adaptedPosition;

    let totalMonth = 0;

    const endDateYear = position.endDate?.year || new Date().getFullYear();
    const endDateMonth = position.endDate?.month || new Date().getMonth() + 1;

    // get total number of month for the current position
    if (position.startDate.year === endDateYear) {
      totalMonth = endDateMonth - position.startDate.month + 1;
    } else {
      for (let i = position.startDate.year; i <= endDateYear; i++) {
        if (i === position.startDate.year) {
          totalMonth += NUMBER_OF_MONTH - position.startDate.month;
        } else if (i === endDateYear) {
          totalMonth += endDateMonth + 1;
        } else {
          totalMonth += NUMBER_OF_MONTH;
        }
      }
    }

    const positionDescription: Position = {
      description: position.description,
      locationType: position.locationType,
      workType: position.workType,
      employmentType: position.employmentType,
      positionTitle: position.position,
      technologies: position.technologies,
      currentWork: position.currentWork,
      startDate: position.startDate,
      endDate: position.endDate,
      totalMonth,
    };

    if (
      !previousCompany ||
      previousCompany.companyName !== position.company.companyName
    ) {
      adaptedPosition = {
        company: {
          ...position.company,
          totalMonth,
        },
        experience: [positionDescription],
      };

      result.push(adaptedPosition);
    } else {
      const targetCompany = result[result.length - 1];
      targetCompany.company.totalMonth += totalMonth;
      targetCompany.experience.push(positionDescription);

      if (positionDescription.currentWork) {
        targetCompany.company.currentWork = positionDescription.currentWork;
      }
    }

    previousCompany = position.company;
  });

  return result;
};
