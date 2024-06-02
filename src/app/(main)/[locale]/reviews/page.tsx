import { LanguagesTypes } from "@/types";

type PageParams = {
  locale: LanguagesTypes;
};

export default async function ReviewsPage({
  params: { locale },
}: {
  params: PageParams;
}) {
  return <>Reviews</>;
}
