import { Company, Position, PositionRaw } from "@/types";

const CARIER_START = 2018;
const NUMBER_OF_MONTH = 12;

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

// get a number of monts and calculate a total number of years and rest of the month
export const adaptTotlaDate = (total: number) => {
  const restMonth = total % NUMBER_OF_MONTH;
  const totalYears = (total - restMonth) / NUMBER_OF_MONTH;

  const adaptedYears = totalYears
    ? totalYears === 1
      ? "1 year"
      : `${totalYears} years`
    : "";
  const adaptedMonth = restMonth
    ? restMonth === 1
      ? "1 mo"
      : `${restMonth} mos`
    : "";

  return {
    adaptedYears,
    adaptedMonth,
  };
};

// combine positions belonging to the same company
export const adaptExperience = (list: PositionRaw[]) => {
  const result: Position[] = [];
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

    const positionDescription = {
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
