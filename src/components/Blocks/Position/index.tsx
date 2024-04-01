import { Box, Flex, Text, rem } from "@mantine/core";
import Link from "next/link";
import classes from "./Position.module.css";
import { Position } from "@/types";

export const PositionItem = ({
  company,
  description,
  locationType,
  workType,
  position,
  technologies,
}: Position) => {
  return (
    <Box>
      <Flex justify="space-between" className={classes.header}>
        <Box>
          <Link href={company.link}>{company.companyName}</Link>
          <Box>{position}</Box>
          <Box>{locationType}</Box>
        </Box>

        <Box>{workType}</Box>
      </Flex>

      <Box className={classes.description}>{description}</Box>

      <Flex wrap="wrap" className={classes.technologies} gap={rem(10)}>
        {technologies.map((item) => (
          <Text key={item.slug}>{item.title}</Text>
        ))}
      </Flex>
    </Box>
  );
};
