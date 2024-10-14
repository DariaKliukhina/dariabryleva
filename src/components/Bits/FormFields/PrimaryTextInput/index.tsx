import React from "react";
import { TextInput } from "@mantine/core";
import classes from "./PrimaryTextInput.module.css";

type PrimaryTextInputProps = {
  label?: string;
  placeholder?: string;
  withAsterisk?: boolean;
};

export const PrimaryTextInput = ({
  label = "",
  placeholder = "",
  withAsterisk = false,
  ...props
}: PrimaryTextInputProps) => {
  return (
    <TextInput
      withAsterisk={withAsterisk}
      label={label}
      placeholder={placeholder}
      classNames={classes}
      {...props}
    />
  );
};
