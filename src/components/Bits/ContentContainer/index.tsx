import { Box, rem } from "@mantine/core";
import classes from "./ContentContainer.module.css";

export const ContentContainer = ({
  children,
  className=""
}: {
  className?: string;
  children: React.ReactElement;
}) => {
  return <Box className={`${classes.root} ${className}`}>{children}</Box>;
};
