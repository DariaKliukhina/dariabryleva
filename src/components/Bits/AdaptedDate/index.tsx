import { adaptTotlaDate } from "@/utils";
import { Flex, Text } from "@mantine/core";
import React from "react";

type AdaptedDateProps = { date: number };

export const AdaptedDate = ({ date }: AdaptedDateProps) => {
  const adaptedTotalDate = adaptTotlaDate(date);
  return (
    <Flex gap={6}>
      {adaptedTotalDate.adaptedYears && (
        <Text>{adaptedTotalDate.adaptedYears}</Text>
      )}
      {adaptedTotalDate.adaptedMonth && (
        <Text>{adaptedTotalDate.adaptedMonth}</Text>
      )}
    </Flex>
  );
};
