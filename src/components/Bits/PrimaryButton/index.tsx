import React from "react";
import { theme } from "@/theme";
import { Button, ButtonProps } from "@mantine/core";
import classes from "./PrimaryButton.module.css";

interface PrimaryButtonType extends ButtonProps {
  type: "submit" | "button";
  onClick?: () => void;
}

export const PrimaryButton = ({
  children,
  onClick = () => {},
  type = "button",
}: PrimaryButtonType) => {
  return (
    <Button onClick={onClick} type={type} classNames={classes}>
      {children}
    </Button>
  );
};
