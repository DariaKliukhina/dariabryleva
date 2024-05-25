import { ActionBlock } from "@/components";
import { useTranslations } from "next-intl";

type LeaveReviewProps = {
  description?: any[];
}

export const LeaveReview = ({ description }: LeaveReviewProps) => {
  const t = useTranslations("Feedback");
  return (
    <ActionBlock
      description={description}
      href={"/leave-review"}
      buttonLabel={t("buttonLabel")}
    />
  );
};
