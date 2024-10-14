import React from "react";
import { Textarea } from "@mantine/core";
import classes from "./PrimaryTextarea.module.css";

type PrimaryTextareaProps = {
  label?: string;
  placeholder?: string;
  withAsterisk?: boolean;
};

export const PrimaryTextarea = ({
  label = "",
  placeholder = "",
  withAsterisk = false,
  ...props
}: PrimaryTextareaProps) => {
  return (
    <Textarea
      withAsterisk={withAsterisk}
      label={label}
      placeholder={placeholder}
      classNames={classes}
      {...props}
    />
  );
};
