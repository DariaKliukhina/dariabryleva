import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { getData } from "~/sanity/sanity-utils";
import { siteSettingsQuery } from "~/sanity/cms-queries";
import { PageLayout } from "@/components";
import { LanguagesTypes } from "@/types";

const inter = Inter({ subsets: ["latin"] });

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
    //   siteName: "Intervista",
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
    // twitter: {
    //   card: "summary_large_image",
    //   title: data?.title,
    //   site: "@intervista",
    //   description: data?.description,
    //   creator: "@intervista",
    //   images: [
    //     {
    //       url: data?.twitterImage?.asset?.url,
    //       alt: data?.twitterImageAltText,
    //     },
    //   ],
    // },
  };
}

export default function RootLayout({
  children,
  params: {locale},
}: {
  children: React.ReactNode;
  params: { locale: LanguagesTypes };
}) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <PageLayout locale={locale}>{children}</PageLayout>
      </body>
    </html>
  );
}
