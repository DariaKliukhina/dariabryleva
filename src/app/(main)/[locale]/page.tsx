import { LanguagesTypes } from "@/types";
import { homepageQuery } from "~/sanity/cms-queries";
import { getData } from "~/sanity/sanity-utils";
import { getTranslations } from "next-intl/server";
import { DEFAULT_LOCALE } from "@/navigation";
import { Box, Button } from "@mantine/core";
import Image from "next/image";
import { sanityImageUrl } from "~/sanity/lib/client";
export const dynamic = "force-dynamic";
export const revalidate = 0;

type PageParams = {
  locale: LanguagesTypes;
};

export default async function Home({
  params: { locale },
}: {
  params: PageParams;
}) {
  const t = await getTranslations({ locale, namespace: "Index" });
  const data = await getData(homepageQuery, { lang: locale || DEFAULT_LOCALE });

  if (!data?.mainInfo) return <>no data</>;
  const {
    mainImage,
    mainInfo: { title, description },
  } = data;

  return (
    <>
      <Box
        style={{
          width: 300,
          height: 300,
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <Image
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={sanityImageUrl(mainImage).url()}
          width={350}
          height={400}
          alt={title}
          priority
        />
      </Box>
      <h2>{title}</h2>
      <p>{description}</p>
      <Button variant="outline">{t("button")}</Button>
    </>
  );
}
