import { Company, Position, PositionRaw } from "@/types";

// combine positions belonging to the same company
export const adaptExperience = (list: PositionRaw[]) => {
  const result: Position[] = [];
  let previousCompany: Company;

  list.forEach((position) => {
    let adaptedPosition;

    const positionDescription = {
      description: position.description,
      locationType: position.locationType,
      workType: position.workType,
      positionTitle: position.position,
      technologies: position.technologies,
    };

    if (
      !previousCompany ||
      previousCompany.companyName !== position.company.companyName
    ) {
      adaptedPosition = {
        company: position.company,
        experience: [positionDescription],
      };

      result.push(adaptedPosition);
    } else {
      result[result.length - 1].experience.push(positionDescription);
    }

    previousCompany = position.company;
  });

  return result;
};
