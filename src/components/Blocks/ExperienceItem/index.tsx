import { Box, Flex, Title, rem } from "@mantine/core";
import { Company, LanguagesTypes, Position } from "@/types";
import { sanityImageUrl } from "~/sanity/lib/client";
import { AdaptedDate } from "../../Bits/AdaptedDate";
import { PositionItem } from "../Position";
import Link from "next/link";
import Image from "next/image";
import classes from "./ExperienceItem.module.css";

interface ExperienceItemProps {
  company: Company;
  experience: Position[];
  locale: LanguagesTypes;
}

export const ExperienceItem = ({
  company,
  experience,
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
      <Flex gap={rem(16)}>
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
            <Title order={3} size={rem(26)} className={classes.title}>
              {companyName}
            </Title>
          </Link>
          <Box className={classes.workInfo}>
            <AdaptedDate date={companyTotalMonth} locale={locale} />
          </Box>
        </Box>
      </Flex>

      <Box>
        {experience?.map((experienceItem) => (
          <PositionItem
            key={companyName + experienceItem.positionTitle}
            experience={experienceItem}
            showTotal={experience?.length > 1}
            locale={locale}
          />
        ))}
      </Box>
    </Box>
  );
};
