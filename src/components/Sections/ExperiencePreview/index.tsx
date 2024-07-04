import { LanguagesTypes, PositionRaw } from "@/types";
import { Box, Center, Flex, Stack, Title, rem } from "@mantine/core";
import { useTranslations } from "next-intl";
import classes from "./ExperiencePreview.module.css";
import React from "react";
import { ExperienceItemPreview } from "@/components/Blocks/ExperienceItemPreview";
import { Link } from "@/navigation";
import { SectionWrapper } from "@/components";

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
    <SectionWrapper title={t("experience")} link="/experience">
      <>
        <Box className={classes.listWrapperDesktop} visibleFrom="xs">
          <Box className={classes.list}>
            <Flex gap={{ base: rem(18) }}>
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
        </Box>

        <Stack className={classes.listWrapperMobile} hiddenFrom="xs">
          {list?.slice(0, 3).map((item) => (
            <Box
              key={`${item?.company?.companyName}-${item.position}`}
              className={classes.position}
            >
              <ExperienceItemPreview position={item} locale={locale} />
            </Box>
          ))}
        </Stack>
      </>
    </SectionWrapper>
  );
};
