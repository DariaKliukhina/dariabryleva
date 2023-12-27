// "use client"
import { Group, Burger, ThemeIcon } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.scss";
import { PrimaryContainer } from "../../Bits/PrimaryContainer";
import Link from "next/link";

const links = [
  { link: "/experience", label: "Experience" },
  { link: "/reviews", label: "Reviews" },
];

export const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    return (
      <Link
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <header className={classes.header}>
      <PrimaryContainer>
        <div className={classes.inner}>
          <Link href={"/"}>home</Link>
          <Group gap={5} visibleFrom="sm">
            {/* <ThemeIcon component="button">{language === "ru" ? "en" : "ru"}</ThemeIcon> */}
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </PrimaryContainer>
    </header>
  );
};
