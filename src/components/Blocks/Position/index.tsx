import { Box, Flex } from "@mantine/core";
import Link from "next/link";
import classes from "./Position.module.css";

type TechnologiesProps = {
  slug: string;
  title: string;
};

type CompanyProps = {
  companyName: string;
  link: string;
};

type PositionProps = {
  company: CompanyProps;
  description: string;
  position: string;
  locationType: string;
  workType: string;
  technologies: TechnologiesProps[];
};

export const Position = ({
  company,
  description,
  locationType,
  workType,
  position,
  technologies,
}: PositionProps) => {
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

      <Box className={classes.technologies}>
        {technologies.map((item) => (
          <Box key={item.slug}>{item.title}</Box>
        ))}
      </Box>
    </Box>
  );
};
