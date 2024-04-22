import { Box, Flex, Text, Title, rem } from "@mantine/core";
import Link from "next/link";
import classes from "./ExperienceItem.module.css";
import { Company, Experience, employmentTypes, workTypes } from "@/types";
import Image from "next/image";
import { sanityImageUrl } from "~/sanity/lib/client";
import { AdaptedDate } from "../../Bits/AdaptedDate";
import { PositionItem } from "../Position";

interface ExperienceItemProps {
  workTypes: workTypes;
  employmentTypes: employmentTypes;
  company: Company;
  experience: Experience[];
}

export const ExperienceItem = ({
  company,
  experience,
  workTypes,
  employmentTypes,
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
          <AdaptedDate date={companyTotalMonth} />
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
          />
        ))}
      </Box>
    </Box>
  );
};
