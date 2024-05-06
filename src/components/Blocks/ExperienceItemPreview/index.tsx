import { LanguagesTypes, PositionPreview } from "@/types";
import { Box, Flex, Title, rem } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { sanityImageUrl } from "~/sanity/lib/client";
import classes from "./ExperienceItemPreview.module.css";
import { calculateTotalMonth } from "@/utils";
import { AdaptedDate } from "@/components/Bits/AdaptedDate";
import { useTranslations } from "next-intl";
import { WorkDates } from "@/components/Bits/WorkDates";

type ExperienceItemPreviewProps = {
  position: PositionPreview;
  locale: LanguagesTypes;
};

export const ExperienceItemPreview = ({
  position,
  locale,
}: ExperienceItemPreviewProps) => {
  const t = useTranslations("Experience");
  const { company, position: positionTitle, startDate, endDate } = position;
  const { companyLogo, companyName, link } = company;

  const totalMonth = calculateTotalMonth(position);

  return (
    <Box className={classes.root}>
      <Flex gap={rem(8)}>
        <Box className={classes.imageWrapper}>
          <Image
            src={sanityImageUrl(companyLogo).url()}
            width={100}
            height={100}
            alt={companyName || ""}
            priority
          />
        </Box>
        <Box className={classes.headerInfo}>
          <Link href={link} target="_blank">
            <Title order={3} size={rem(14)} className={classes.title}>
              {companyName}
            </Title>
          </Link>
          <Title order={4} size={rem(14)} className={classes.title}>
            {positionTitle}
          </Title>
          <Box className={classes.workInfo}>
            <WorkDates
              startDate={startDate}
              endDate={endDate}
              title={t("present")}
            />
            <AdaptedDate date={totalMonth} locale={locale} />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
