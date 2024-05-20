import { Container, rem } from "@mantine/core";
import React from "react";

export const ContentContainer = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  return (
    <Container px={0} py={rem(40)} size={rem(800)}>
      {children}
    </Container>
  );
};
