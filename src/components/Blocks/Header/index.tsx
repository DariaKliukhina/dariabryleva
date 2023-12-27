import { Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.scss";
import { PrimaryContainer } from "../../Bits/PrimaryContainer";
import Link from "next/link";
import { LangSwitcher } from "../../Bits/LangSwitcher";
import { useLocales } from "@/hooks";

const links = [
  { link: "/experience", label: "Experience" },
  { link: "/reviews", label: "Reviews" },
];

export const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const { currentLocale } = useLocales();

  const items = links.map((link) => {
    return (
      <Link
        key={link.label}
        href={"/" + currentLocale + link.link}
        className={classes.link}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <header className={classes.header}>
      <PrimaryContainer>
        <div className={classes.inner}>
          <Link href={"/" + currentLocale}>home</Link>
          <Group gap={5} visibleFrom="sm">
            <LangSwitcher />
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </PrimaryContainer>
    </header>
  );
};
