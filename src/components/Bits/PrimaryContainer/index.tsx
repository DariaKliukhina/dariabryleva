import React from "react";
import { theme } from "@/theme";
import { Container, ContainerProps, rem } from "@mantine/core";

interface ContaiernProps extends ContainerProps {
  children: React.ReactNode;
}

export const PrimaryContainer = ({ children, ...props }: ContaiernProps) => {
  return (
    <Container
      px={rem(26)}
      size={theme?.other?.containerSize || "xl"}
      {...props}
    >
      {children}
    </Container>
  );
};
