"use client";

import { Group, Burger, Box, Drawer, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PrimaryContainer } from "../../Bits/PrimaryContainer";

import { LangSwitcher } from "../../Bits/LangSwitcher";
import { LanguagesTypes } from "@/types";
import { ColorSchemeSwitcher } from "../../Bits/ColorSchemeSwitcher";
import { IconPlant2 } from "@tabler/icons-react";
import { Link, usePathname } from "@/navigation";
import { SocialLinks } from "@/components/Bits/SocialLinks";
import { useEffect, useState } from "react";
import classes from "./Header.module.css";

type LinkProps = {
  label: string;
  link: string;
};

type HeaderProps = {
  locale: LanguagesTypes;
  home: string;
  links: LinkProps[];
  mobileMenuLinks: LinkProps[];
};

export const Header = ({
  locale,
  home,
  links,
  mobileMenuLinks,
}: HeaderProps) => {
  const [opened, { toggle }] = useDisclosure(false);
  const [activePage, setActivePage] = useState("/");

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      setActivePage("/");
    } else {
      setActivePage(pathname);
    }

    if (opened) {
      toggle();
    }
  }, [pathname]);

  const items = links?.map((link) => {
    return (
      <Link
        key={link.label}
        href={link.link}
        className={`${classes.link} ${
          link.link === activePage ? "active-page" : ""
        }`}
        locale={locale}
      >
        {link.label}
      </Link>
    );
  });
  const mobileItems = mobileMenuLinks?.map((link) => {
    return (
      <Link
        key={link.label}
        href={link.link}
        className={`${classes.link} ${
          link.link === activePage ? "active-page" : ""
        }`}
        locale={locale}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <Box className={classes.header} component="header">
      <PrimaryContainer>
        <Box className={classes.inner}>
          <Link href="/" aria-label="home" className={classes.home}>
            <IconPlant2 stroke={1.5} className={classes.iconHome} />
            {home}
          </Link>
          <Group>
            <Group gap={16} visibleFrom="xs" component="nav">
              {items}
            </Group>
            <LangSwitcher locale={locale} />
            <ColorSchemeSwitcher />
            <Burger
              opened={opened}
              onClick={toggle}
              size="sm"
              hiddenFrom="xs"
            />
          </Group>
        </Box>

        <Drawer
          opened={opened}
          onClose={toggle}
          classNames={{
            body: classes.mobileMenuBody,
            content: classes.mobileMenuContent,
          }}
        >
          <Stack justify="space-between" className={classes.mobileMenu}>
            <Box>
              <Link href="/" aria-label="home" className={classes.home}>
                <IconPlant2 stroke={1.5} className={classes.iconHome} />
                {home}
              </Link>

              <Stack className={classes.mobileNavigation}>
                {items}
                {mobileItems}
              </Stack>
            </Box>

            <Box className={classes.social}>
              <SocialLinks />
            </Box>
          </Stack>
        </Drawer>
      </PrimaryContainer>
    </Box>
  );
};
