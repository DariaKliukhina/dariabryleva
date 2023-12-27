import React from "react";
import Link from "next/link";
import { useLocales } from "@/hooks";

export const LangSwitcher = () => {
  const { targetPath, targetLocale } = useLocales();
  return <Link href={targetPath}>{targetLocale}</Link>;
};
