import { ReviewFormWrapper } from "@/components/Blocks/ReviewFormWrapper";
import { useTranslations } from "next-intl";

export const ReviewFormSection = () => {
  const t = useTranslations("LeaveReview");

  const data = {
    name: t("name"),
    namePlaceholder: t("namePlaceholder"),
    nameError: t("nameError"),
    email: t("email"),
    emailPlaceholder: t("emailPlaceholder"),
    message: t("message"),
    messagePlaceholder: t("messagePlaceholder"),
    messageError: t("messageError"),
    submit: t("submit"),
    title: t("title"),
    success: t("success"),
    howDoYouKnowMe: t("howDoYouKnowMe"),
    teacher: t("teacher"),
    collegue: t("collegue"),
  };

  return <ReviewFormWrapper data={data} />;
};
