import { Box, Title, rem } from "@mantine/core";
import {
  Company,
  LanguagesTypes,
  Position,
  employmentTypes,
  workTypes,
} from "@/types";
import { sanityImageUrl } from "~/sanity/lib/client";
import { AdaptedDate } from "../../Bits/AdaptedDate";
import { PositionItem } from "../Position";
import Link from "next/link";
import Image from "next/image";
import classes from "./ExperienceItem.module.css";

interface ExperienceItemProps {
  workTypes: workTypes;
  employmentTypes: employmentTypes;
  company: Company;
  experience: Position[];
  locale: LanguagesTypes;
}

export const ExperienceItem = ({
  company,
  experience,
  workTypes,
  employmentTypes,
  locale,
}: ExperienceItemProps) => {
  const {
    companyLogo,
    companyName,
    link,
    totalMonth: companyTotalMonth,
  } = company;

  return (
    <Box className={classes.root}>
      <Box className={classes.imageWrapper}>
        <Image
          src={sanityImageUrl(companyLogo).url()}
          width={150}
          height={150}
          alt={companyName || ""}
          priority
        />
      </Box>
      <Box className={classes.headerInfo}>
        <Link href={link}>
          <Title order={3} size={rem(28)} className={classes.title}>
            {companyName}
          </Title>
        </Link>
        <Box className={classes.workInfo}>
          <AdaptedDate date={companyTotalMonth} locale={locale} />
        </Box>
      </Box>

      <Box>
        {experience?.map((experienceItem) => (
          <PositionItem
            key={companyName + experienceItem.positionTitle}
            experience={experienceItem}
            workTypes={workTypes}
            employmentTypes={employmentTypes}
            showTotal={experience?.length > 1}
            locale={locale}
          />
        ))}
      </Box>
    </Box>
  );
};
