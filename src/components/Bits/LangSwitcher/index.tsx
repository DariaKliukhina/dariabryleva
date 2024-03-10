import React from "react";
import { Link, usePathname } from "@/navigation";
import { LanguagesTypes } from "@/types";

type LangSwitcherProps = {
  locale: LanguagesTypes;
};

export const LangSwitcher = ({ locale }: LangSwitcherProps) => {
  const targetLocal = locale === "en" ? "ru" : "en";
  const path = usePathname();
  return (
    <Link href={path} locale={targetLocal}>
      {targetLocal}
    </Link>
  );
};
