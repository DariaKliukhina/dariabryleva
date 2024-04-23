import { Box, Flex, Text, Title, rem } from "@mantine/core";
import { Position, LanguagesTypes, employmentTypes, workTypes } from "@/types";
import { PortableText } from "@portabletext/react";
import { AdaptedDate } from "../../Bits/AdaptedDate";
import { MONTH } from "@/utils";
import classes from "./Position.module.css";
import { TypedObject } from "sanity";
import { useTranslations } from "next-intl";

interface PositionItemProps {
  experience: Position;
  showTotal?: boolean;
  locale: LanguagesTypes;
}

export const PositionItem = ({
  experience,
  showTotal = true,
  locale,
}: PositionItemProps) => {
  const {
    description,
    locationType,
    workType,
    positionTitle,
    technologies,
    totalMonth,
    startDate,
    endDate,
    employmentType,
  } = experience;

  const t = useTranslations("Experience");
  return (
    <Box className={classes.positionItem}>
      <Flex justify="space-between" className={classes.header}>
        <Box className={classes.workInfo}>
          <Title order={4} size={rem(20)} className={classes.title}>
            {positionTitle}
          </Title>

          <Flex>
            <Text>
              {MONTH[startDate.month - 1]} {startDate.year} -
              {endDate
                ? ` ${`${MONTH[endDate.month - 1]} ${endDate.year}`}`
                : " " + t("present")}
            </Text>

            {showTotal ? (
              <>
                <Text>, </Text>&nbsp;
                <AdaptedDate date={totalMonth} locale={locale} />
              </>
            ) : (
              ""
            )}
          </Flex>

          <Text>{t(locationType)}</Text>
        </Box>

        <Flex gap={6}>
          <Box>{t(employmentType)}</Box>
          <Box>{t(workType)}</Box>
        </Flex>
      </Flex>
      <Box className={classes.description}>
        {description?.map((item: TypedObject, index: number) => (
          <PortableText key={item?._key || `${index}`} value={item} />
        ))}
      </Box>

      <Flex wrap="wrap" className={classes.technologies} gap={rem(18)}>
        {technologies?.map((item) => (
          <Text key={item.slug} className={classes.technoligy}>
            {item.title}
          </Text>
        ))}
      </Flex>
    </Box>
  );
};
