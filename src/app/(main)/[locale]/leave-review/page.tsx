import { ReviewFormSection } from "@/components";
import { LanguagesTypes } from "@/types";

type PageParams = {
  locale: LanguagesTypes;
};

export default async function LeaveReviewPage({
  params: { locale },
}: {
  params: PageParams;
}) {
  return <ReviewFormSection />;
}
