import React from "react";
import { RootStyleRegistry } from "@/components";
import { LanguagesTypes } from "@/types";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: LanguagesTypes };
}) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
