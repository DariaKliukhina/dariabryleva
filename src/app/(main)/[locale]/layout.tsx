import type { Metadata } from "next";
import { getData } from "~/sanity/sanity-utils";
import { siteSettingsQuery } from "~/sanity/cms-queries";
import { PageLayout } from "@/components";
import { LanguagesTypes } from "@/types";
import { Suspense } from "react";
import { Loader } from "@mantine/core";
import "../globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData(siteSettingsQuery);
  if (data?.error) {
    return {};
  }
  const siteSettings = data[0];

  return {
    title: {
      template: `%s | ${siteSettings?.title}`,
      default: siteSettings?.title,
    },
    description: siteSettings?.description,
    // favicon: siteSettings?.favicon?.asset?.url,
    // openGraph: {
    //   title: data?.title,
    //   description: data?.description,
    //   url: env.NEXT_PUBLIC_BASE_URL,
    //   siteName: "Daria Bryleva",
    //   images: [
    //     {
    //       url: data?.openGraphImage?.asset?.url,
    //       width: 1366,
    //       height: 490,
    //       alt: data?.openGraphImageAltText,
    //     },
    //   ],
    //   locale: "en_US",
    //   type: "website",
    // },

  };
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: LanguagesTypes };
}) {
  return (
    <Suspense fallback={<Loader color="violet" />}>
      <PageLayout locale={locale}>{children}</PageLayout>
    </Suspense>
  );
}
