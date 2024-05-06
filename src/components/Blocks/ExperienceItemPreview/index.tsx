// import { AdaptedDate } from "@/components/Bits/AdaptedDate";
import { LanguagesTypes, PositionPreview } from "@/types";
import { Box, Flex, Text, Title, rem } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { sanityImageUrl } from "~/sanity/lib/client";
import classes from "./ExperienceItemPreview.module.css";

type ExperienceItemPreviewProps = {
  position: PositionPreview;
  locale: LanguagesTypes;
};

export const ExperienceItemPreview = ({
  position,
  locale
}: ExperienceItemPreviewProps) => {
  const {
    company,
    position: positionTitle,
  } = position;
  const { companyLogo, companyName, link } = company;

  return (
    <Box className={classes.root}>
      <Flex gap={rem(8)}>
        <Box className={classes.imageWrapper}>
          <Image
            src={sanityImageUrl(companyLogo).url()}
            width={70}
            height={70}
            alt={companyName || ""}
            priority
          />
        </Box>
        <Box className={classes.headerInfo}>
          <Link href={link} target="_blank">
            <Title order={3} size={rem(16)} className={classes.title}>
              {companyName}
            </Title>
          </Link>
          <Box className={classes.workInfo}>
            {/* <AdaptedDate date={companyTotalMonth} locale={locale} /> */}
          </Box>
          <Title order={4} size={rem(14)} className={classes.title}>
            {positionTitle}
          </Title>
        </Box>
      </Flex>
    </Box>
  );
};
