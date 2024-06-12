import { Box } from "@mantine/core";
import React from "react";
import classes from "./Tag.module.css";

type TagProps = {
  children: string | React.ReactNode;
};

export const Tag = ({ children }: TagProps) => {
  return <Box className={classes.root}>{children}</Box>;
};
