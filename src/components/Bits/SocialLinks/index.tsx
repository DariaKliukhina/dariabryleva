import { Group } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";
import classes from "./SocialLinks.module.css";

const links = [
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/bryleva-daria/",
    icon: <IconBrandLinkedin className={classes.icon} />,
  },
  {
    name: "github",
    href: "https://github.com/DariaKliukhina/dariabryleva",
    icon: <IconBrandGithub className={classes.icon} />,
  },
];

export const SocialLinks = () => {
  return (
    <Group align="center">
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.name}
          aria-label={link.name}
          target="_blank"
        >
          {link.icon}
        </Link>
      ))}
    </Group>
  );
};
