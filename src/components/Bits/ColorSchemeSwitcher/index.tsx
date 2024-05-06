import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import cx from "clsx";
import classes from "./ColorSchemeSwitcher.module.css";

export const ColorSchemeSwitcher = () => {
  const { setColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      variant="subtle"
      size="md"
      aria-label="Toggle color scheme"
    >
      <IconSun
        className={cx(classes.icon, classes.light)}
        stroke={1.5}
        aria-label="light"
      />
      <IconMoon
        className={cx(classes.icon, classes.dark)}
        stroke={1.5}
        aria-label="dark"
      />
    </ActionIcon>
  );
};
