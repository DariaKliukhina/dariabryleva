import { Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { PrimaryContainer } from "../../Bits/PrimaryContainer";

import { LangSwitcher } from "../../Bits/LangSwitcher";
import { Link } from "@/navigation";
import { LanguagesTypes } from "@/types";
import { ColorSchemeSwitcher } from "../../Bits/ColorSchemeSwitcher";

type HeaderProps = {
  locale: LanguagesTypes;
};

const links = [
  { link: "/experience", label: "Experience" },
  { link: "/reviews", label: "Reviews" },
];

export const Header = ({ locale }: HeaderProps) => {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
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
          <Link href="/">Home</Link>
          <Group gap={16} visibleFrom="sm">
            {items}
            <LangSwitcher locale={locale} />
            <ColorSchemeSwitcher />
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </PrimaryContainer>
    </header>
  );
};
