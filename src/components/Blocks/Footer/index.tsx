import { PrimaryContainer } from "@/components";
import { LanguagesTypes } from "@/types";
import { Box, Flex, Group } from "@mantine/core";
import Link from "next/link";
import React from "react";
import classes from "./Footer.module.css";
import { SocialLinks } from "@/components/Bits/SocialLinks";

type LinkProps = {
  label: string;
  link: string;
};

type FooterProps = {
  locale: LanguagesTypes;
  links: LinkProps[];
};

export const Footer = ({ locale, links }: FooterProps) => {
  const items = links?.map((link) => {
    return (
      <Link
        key={link.label}
        href={link.link}
        className={classes.link}
        locale={locale}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <Box component="footer">
      <PrimaryContainer>
        <Box className={classes.root}>
          <Group justify="space-between" align="center">
            <Group>{items}</Group>
            <SocialLinks />
          </Group>
        </Box>
      </PrimaryContainer>
    </Box>
  );
};
