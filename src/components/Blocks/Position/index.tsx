import { Box, Flex, Text, rem } from "@mantine/core";
import Link from "next/link";
import classes from "./Position.module.css";
import { Position } from "@/types";
import Image from "next/image";
import { sanityImageUrl } from "~/sanity/lib/client";

export const PositionItem = ({
  company,
  description,
  locationType,
  workType,
  position,
  technologies,
}: Position) => {
  const { companyLogo, companyName, link } = company;
  return (
    <Box className={classes.root}>
      <Flex justify="space-between" className={classes.header}>
        <Flex>
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
            <Link href={link}>{companyName}</Link>
            <Box className={classes.workInfo}>
              <Text>{locationType}</Text>
            </Box>

            <Box>{position}</Box>
          </Box>
        </Flex>

        <Box>{workType}</Box>
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
};
