import { Box, rem } from "@mantine/core";
import classes from "./ContentContainer.module.css";

export const ContentContainer = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  return <Box className={classes.root}>{children}</Box>;
};
