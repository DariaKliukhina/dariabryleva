import { Box, Flex, Text, Title, rem } from "@mantine/core";
import { Position, LanguagesTypes } from "@/types";
import { PortableText } from "@portabletext/react";
import { AdaptedDate } from "../../Bits/AdaptedDate";
import { MONTH } from "@/utils";
import classes from "./Position.module.css";
import { TypedObject } from "sanity";
import { useTranslations } from "next-intl";
import { Tag } from "../../Bits/Tag";

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
      <Box className={classes.workInfo}>
        <Title order={4} size={rem(20)} className={classes.title}>
          {positionTitle}
        </Title>
        <Flex gap={6} align="center" className={classes.infoDescription}>
          <Text>{t(locationType)}</Text>
          <Text>{t(employmentType)}</Text>
          <Text>{t(workType)}</Text>
        </Flex>

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
      </Box>

      <Box className={classes.description}>
        {description?.map((item: TypedObject, index: number) => (
          <PortableText key={item?._key || `${index}`} value={item} />
        ))}
      </Box>

      <Flex wrap="wrap" className={classes.technologies} gap={rem(8)}>
        {technologies?.map((item) => (
          <Tag key={item.slug}>{item.title}</Tag>
        ))}
      </Flex>
    </Box>
  );
};
