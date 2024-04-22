import { LanguagesTypes } from "@/types";
import { adaptTotlaDate } from "@/utils";
import { Flex, Text } from "@mantine/core";
import React from "react";

type AdaptedDateProps = {
  date: number;
  locale: LanguagesTypes;
};

export const AdaptedDate = ({ date, locale }: AdaptedDateProps) => {
  const adaptedTotalDate = adaptTotlaDate(date, locale);
  return (
    <Flex gap={6}>
      {adaptedTotalDate?.adaptedYears && (
        <Text>{adaptedTotalDate.adaptedYears}</Text>
      )}
      {adaptedTotalDate?.adaptedMonth && (
        <Text>{adaptedTotalDate.adaptedMonth}</Text>
      )}
    </Flex>
  );
};
