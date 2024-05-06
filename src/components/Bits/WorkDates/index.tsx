import { MONTH } from "@/utils";
import { Text } from "@mantine/core";
import React from "react";

type Date = {
  month: number;
  year: number;
};

type WorkDates = {
  startDate: Date;
  endDate?: Date;
  title: string;
};

export const WorkDates = ({ startDate, endDate, title }: WorkDates) => {
  const isSameYear = endDate && startDate.year === endDate.year;

  return (
    <Text>
      {MONTH[startDate.month - 1]} {isSameYear ? "" : startDate.year} -
      {endDate
        ? ` ${`${MONTH[endDate.month - 1]} ${endDate.year}`}`
        : " " + title}
    </Text>
  );
};
