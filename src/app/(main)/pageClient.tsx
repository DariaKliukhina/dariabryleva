"use client";

import { useStore } from "@/store";

type HomepageData = {
  title: {
    [key: string]: string
  };
  description: {
    [key: string]: string
  };
};

export const HomePageClient = ({ data }: { data: HomepageData }) => {
  const { language } = useStore();

  const { title, description } = data;

  return (
    <>
      <h2>{title[language]}</h2>
      <p>{description[language]}</p>
    </>
  );
};
