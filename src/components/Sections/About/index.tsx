import { ProseableText } from "@/components/Blocks/PortableText";
import { Box } from "@mantine/core";
import React from "react";
import { TypedObject } from "sanity";

type AboutSectionProps = {
  content: any[];
  title?: string;
}

export const AboutSection = ({ content, title }: AboutSectionProps) => {
  return (
    <Box>
      <ProseableText value={content} />
    </Box>
  );
};
