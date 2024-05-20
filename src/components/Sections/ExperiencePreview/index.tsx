import { LanguagesTypes, PositionRaw } from "@/types";
import { Box, Center, Flex, Title, rem } from "@mantine/core";
import { useTranslations } from "next-intl";
import classes from "./ExperiencePreview.module.css";
import React from "react";
import { ExperienceItemPreview } from "@/components/Blocks/ExperienceItemPreview";
import { Link } from "@/navigation";

type ExperiencePreviewProps = {
  list: PositionRaw[];
  locale: LanguagesTypes;
};
export const ExperiencePreview = ({
  list = [],
  locale,
}: ExperiencePreviewProps) => {
  const t = useTranslations("Index");

  return (
    <Box className={classes.wrapper}>
      <Flex justify="space-between" className={classes.top}>
        <Title order={2} size={rem(32)}>
          {t("experience")}
        </Title>

        <Box visibleFrom="xs">
          <Link href={"/experience"}>{t("more")}</Link>
        </Box>
      </Flex>

      <Box className={classes.listWrapper}>
        <Flex
          gap={{ base: rem(18), xs: rem(12) }}
          direction={{ base: "column", xs: "row" }}
        >
          {list?.map((item) => (
            <Box
              key={`${item?.company?.companyName}-${item.position}`}
              className={classes.position}
            >
              <ExperienceItemPreview position={item} locale={locale} />
            </Box>
          ))}
        </Flex>
      </Box>
      <Box hiddenFrom="xs">
        <Center>
          <Link href={"/experience"}>{t("more")}</Link>
        </Center>
      </Box>
    </Box>
  );
};
