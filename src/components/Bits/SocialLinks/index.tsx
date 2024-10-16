import { Group, rem } from "@mantine/core";
import Link from "next/link";
import classes from "./SocialLinks.module.css";
import LinkedinIcon from "../Icons/LinkedinIcon";
import GithubIcon from "../Icons/GithubIcon";

const links = [
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/bryleva-daria/",
    icon: <LinkedinIcon />,
  },
  {
    name: "github",
    href: "https://github.com/DariaKliukhina",
    icon: <GithubIcon />,
  },
];

export const SocialLinks = () => {
  return (
    <Group align="center" gap={rem(12)}>
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.name}
          aria-label={link.name}
          target="_blank"
          className={classes.link}
        >
          {link.icon}
        </Link>
      ))}
    </Group>
  );
};
