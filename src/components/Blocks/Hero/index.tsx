import { Box, Button, Center, Flex, Title, rem } from "@mantine/core";
import { useTranslations } from "next-intl";
import Image, { ImageProps } from "next/image";
import { sanityImageUrl } from "~/sanity/lib/client";
import classes from "./Hero.module.css";

type HeroProps = {
  title?: string;
  description?: string;
  mainImage?: ImageProps;
};

export const Hero = ({ title, description, mainImage }: HeroProps) => {
  const t = useTranslations("Index");

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
            <Title order={2} size={rem(36)}>
              {title}
            </Title>
          )}
          {description && <p>{description}</p>}

          {/* <Button variant="outline">{t("button")}</Button> */}
        </Box>
      </Flex>
    </Center>
  );
};
