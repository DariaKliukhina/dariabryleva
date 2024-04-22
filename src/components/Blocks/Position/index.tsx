import { Box, Flex, Text, Title, rem } from "@mantine/core";
import classes from "./Position.module.css";
import { Experience, employmentTypes, workTypes } from "@/types";
import { PortableText } from "@portabletext/react";
import { MONTH } from "@/utils";
import { AdaptedDate } from "../../Bits/AdaptedDate";

interface PositionItemProps {
  workTypes: workTypes;
  employmentTypes: employmentTypes;
  experience: Experience;
  showTotal?: boolean;
}

export const PositionItem = ({
  experience,
  workTypes,
  employmentTypes,
  showTotal = true,
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
                : " Present"}
            </Text>
            {showTotal ? (
              <>
                <Text>, </Text>&nbsp;
                <AdaptedDate date={totalMonth} />
              </>
            ) : (
              ""
            )}
          </Flex>

          <Text>{locationType}</Text>
        </Box>

        <Flex gap={6}>
          <Box>{employmentTypes[employmentType]}</Box>
          <Box>{workTypes[workType]}</Box>
        </Flex>
      </Flex>
      <Box className={classes.description}>
        {description?.map((item, index) => (
          <PortableText key={item[0]?._key || index} value={item} />
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
