import { homepageQuery } from "~/sanity/cms-queries/homepage";
import { getData } from "~/sanity/sanity-utils";
import { HomePageClient } from "./pageClient";

export default async function Home() {
  const data = await getData(homepageQuery);

  if (!data) return <>no data</>;

  return <HomePageClient data={data?.mainInfo} />;
}
