"use client";

import { Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { PrimaryContainer } from "../../Bits/PrimaryContainer";

import { LangSwitcher } from "../../Bits/LangSwitcher";
import { Link } from "@/navigation";
import { LanguagesTypes } from "@/types";
import { ColorSchemeSwitcher } from "../../Bits/ColorSchemeSwitcher";
import { IconPlant2 } from "@tabler/icons-react";

type LinkProps = {
  label: string;
  link: string;
};

type HeaderProps = {
  locale: LanguagesTypes;
  home: string;
  links: LinkProps[];
};

export const Header = ({ locale, home, links }: HeaderProps) => {
  const [opened, { toggle }] = useDisclosure(false);

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
    <header className={classes.header}>
      <PrimaryContainer>
        <div className={classes.inner}>
          <Link href="/" aria-label="home" className={classes.home}>
            <IconPlant2 stroke={1.5} className={classes.iconHome} />
            {home}
          </Link>
          <Group>
            <Group gap={16} visibleFrom="sm">
              {items}
            </Group>
            <LangSwitcher locale={locale} />
            <ColorSchemeSwitcher />
            <Burger
              opened={opened}
              onClick={toggle}
              size="sm"
              hiddenFrom="sm"
            />
          </Group>
        </div>
      </PrimaryContainer>
    </header>
  );
};
