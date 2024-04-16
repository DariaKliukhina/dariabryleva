import { Box, Flex, Text, Title, rem } from "@mantine/core";
import Link from "next/link";
import classes from "./Position.module.css";
import { Position, workTypes } from "@/types";
import Image from "next/image";
import { sanityImageUrl } from "~/sanity/lib/client";

interface PositionItemProps extends Position {
  workTypes: workTypes;
}

export const PositionItem = ({
  company,
  experience,
  workTypes,
}: PositionItemProps) => {
  const { companyLogo, companyName, link } = company;

  return (
    <Box className={classes.root}>
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
          {" "}
          <Title order={3} size={rem(30)} className={classes.title}>
            {companyName}
          </Title>
        </Link>
        <Text>Dates</Text>
      </Box>

      <Box>
        {experience?.map((experienceItem) => {
          const {
            description,
            locationType,
            workType,
            positionTitle,
            technologies,
          } = experienceItem;

          return (
            <Box
              key={companyName + positionTitle}
              className={classes.positionItem}
            >
              <Flex justify="space-between" className={classes.header}>
                <Box className={classes.workInfo}>
                  <Title order={4} size={rem(24)} className={classes.title}>
                    {positionTitle}
                  </Title>
                  <Text>{locationType}</Text>
                </Box>
                <Box>{workTypes[workType]}</Box>
              </Flex>
              <Box className={classes.description}>{description}</Box>

              <Flex wrap="wrap" className={classes.technologies} gap={rem(18)}>
                {technologies?.map((item) => (
                  <Text key={item.slug} className={classes.technoligy}>
                    {item.title}
                  </Text>
                ))}
              </Flex>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
