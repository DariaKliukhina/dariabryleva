import React from "react";
import { PageLayout } from "@/components";
import { LanguagesTypes } from "@/types";

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: LanguagesTypes };
}) {
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
