// "use client"
import { Group, Burger, ThemeIcon } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.scss";
import { PrimaryContainer } from "../../Bits/PrimaryContainer";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

const links = [
  { link: "/experience", label: "Experience" },
  { link: "/reviews", label: "Reviews" },
];

export const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale || "en";
  const targetLocale = currentLocale === "ru" ? "en" : "ru";

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
            <Link href={pathname.replace(/^\/(en|ru)/, "/" + targetLocale)}>
              {targetLocale}
            </Link>
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </PrimaryContainer>
    </header>
  );
};
