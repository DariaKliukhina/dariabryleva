import { Box } from "@mantine/core";
import React from "react";

export const Position = ({
  company,
  description,
  locationType,
  workType,
  position,
  technologies,
}) => {
  return <Box>
    {company.name}
    {position}
    {workType}
    {locationType}
    {description}
    {technologies.map((item) => <Box key={item.slug}>{item.title}</Box>)}
  </Box>;
};
