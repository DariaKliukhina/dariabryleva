import { Box, Center, Flex, Title, rem } from "@mantine/core";
import Image, { ImageProps } from "next/image";
import { sanityImageUrl } from "~/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { TypedObject } from "sanity";
import classes from "./Hero.module.css";

type HeroProps = {
  title?: string;
  subtitle?: string;
  description?: TypedObject[];
  mainImage?: ImageProps;
};

export const Hero = ({
  title,
  subtitle,
  description,
  mainImage,
}: HeroProps) => {
  return (
    <Center>
      <Flex
        className={classes.container}
        direction={{ base: "column" }}
        align="center"
        maw={{ base: rem(500), lg: rem(500), xl: rem(600) }}
      >
        {mainImage && (
          <Box className={classes.imageWrapper}>
            <Image
              src={sanityImageUrl(mainImage).url()}
              width={350}
              height={400}
              alt={title || ""}
              priority
            />
          </Box>
        )}
        <Box>
          {title && (
            <Title order={2} size={rem(36)} className={classes.title}>
              {title}
            </Title>
          )}
          {subtitle && (
            <Title order={3} size={rem(24)}>
              {subtitle}
            </Title>
          )}

          <Box className={classes.description}>
            {description?.map((item: TypedObject, index: number) => (
              <PortableText key={index} value={item} />
            ))}
          </Box>
        </Box>
      </Flex>
    </Center>
  );
};
