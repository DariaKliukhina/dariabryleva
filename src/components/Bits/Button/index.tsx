import { Button, ButtonProps } from "@mantine/core";
import "@mantine/core/styles/UnstyledButton.css";
import "@mantine/core/styles/Button.css";

interface PrimaryButtonProps extends ButtonProps {
  label: string;
}

export const PrimaryButton = ({
  variant = "filled",
  size = "md",
  label,
  ...props
}: PrimaryButtonProps) => {
  return (
    <Button variant={variant} size={size} {...props}>
      {variant}
    </Button>
  );
};
