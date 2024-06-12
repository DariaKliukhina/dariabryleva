import {
  useMantineColorScheme,
  useComputedColorScheme,
  Box,
} from "@mantine/core";
import cx from "clsx";
import classes from "./ColorSchemeSwitcher.module.css";
import MoonIcon from "../Icons/MoonIcon";
import SunIcon from "../Icons/SunIcon";

export const ColorSchemeSwitcher = () => {
  const { setColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const isLight = computedColorScheme === "light";

  return (
    <Box
      component="button"
      className={`${classes.icon} accent`}
      onClick={() => setColorScheme(isLight ? "dark" : "light")}
      aria-label={isLight ? "dark" : "light"}
    >
      <SunIcon className={cx(classes.icon, classes.light)} />
      <MoonIcon className={cx(classes.icon, classes.dark)} />
    </Box>
  );
};
